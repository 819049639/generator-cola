/*
 * @Author: wangqiang@feewee.cn
 * @Date: 2022-04-16 11:12:57
 * @LastEditors: wangqiang@feewee.cn
 * @LastEditTime: 2022-04-16 11:20:47
 */
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径
    const templates = ["app.js", "public/index.html", "src/index.ts"];

    templates.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    });
  }
};
