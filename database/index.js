const path = require("path");
const fs = require("fs");

module.exports = {
    menu : JSON.parse(fs.readFileSync(path.join(__dirname, "./menu.json"), "utf-8"))
};
