const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const cleanDirectory = dir => {
  const dirPath = path.join(process.cwd(), dir);
  fs.rmdir(dirPath, { recursive: true }, err => callback(dir, err));
};

const callback = (dir, err) => {
  if (!err) {
    console.log(chalk.green(`Directory ${dir} removed`));
  } else {
    console.log(chalk.red("Directory Removal FAILED!"));
    console.log(chalk.red(err));
  }

  console.log(chalk.yellow("Clean script completed"));
};

module.exports = cleanDirectory;
