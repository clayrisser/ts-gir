const GstTranscoder = imports.gi.GstTranscoder;
const GstTranscoderTranscoderGMainContextSignalDispatcher =
  GstTranscoder.TranscoderGMainContextSignalDispatcher;
GstTranscoder.TranscoderGMainContextSignalDispatcher = class TranscoderGMainContextSignalDispatcher extends GstTranscoderTranscoderGMainContextSignalDispatcher {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
export default GstTranscoder;
