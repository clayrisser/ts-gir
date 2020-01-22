const JavaScriptCore = imports.gi.JavaScriptCore;
const JavaScriptCoreContext = JavaScriptCore.Context;
JavaScriptCore.Context = class Context extends JavaScriptCoreContext {
  constructor(...props) {
    super(...props);
    this.g_throw = this.throw;
  }
};
export default JavaScriptCore;
