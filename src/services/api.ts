interface IApi {
  get(path: string, param?: RequestInit): Promise<Response>;
  post(path: string, body: any, param?: RequestInit): Promise<Response>;
}

class Api implements IApi {
  private URL = `https://api.github.com/users/siomar`;

  private request(path: string, requestParams: RequestInit): Promise<Response> {
    const init: RequestInit = {
      mode: "cors",
      cache: "default",
      ...requestParams,
    };

    return fetch(`${this.URL}${path}`, init).then((resp) => resp.json());
  }

  public get(path: string, param: RequestInit = { method: "GET" }): Promise<Response> {
    return this.request(path, param);
  }

  public post(
    path: string,
    body: any,
    param: RequestInit = { method: "POST" }
  ): Promise<Response> {
    return this.request(path, { ...param, body });
  }
}

export default new Api();
