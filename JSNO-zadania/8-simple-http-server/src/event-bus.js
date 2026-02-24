import { EventEmitter } from "node:events";

class MyEventEmitter extends EventEmitter {
  collect = new Set();

  on(name, listener) {
    console.log("Zapisz", name);
    this.collect.add(name);
    super.on(name, listener);
  }

  emit(name, value) {
    if (!this.collect.has(name)) {
      console.error(" NIE OBSŁUGUJE EVENTU", name);
      // żeby server nie biegał w nieskończoność:
      // value.res.end("");
      super.emit("catch404Error", value);
      return;
    }
    super.emit(name, value);
  }
}

export const eventBus = new MyEventEmitter();
