"use strict";

const runtimes = new WeakMap();

function validateFn(fn, operation) {
  if (typeof fn !== "function") {
    throw new TypeError(`${operation} requires a function`);
  }
}

function lastRun(fn, timeResolution) {
  validateFn(fn, "lastRun");

  let time = runtimes.get(fn);

  if (time == null) {
    return;
  }

  const resolution = parseInt(timeResolution, 10) || 1;

  return time - (time % resolution);
}

function capture(fn, timestamp) {
  validateFn(fn, "capture");

  timestamp = timestamp || Date.now();

  runtimes.set(fn, timestamp);
}

function release(fn) {
  validateFn(fn, "release");

  runtimes.delete(fn);
}

lastRun.capture = capture;
lastRun.release = release;

export default lastRun;
