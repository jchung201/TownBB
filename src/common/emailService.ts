import * as config from 'config';

const webConfig = config.get('web');

const { url } = webConfig;

export class EmailService {
  constructor() {}
  send() {
    console.log(url);
  }
}
