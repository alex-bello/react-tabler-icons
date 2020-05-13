const clean = require("./cleanDirectory");

// remove all files in the dist folder.
clean("./dist");
clean("./lib");
clean("./.cache");
