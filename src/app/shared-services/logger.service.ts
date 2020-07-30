// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
/**
 * Bazowy Logger
 * Interfejs Loggera
 */
export abstract class LoggerService {

  /**
   * Logowanie komunikatu na poziomie ERROR
   * @param msg treść komunikatu
   */
  abstract error(msg: any): void;

  /**
   * Logowanie komunikatu na poziomie INFO
   * @param msg treść komunikatu
   */
  abstract info(msg: any): void;

  /**
   * Logowanie komunikatu na poziomie DEBUG
   * @param msg treść komunikatu
   */
  abstract debug(msg: any): void;
}

/**
 * Implementacja funkcji Loggera, które nic nie robią
 */
const noop = () => {
};

/**
 * Implementacja Loggera
 * Loguje wszystkie poziomy
 */
export class LoggerDebugService extends LoggerService {

  /**
   * @inheritDoc
   */
  debug(msg: any): void {
    console.log(`[DEBUG] ${msg}`);
  }

  /**
   * @inheritDoc
   */
  error(msg: any): void {
    console.error(msg);
  }

  /**
   * @inheritDoc
   */
  info(msg: any): void {
    console.log(msg);
  }
}

/**
 * Implementacja Loggera
 * Pomija logowanie wpisów DEBUG
 */
export class LoggerInfoService extends LoggerService {

  /**
   * Ta implementacja nic nie robi
   * @inheritDoc
   */
  debug = noop;

  /**
   * @inheritDoc
   */
  error(msg: any): void {
    console.error(msg);
  }

  /**
   * @inheritDoc
   */
  info(msg: any): void {
    console.log(msg);
  }
}

/**
 * Implementacja Loggera
 * Pomija logowanie wpisów DEBUG i INFO
 */
export class LoggerErrorService extends LoggerService {

  /**
   * Ta implementacja nic nie robi
   * @inheritDoc
   */
  debug = noop;

  /**
   * Ta implementacja nic nie robi
   * @inheritDoc
   */
  info = noop;

  /**
   * @inheritDoc
   */
  error(msg: any): void {
    console.error(msg);
  }
}
