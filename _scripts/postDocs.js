/**
 Script used for creating docs. Nothing to see here
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const globby = require('markdown-magic').globby

console.log('Post process lesson files')

const removeComments = / *?\<\!-- ([\s\S]*?) ?--\>\n\n*?/g

const directories = [
  'lessons-code-complete/**/**.md',
  'lessons/**/**.md',
  '!node_modules',
  '!lessons/**/node_modules',
  '!lessons-code-complete/**/node_modules',
]

const lessonFiles = globby.sync(directories, {
  cwd: path.join(__dirname, '..')
})

if (lessonFiles) {
  console.log(chalk.yellow('Removing comments from student files'))
  lessonFiles.map((f) => {
    const filePath = path.resolve(f)
    // console.log('filePath', filePath)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    // console.log(fileContents)
    const fileType = path.extname(f)

    const updatedContents = fileContents.replace(removeComments, '')
    fs.writeFileSync(filePath, updatedContents)
    // console.log('updatedContents', updatedContents)
  })
  console.log(chalk.green('Comments removed from markdown'))
}

// lessons/core-concepts/9-testing-functions/node_modules/xtend/.jshintrc
// '!lessons/**/**/node_modules',
const finalCode = [
  'lessons-code-complete/**/**.js',
  '!node_modules',
  // '!lessons/**/node_modules',
  // '!lessons-code-complete/**/node_modules',
  `!lessons/node_modules/*`,
  '!lessons/**/node_modules/*',
  '!lessons/**/**/node_modules/*',
  `!lessons-code-complete/node_modules/*`,
  '!lessons-code-complete/**/node_modules/*',
  '!lessons-code-complete/**/**/node_modules/*',
]

const jsRegex = /\/\* Step([\s\S]*?)\*\//g
const finalCodeFiles = globby.sync(finalCode, {
  cwd: path.join(__dirname, '..')
})

if (finalCodeFiles) {
  console.log(chalk.yellow('Removing comments from student files'))
  finalCodeFiles.map((f) => {
    const filePath = path.resolve(f)
    // console.log('filePath', filePath)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    // console.log(fileContents)
    const fileType = path.extname(f)

    const updatedContents = fileContents.replace(jsRegex, '')
    fs.writeFileSync(filePath, updatedContents)
    // console.log('updatedContents', updatedContents)
  })
  console.log(chalk.green('Comments removed from final code'))
}
