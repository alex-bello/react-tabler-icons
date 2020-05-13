const chalk = require("chalk");
const convert = require("xml-js");
const fs = require("fs");
const mustache = require("mustache");
const pascalCase = require("change-case").pascalCase;
const path = require("path");
const prettier = require("prettier");

const dir = process.cwd();
const prettierOptions = prettier.resolveConfig(dir) || {};
const PATHS = {
  SOURCE: path.join(dir, "./node_modules/tabler-icons/icons"),
  COMPONENT_DEST: path.join(dir, "./lib/components"),
  COMPONENT_TEMPLATE: path.join(dir, "./src/templates/iconComponent.mustache"),
  INDEX_DEST: path.join(dir, "./lib"),
  INDEX_TEMPLATE: path.join(dir, "./src/templates/index.txt")
};

const getFiles = () => {
  return fs.readdirSync(PATHS.SOURCE).filter(file => file.endsWith(".svg"));
};

const generateFile = (file, template) => {
  const [originalName] = file.split(".");
  const componentName = pascalCase(originalName).replace("_", "");
  const fileContents = fs.readFileSync(path.resolve(PATHS.SOURCE, file), "utf8");
  const icon = convert.xml2js(fileContents);

  const attributes = icon.elements[0].attributes;
  attributes.height = '{height || "24"}';
  attributes.width = '{width || "24"}';
  attributes["stroke-width"] = '{stroke || "1.25"}';

  const rendered = mustache.render(template, {
    componentName,
    fileContents: convert.js2xml(icon)
  });

  const formatted = prettier
    .format(rendered, { parser: "babel", ...prettierOptions })
    .replace(/'/g, "")
    .replace("class=", "className=")
    .replace(/(stroke)-(.)/g, (match, p1, p2) => `${p1}${p2.toUpperCase()}`);

  if (prettier.check(formatted, { parser: "babel", ...prettierOptions })) {
    fs.writeFileSync(path.resolve(PATHS.COMPONENT_DEST, `${componentName}.js`), formatted);
  } else {
    console.log(chalk.red(`${componentName} did not render as expected`));
  }

  return componentName;
};

const build = () => {
  // Ensure the dist directory is created.
  fs.mkdirSync(PATHS.COMPONENT_DEST, { recursive: true });
  const components = [];

  // Get template file
  const template = fs.readFileSync(PATHS.COMPONENT_TEMPLATE, "utf8");

  // Create the component files
  getFiles().forEach(x => components.push(`export * from "./${generateFile(x, template)}";`));

  // Create components index file
  fs.writeFileSync(
    path.resolve(PATHS.COMPONENT_DEST, "index.js"),
    prettier.format(components.join("\n"), {
      parser: "babel",
      ...prettierOptions
    })
  );

  // Generate Index File
  fs.copyFileSync(PATHS.INDEX_TEMPLATE, path.join(PATHS.INDEX_DEST, "index.js"));
};

build();
