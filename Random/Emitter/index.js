class Subscription {
  constructor(topic, id, emitter) {
    this.id = id;
    this.topic = topic;
    this.emitter = emitter;
    this.release = this.release.bind(this);
  }

  release() {
    this.emitter.deleteSub(this.topic, this.id);
  }
}

module.exports = class Emitter {
  constructor() {
    this.nextSubId = 0;
    this.subscriptions = new Map();
    this.subscribe = this.subscribe.bind(this);
    this.emit = this.emit.bind(this);
    this.deleteSub = this.deleteSub.bind(this);
  }

  deleteSub(topic, subId) {
    if (this.subscriptions.has(topic)) {
      const callbacks = this.subscriptions.get(topic);
      if (callbacks.has(subId)) {
        callbacks.delete(subId);
      }
    }
  }

  subscribe(topic, cb) {
    const subId = this.nextSubId++;
    if (this.subscriptions.has(topic)) {
      const subMap = this.subscriptions.get(topic);
      subMap.set(subId, cb);
    } else {
      const callbacks = new Map();
      callbacks.set(subId, cb);
      this.subscriptions.set(topic, callbacks);
    }
    return new Subscription(topic, subId, this);
  }

  emit(topic, ...args) {
    if (this.subscriptions.has(topic)) {
      const callbacks = this.subscriptions.get(topic);
      for (const key of callbacks.keys()) {
        callbacks.get(key)(...args);
      }
    }
  }
};