const Soup = imports.gi.Soup;
const SoupServer = Soup.Server;
Soup.Server = class Server extends SoupServer {
  constructor(...props) {
    super(...props);
    this.g_interface = this.interface;
  }
};
export default Soup;
