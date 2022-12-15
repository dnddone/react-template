/**
 * Facilitates `cx` usage:
 * ... `cx({ 'f-column': column, 'f-row': !column })
 * ... becomes `getClass('f-column', 'f-row')`
 */
export const createClassName = (condition) => (first, second) =>
  condition ? first : second;
