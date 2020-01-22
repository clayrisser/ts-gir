import * as GLib from './g-lib';
import * as GObject from './g-object';
import * as GstPbutils from './gst-pbutils';
import * as Gst from './gst';
export enum TranscoderError {
  GST_TRANSCODER_ERROR_FAILED
}
export interface TranscoderSignalDispatcher {}
export class Transcoder extends Gst.Object {
  constructor(source_uri: string, dest_uri: string, encoding_profile: string);
  'avoid-reencoding': boolean;
  'dest-uri': string;
  duration: number;
  pipeline: Gst.Element;
  position: number;
  'position-update-interval': number;
  profile: GstPbutils.EncodingProfile;
  'signal-dispatcher': any;
  'src-uri': string;
  get_avoid_reencoding(): boolean;
  get_dest_uri(): string;
  get_duration(): Gst.ClockTime;
  get_pipeline(): Gst.Element;
  get_position(): Gst.ClockTime;
  get_position_update_interval(): number;
  get_source_uri(): string;
  run(): boolean;
  run_async(): void;
  set_avoid_reencoding(avoid_reencoding: boolean): void;
  set_cpu_usage(cpu_usage: number): void;
  set_position_update_interval(interval: number): void;
}
export class TranscoderGMainContextSignalDispatcher extends GObject.Object {
  'application-context': GLib.MainContext;
  static g_new(application_context: GLib.MainContext | null): any;
}
export class TranscoderClass {}
export class TranscoderGMainContextSignalDispatcherClass {}
export class TranscoderPrivate {}
export class TranscoderSignalDispatcherInterface {
  static parent_iface: GObject.TypeInterface;
  static dispatch: (
    self: any,
    transcoder: Transcoder,
    emitter: object | null,
    data: object | null,
    destroy: GLib.DestroyNotify
  ) => void;
}
export function transcoder_error_get_name(error: TranscoderError): string;
export function transcoder_error_quark(): GLib.Quark;
