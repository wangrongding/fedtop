class Event {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(...args);
      });
    }
  }
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    }
  }

  once(eventName, callback) {
    const fn = (...args) => {
      callback(...args);
      this.off(eventName, fn);
    };
    this.on(eventName, fn);
  }

  // // 用于测试
  // getEvents() {
  //   return this.events;
  // }

  // // 用于测试
  // getEventsCount() {
  //   return Object.keys(this.events).length;
  // }

  // // 用于测试
  // getEventCallbacksCount(eventName) {
  //   return this.events[eventName].length;
  // }

  // // 用于测试
  // getEventCallbacks(eventName) {
  //   return this.events[eventName];
  // }
}

// 用于测试
const event = new Event();
event.on('click', (a, b) => {
  console.log('click1', a, b);
});

event.emit('click', 1, 2);
