import axios from "axios";

class Axios {
  private client: any;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  public get = (url: string, options: any) => {
    console.log(`GET: ${url}`);
    return this.client.get(url, options);
  };

  public post = (url: string, data: any, options: any) => {
    console.log(`POST: ${url}`);
    return this.client.post(url, data, options);
  };
}

export default Axios;
