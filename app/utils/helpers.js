/**
 * Helper methods
 */

export const myEnvIsBrowserFn = new Function("try {return this===window;}catch(e){ return false;}");

export default {};