const GLib = imports.gi.GLib;
const GLibArray = GLib.Array;
GLib.Array = class Array extends GLibArray {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibAsyncQueue = GLib.AsyncQueue;
GLib.AsyncQueue = class AsyncQueue extends GLibAsyncQueue {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibBookmarkFile = GLib.BookmarkFile;
GLib.BookmarkFile = class BookmarkFile extends GLibBookmarkFile {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibByteArray = GLib.ByteArray;
GLib.ByteArray = class ByteArray extends GLibByteArray {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibHashTable = GLib.HashTable;
GLib.HashTable = class HashTable extends GLibHashTable {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibHmac = GLib.Hmac;
GLib.Hmac = class Hmac extends GLibHmac {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibMainContext = GLib.MainContext;
GLib.MainContext = class MainContext extends GLibMainContext {
  constructor(...props) {
    super(...props);
    this.g_default = this.default;
  }

};
const GLibNode = GLib.Node;
GLib.Node = class Node extends GLibNode {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibOptionContext = GLib.OptionContext;
GLib.OptionContext = class OptionContext extends GLibOptionContext {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibPatternSpec = GLib.PatternSpec;
GLib.PatternSpec = class PatternSpec extends GLibPatternSpec {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibPtrArray = GLib.PtrArray;
GLib.PtrArray = class PtrArray extends GLibPtrArray {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibQueue = GLib.Queue;
GLib.Queue = class Queue extends GLibQueue {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibRand = GLib.Rand;
GLib.Rand = class Rand extends GLibRand {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibScanner = GLib.Scanner;
GLib.Scanner = class Scanner extends GLibScanner {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibSequence = GLib.Sequence;
GLib.Sequence = class Sequence extends GLibSequence {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibStringChunk = GLib.StringChunk;
GLib.StringChunk = class StringChunk extends GLibStringChunk {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibTestLogBuffer = GLib.TestLogBuffer;
GLib.TestLogBuffer = class TestLogBuffer extends GLibTestLogBuffer {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibThread = GLib.Thread;
GLib.Thread = class Thread extends GLibThread {
  constructor(...props) {
    super(...props);
    this.g_yield = this.yield;
  }

};
const GLibThreadPool = GLib.ThreadPool;
GLib.ThreadPool = class ThreadPool extends GLibThreadPool {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
const GLibTimer = GLib.Timer;
GLib.Timer = class Timer extends GLibTimer {
  constructor(...props) {
    super(...props);
    this.g_continue = this.continue;
    this.g_new = this.new;
  }

};
const GLibTree = GLib.Tree;
GLib.Tree = class Tree extends GLibTree {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }

};
export default GLib;