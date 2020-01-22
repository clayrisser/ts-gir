const HarfBuzz = imports.gi.HarfBuzz;
const HarfBuzzglyph_position_t = HarfBuzz.glyph_position_t;
HarfBuzz.glyph_position_t = class glyph_position_t extends HarfBuzzglyph_position_t {
  constructor(...props) {
    super(...props);
    this.g_var = this.var;
  }
};
const HarfBuzzot_name_entry_t = HarfBuzz.ot_name_entry_t;
HarfBuzz.ot_name_entry_t = class ot_name_entry_t extends HarfBuzzot_name_entry_t {
  constructor(...props) {
    super(...props);
    this.g_var = this.var;
  }
};
export default HarfBuzz;
