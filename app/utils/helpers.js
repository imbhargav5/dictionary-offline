/**
 * Helper methods
 */

export const isClient = new Function("try {return this===window;}catch(e){ return false;}");

export default {};