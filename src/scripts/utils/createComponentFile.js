import { mkdirSync, writeFileSync } from 'fs'

/**
 * Creates a component file with the given name
 *
 * @param {string} componentName - Name of the component to be created
 */

const DEFAULT_COMPONENT_PATH = 'src/components/'

export function createComponentFile(componentName) {
  const componentPath = `${DEFAULT_COMPONENT_PATH}${componentName}`

  mkdirSync(componentPath)

  const componentMainFile = `interface Props {}
  
export function ${componentName} ({}: Props) {
  return (
    <div>${componentName}</div>
  )
}
  `

  writeFileSync(`${componentPath}/${componentName}.tsx`, componentMainFile, (error) => {
    if (error) throw error
  })
}
