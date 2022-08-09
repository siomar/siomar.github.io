class Api {
  private URL = `https://api.github.com/users/siomar`;
  private TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  private request(path: string, init: RequestInit): Promise<Response> {
    const headers = new Headers();
    headers.append("Authorization", `token ${this.TOKEN}`);
    init.headers = headers;

    return fetch(`${this.URL}${path}`, init).then((resp) => resp.json());
  }

  get(path: string): Promise<Response> {
    const init: RequestInit = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    return this.request(path, init);
  }

  post(path: string, body: any): Promise<Response> {
    const init: RequestInit = {
      method: "POST",
      mode: "cors",
      cache: "default",
      body,
    };
    return this.request(path, init);
  }
}

export default Object.freeze(new Api());//Singleton
