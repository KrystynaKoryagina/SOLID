/* Bad code */

class Card {
  data = [];
  url: string;

  constructor(url = '') {
    this.url = url;

    this.render();
    this.loadData();
  }

  render() {
    /* some logic here */
  }

  async loadData() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();

      this.saveToBrowserCache(data);
      this.render();
    } catch (error) {
      console.error(`Error: something went wrong ${error.message}`);
    }
  }

  saveToBrowserCache(data) {
    localStorage.setItem('cardData', data);
  }
}

/* 
  To make this conform to SRP, we create other classes that will cache data, log data, and do request:
*/

class CacheManager {
  saveToBrowserCache(data) {
    localStorage.setItem('cardData', data);
  }
}

class Logger {
  log(...args) {
    console.log.apply(console, args);
  }
  warn(...args) {
    console.warn.apply(console.log, args);
  }
  error(...args) {
    console.error.apply(console.log, args);
  }
}

class RequestsManager {
  logger: Logger;

  constructor(logger) {
    this.logger = logger;
  }

  async request(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      this.logger.log(error);

      throw new Error(`Error: data loading error ${error.message}`);
    }
  }
}

class CardSolution {
  data = [];
  url: string;
  requestManager: RequestsManager;
  cacheManager: CacheManager;

  constructor(url = '', requestManager, cacheManager) {
    this.requestManager = requestManager;
    this.cacheManager = cacheManager;
    this.url = url;

    this.render();
    this.loadData();
  }

  render() {
    /* some logic here */
  }

  async loadData() {
    const data = await this.requestManager.request(this.url);

    this.saveToBrowserCache(data);
    this.render();
  }

  saveToBrowserCache(data) {
    this.cacheManager.saveToBrowserCache(data);
  }
}
