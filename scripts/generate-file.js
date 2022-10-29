const readline = require('readline')
const fs = require('fs');
const path = require('path')

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const answers = {
  module: null,
  withWriteFiles: null
}

RL.question('Type a module that you want to create the files: \n -> ', function(answer) {
  answers.module = answer

  RL.question('Do you want to create with files ready to use? (y/n) \n -> ', function(answer) {
    const reg = /y|Y|n|N/

    const yesTest = /y|Y/
    const noTest = /n|N/
  
    if(!reg.test(answer)){
      RL.write('Incorrect option')
      RL.close()
    }

    if(yesTest.test(answer)) answers.withWriteFiles = true
    if(noTest.test(answer)) answers.withWriteFiles = false

    RL.question('Type the name of the component or page separate by \'-\': \n -> ', async function(answer) {
      const isComponent = answer.split('-')[0].toLowerCase().includes('component')
      const isPage = answer.split('-')[0].toLowerCase().includes('page')

      if(!isComponent  && !isPage) {
        RL.write('Write a correct value')
        RL.close()
      }
      const filename = answer.split('-').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join('')

      const folder = isComponent ? 'components' : 'pages'
      const replaceTitle = isComponent ? 'Component' : 'Page'

      await generateModuleFolders(filename, folder)
      await generateFiles(filename, folder, replaceTitle)
    })
  })
})

async function generateModuleFolders(filename, folderName) {
  console.log('generating folders... 📁')
  await fs.promises.mkdir(path.join(__dirname, `../src/modules/${answers.module}/${folderName}/${filename}`), { recursive: true })
}

async function generateFiles(filename, folder, replaceTitle){
  console.log('Creating contracts file... 🗀')
  await fs.promises.writeFile(path.join(__dirname, `../src/modules/${answers.module}/${folder}/${filename}/${filename}.contracts.ts`), ContractsTemplate(filename, replaceTitle))
  console.log('Creating style file... 🗀')
  await fs.promises.writeFile(path.join(__dirname, `../src/modules/${answers.module}/${folder}/${filename}/${filename}.style.ts`), StyleTemplate())
  console.log('Creating component file... 🗀')
  await fs.promises.writeFile(path.join(__dirname, `../src/modules/${answers.module}/${folder}/${filename}/${filename}.ts`), ComponentTemplate(filename, folder, replaceTitle))
  console.log('Done! ✔️')
  RL.close()
}


function ComponentTemplate(filename, folder, replaceTitle){

  if(!answers.withWriteFiles) return ''

  const stylePath = `./${filename}.style`
  const contractsPath = `./${filename}.contracts`
  const funtionName = filename.replace(replaceTitle, '')

  return `
    import * as style from '${stylePath}'
    import { ${funtionName}Props } from '${contractsPath}'
    export function ${funtionName} {
      console.log('state')

      return (
        <style.Container>Olá mundo</style.Container>
      )
    }
  `
}

function ContractsTemplate(filename, replaceTitle) {
  if(!answers.withWriteFiles) return ''

  const title = filename.replace(replaceTitle, '')

  return `
    export type ${title}Props = {}
  `
}

function StyleTemplate(){
  if(!answers.withWriteFiles) return ''

  return `
    import styled from 'styled-components'

    export const Container = styled.div\`

    \`
  `
}