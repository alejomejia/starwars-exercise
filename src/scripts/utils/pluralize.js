/**
 * Receives a singular and plural string and returns the correct one based on the count
 *
 * @param {number} count - How many items are being pluralized
 * @param {string} singular - Singular string
 * @param {string=} plural - Optional plural string. If not provided, the singular string will be used with an 's' appended
 *
 * @returns {string}
 */

export function pluralize({ count, singular, plural }) {
  if (count === 1) {
    return singular
  }

  return plural ?? `${singular}s`
}
