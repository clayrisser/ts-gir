const Gtk = imports.gi.Gtk;
const GtkNumerableIcon = Gtk.NumerableIcon;
Gtk.NumerableIcon = class NumerableIcon extends GtkNumerableIcon {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GtkTextBuffer = Gtk.TextBuffer;
Gtk.TextBuffer = class TextBuffer extends GtkTextBuffer {
  constructor(...props) {
    super(...props);
    this.g_delete = this.delete;
  }

};
const GtkBindingSet = Gtk.BindingSet;
Gtk.BindingSet = class BindingSet extends GtkBindingSet {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
Gtk.g_false = Gtk.false;
Gtk.g_true = Gtk.true;
export default Gtk;