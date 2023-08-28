/*
  Http is the high-level component whereas HttpService is the low-level component. 
  This design violates DIP: High-level modules should not depend on low-level level modules. It should depend upon its abstraction.
*/

class XMLHttpService extends XMLHttpRequestService {}

class Http {
  constructor(private xmlhttpService: XMLHttpService) {}

  get(url: string, options: any) {
    this.xmlhttpService.request(url, 'GET');
  }

  post() {
    this.xmlhttpService.request(url, 'POST');
  }
}

// =============================== //

interface Connection {
  request: (url: string, opts: any) => void;
}

class Http {
  constructor(private httpConnection: Connection) {}

  get(url: string) {
    this.httpConnection.request(url, 'GET');
  }

  post(url: string, options: any) {
    this.httpConnection.request(url, 'POST');
  }
}

class XMLHttpService implements Connection {
  xhr = new XMLHttpRequest();

  request(url: string, opts: any) {
    xhr.open();
    xhr.send();
  }
}
