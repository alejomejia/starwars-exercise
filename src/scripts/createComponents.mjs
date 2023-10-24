import validateComponentsName from './utils/validateComponentsName.mjs'
import transformComponentName from './utils/transformComponentName.mjs'
import pluralize from './utils/pluralize.mjs'
import createComponentFile from './utils/createComponentFile.mjs'

const [_a, _b, ...components] = process.argv

function createComponents() {
  validateComponentsName(components)

  const parsedComponentsNames = components.map(transformComponentName)

  for (const component of parsedComponentsNames) {
    createComponentFile(component)
  }

  const componentsCount = parsedComponentsNames.length
  const componentPluralized = pluralize({ count: componentsCount, singular: 'component' })
  const wasPluralized = pluralize({ count: componentsCount, singular: 'was', plural: 'were' })

  console.log(`✅ ${componentsCount} ${componentPluralized} ${wasPluralized} successfully created!`)
  process.exit(0)
}

createComponents()
