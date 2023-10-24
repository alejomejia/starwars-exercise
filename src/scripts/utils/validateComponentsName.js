import { existsSync } from 'fs'

/**
 * Helps validate the components names given by the user
 *
 * @param {string[]} components - Array of components names
 */

export function validateComponentsName(components) {
  if (!Boolean(components.length)) {
    console.log('🚫 You must give at least one component name...')
    process.exit(0)
  }

  const onlyLetters = new RegExp('[^A-Za-z]')

  for (const component of components) {
    if (component.match(onlyLetters)) {
      console.log('🚫 You should not include special characters or numbers, please try again...')
      process.exit(0)
    }

    if (component.includes(' ')) {
      console.log('🚫 Component name cannot contain spaces, please try again...')
      process.exit(0)
    }

    if (existsSync(`src/components/${component}`)) {
      console.log('🚫 Component already exists, please try again...')
      process.exit(0)
    }
  }
}
