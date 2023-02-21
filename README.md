# README GENERATOR

## Table of Contents
* [Description](#description)
* [Application Demo](#application-demo)
* [Usage Instructions](#usage-instructions)
* [Code Examples](#code-examples)
* [Technologies Used](#technologies-used)
* [Questions](#questions)
* [License](#license)


## Description

The purpose of this project was to create a command-line application using node.js that generates readme files. It works by answering a set of questions in the terminal. This application uses the npm inquirer pacakage and it's required for the application to work.

## Application Demo

upcoming video.


## Usage Instructions

The instructions for this application to work are:
1. Clone this repository.
2. Open the repository in a code editor
3. go in your terminal and type ```install npm inquirer```, which will install the inquirer package required for this project.
4. in your terminal type ```Node index.js``` to start the application.
5. Answer all the questions in the terminal.
6. Once it's completed, a readme.md file will be created. It will include all the answers from the terminal.


## Code Examples

```js
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
            err ? console.log(err) : console.log("README.md file has now been generated!")
    })
}
```

The function that initializes the application.

```js
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

init();
```


## Technologies Used

![Java Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node Badge](https://img.shields.io/badge/Environment-Node.js-green)
![Inquirer Badge](https://img.shields.io/badge/NPM-Inquirer-red)
![License Badge](https://img.shields.io/badge/License-MIT-purple)


## Questions

If you have any questions, please contact me via email at nfallis2019@fau.edu.


## License

MIT License

Copyright (c) 2023 Nicole Fallis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
