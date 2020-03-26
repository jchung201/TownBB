export class EmailService {
  constructor() {}
  send() {
    console.log(process.env.WEB_URL);
  }
}
