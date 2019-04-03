/**
 Script used for creating docs. Nothing to see here
 */
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')
const globby = require('markdown-magic').globby

const toTitleCase = (str) => { // eslint-disable-line
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

const formatName = (string) => { // eslint-disable-line
  return toTitleCase(string.replace(/-/g, ' '))
}

const repoUrl = `https://github.com/DavidWells/netlify-functions-workshop`

const cleanMatches = (matches) => {
  return matches.map((m) => {
    return m
      .replace(/^\s+|\s+$/g, '')
      .replace(/\/\*/g, '') // remove js comments
      .replace(/\*\//g, '') // remove js comments
      .replace(/^#/g, '') // remove # comments
      .replace(/#$/g, '') // remove # comments
      .replace(/^\<\!--/g, '') // remove html comments
      .replace(/--\>$/g, '') // remove html comments
      .replace(/^\s+|\s+$/g, '')
      // .replace(/^!$/g,'') // remove trailing !
      .replace(/\n#\s+/g, '\n')
      .replace(/^Step\s+/g, '')
  })
}

const config = {
  transforms: {
    README_BOTTOM(content, options, instance) {
      console.log('instance.outputDir', instance.outputDir)
      const repoBase = `${repoUrl}/tree/master`
      const baseLink = `${repoBase}/${instance.outputDir}`

      let answersLink = baseLink.replace(/lessons/g, 'lessons-code-complete')
      answersLink = answersLink.replace(/\_instructor/g, 'lessons-code-complete')

      const link = `## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](${answersLink})`

      return link
    },
    // Build lessons list from _instructor directory
    GENERATE_LESSONS_LIST(content, options) {
      const lessonsPath = path.join(__dirname, '..', '_instructor')
      const files = fs.readdirSync(lessonsPath)

      const data = files.filter((file) => {
        const filePath = path.join(lessonsPath, file)
        const stat = fs.statSync(filePath)
        // return all directories
        return stat && stat.isDirectory()
      }).map((file) => {
        const filePath = path.join(lessonsPath, file)
        const examples = globby.sync([
          // `!node_modules`,
          `${filePath}/**/**.md`,
          `!${filePath}/node_modules/**/**`,
          `!${filePath}/**/node_modules/**/**`,
          // `!${filePath}/node_modules/**/**.md`,
          // `!${filePath}/**/node_modules/**/**.md`,
        ])

        // console.log('examples', examples)
        // console.log('filePath', filePath)
        // process.exit(1)
        let md = `### ${formatName(file)}

${generateTable(examples)}
`
        return md
      })

      return data.join('\n')
    },

    GENERATE_LESSONS_STEPS(content, options, instance) {
      // console.log('instance.outputDir', instance.outputDir)

      // debug single file
      // if (instance.outputDir !== "_instructor/events/step-functions") {
      //   return content
      // }
      const lessonFiles = globby.sync(['**', '!node_modules'], {
        cwd: instance.outputDir
      })
      const jsRegex = /\/\* Step([\s\S]*?)\*\//g
      const ymlRegex = / *?# Step([\s\S]*?) #\n*?/g
      const htmlRegex = / *?\<\!-- Step([\s\S]*?) ?--\>\n*?/g
      var matches = []
      if (lessonFiles) {
        lessonFiles.map((f) => {
          const filePath = path.join(instance.outputDir, f)
          if (fs.lstatSync(filePath).isDirectory()) {
            // skip dirs
            return
          }
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const fileType = path.extname(f)

          var regex = jsRegex
          if (fileType === '.js') {
            regex = jsRegex
          } else if (fileType === '.yml' || fileType === '.yaml' || fileType === '.toml') {
            regex = ymlRegex
          } else if (fileType === '.md') {
            regex = htmlRegex
          }

          const hasMatch = fileContents.match(regex)
          if (fileType === '.toml') {
            console.log('fileContents', fileContents)
            console.log('hasMatch', hasMatch)
          }

          if (hasMatch) {
            const formatMatch = hasMatch.map((match) => {
              return match.replace('this_file', `\`${f}\``)
            })
            matches = matches.concat(formatMatch)
          }
        })
      }

      // console.log('matches', matches)
      const steps = cleanMatches(matches)

      const sortedSteps = steps.reduce((accumulator, currentValue, currentIndex, array) => {
        const number = currentValue.match(/^[0-9]{1,3}/)[0]
        // console.log(number)
        // console.log(parseInt(number, 10))
        accumulator[currentIndex] = {
          step: parseInt(number, 10),
          value: currentValue
        }
        return accumulator
      }, []).sort((a, b) => {
        return a.step - b.step
      }).map((item) => {
        return item.value
      })

      return sortedSteps.join('\n\n')
    }
  }
}

// build lessons table
function generateTable(examples) {
  let md = '| Lesson | Final Code  |\n'
  md += '|:--------------------------- |:-----|\n'

  examples.sort((a, b) => {
    // Sort the folders by correct number prefix
    const baseOne = path.basename(path.dirname(a))
    const baseTwo = path.basename(path.dirname(b))
    const one = baseOne.match(/^[0-9]{1,3}/)[0]
    const two = baseTwo.match(/^[0-9]{1,3}/)[0]
    return one - two
  }).forEach((example) => {
    console.log('hi', example)

    const contents = fs.readFileSync(example, 'utf8')
    const dirname = path.basename(path.dirname(example))
    const parentDir = path.basename(path.dirname(path.dirname(example)))

    console.log('dirname', dirname)
    const repoBase = `${repoUrl}/tree/master`
    const baseLink = `${repoBase}/_instructor/${parentDir}/${dirname}`

    const lessonLink = baseLink.replace(/_instructor/g, 'lessons')
    const answersLink = baseLink.replace(/_instructor/g, 'lessons-code-complete')
    // console.log(content)
    const heading = contents.match(/^# (.*)/g)
    console.log('heading', heading)
    const description = (heading && heading[0]) ? heading[0].replace('# ', '') : ''
    // add table rows
    md += `| [${formatName(dirname)}](${lessonLink}) <br/> ${description} | [Complete Code](${answersLink})  |\n`
    // md += baseLink
  })
  return md
}

markdownMagic([
  'README.md',
  '_instructor/**/**.md',
  '!node_modules'
], config, () => {
  console.log('Docs updated!'); // eslint-disable-line
})
