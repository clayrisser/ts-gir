const Gio = imports.gi.Gio;
const GioAppInfo = Gio.AppInfo;
Gio.AppInfo = class AppInfo extends GioAppInfo {
  constructor(...props) {
    super(...props);
    this.g_delete = this.delete;
  }

};
const GioFile = Gio.File;
Gio.File = class File extends GioFile {
  constructor(...props) {
    super(...props);
    this.g_delete = this.delete;
  }

};
const GioDBusConnection = Gio.DBusConnection;
Gio.DBusConnection = class DBusConnection extends GioDBusConnection {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GioDBusInterfaceSkeleton = Gio.DBusInterfaceSkeleton;
Gio.DBusInterfaceSkeleton = class DBusInterfaceSkeleton extends GioDBusInterfaceSkeleton {
  constructor(...props) {
    super(...props);
    this.g_export = this.export;
  }

};
const GioDBusObjectManagerClient = Gio.DBusObjectManagerClient;
Gio.DBusObjectManagerClient = class DBusObjectManagerClient extends GioDBusObjectManagerClient {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GioDBusObjectManagerServer = Gio.DBusObjectManagerServer;
Gio.DBusObjectManagerServer = class DBusObjectManagerServer extends GioDBusObjectManagerServer {
  constructor(...props) {
    super(...props);
    this.g_export = this.export;
  }

};
const GioDBusProxy = Gio.DBusProxy;
Gio.DBusProxy = class DBusProxy extends GioDBusProxy {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GioSimpleProxyResolver = Gio.SimpleProxyResolver;
Gio.SimpleProxyResolver = class SimpleProxyResolver extends GioSimpleProxyResolver {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GioIOModuleScope = Gio.IOModuleScope;
Gio.IOModuleScope = class IOModuleScope extends GioIOModuleScope {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
export default Gio;