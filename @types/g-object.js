const GObject = imports.gi.GObject;
const GObjectCClosure = GObject.CClosure;
GObject.CClosure = class CClosure extends GObjectCClosure {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GObjectInitiallyUnownedClass = GObject.InitiallyUnownedClass;
GObject.InitiallyUnownedClass = class InitiallyUnownedClass extends GObjectInitiallyUnownedClass {
  constructor(...props) {
    super(...props);
    this.g_constructor = this.constructor;
  }
};
const GObjectObjectClass = GObject.ObjectClass;
GObject.ObjectClass = class ObjectClass extends GObjectObjectClass {
  constructor(...props) {
    super(...props);
    this.g_constructor = this.constructor;
  }
};
const GObjectParamSpecPool = GObject.ParamSpecPool;
GObject.ParamSpecPool = class ParamSpecPool extends GObjectParamSpecPool {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
export default GObject;
