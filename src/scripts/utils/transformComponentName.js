/**
 * Used to capitalize first letter of a string to fulfill the component name rules
 *
 * @param {string} componentName - Component name given by the user
 */

export function transformComponentName(componentName) {
  const firstChar = componentName.charAt(0).toUpperCase()
  const remainingChars = componentName.slice(1)

  return `${firstChar}${remainingChars}`
}
