import { server } from "../../config";

class Api {
  baseUrl;
  constructor() {
    this.baseUrl = server;
  }
}

export default Api;
