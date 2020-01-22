const Pango = imports.gi.Pango;
const PangoAttrFontDesc = Pango.AttrFontDesc;
Pango.AttrFontDesc = class AttrFontDesc extends PangoAttrFontDesc {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoAttrFontFeatures = Pango.AttrFontFeatures;
Pango.AttrFontFeatures = class AttrFontFeatures extends PangoAttrFontFeatures {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoAttrLanguage = Pango.AttrLanguage;
Pango.AttrLanguage = class AttrLanguage extends PangoAttrLanguage {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoAttrShape = Pango.AttrShape;
Pango.AttrShape = class AttrShape extends PangoAttrShape {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoAttrSize = Pango.AttrSize;
Pango.AttrSize = class AttrSize extends PangoAttrSize {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoCoverage = Pango.Coverage;
Pango.Coverage = class Coverage extends PangoCoverage {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const PangoScriptIter = Pango.ScriptIter;
Pango.ScriptIter = class ScriptIter extends PangoScriptIter {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
Pango.g_break = Pango.break;
export default Pango;
