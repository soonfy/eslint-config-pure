const fs = require('fs')
const path = require('path')

const read = () => {
  try {
    const dirPath = path.join(__dirname, '.')
    const fileNames = fs.readdirSync(dirPath)
    console.info(fileNames)
    for (const name of fileNames) {
      console.info(`\n\nfile name --> ${name}\n\n`)
      const filePath = path.join(dirPath, name)
      const code = fs.readFileSync(filePath, 'utf-8')
      console.info(code)
    }
  } catch (error) {
    console.error(error)
  }
}

read()
