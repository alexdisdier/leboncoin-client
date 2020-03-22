/**
 * Return ShallowWrapper containing node(s) with the given data-testid value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-testid attribute for search.
 * @returns {ShallowWrapper}
 */
export const getByTestId = (wrapper, val) => {
  return wrapper.find(`[data-testid="${val}"]`);
};
