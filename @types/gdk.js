const Gdk = imports.gi.Gdk;
const GdkEventFocus = Gdk.EventFocus;
Gdk.EventFocus = class EventFocus extends GdkEventFocus {
  constructor(...props) {
    super(...props);
    this.g_in = this.in;
  }

};
export default Gdk;