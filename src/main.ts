import "./styles/style.css";

import "./components/Header";
import "./components/Icon";

import Api from "./services/api";
import { create } from "./utils/create";

interface IRepository {
  name: string;
  language: string;
  html_url: string;
}

function getRepositories() {
  let repositories = document.createDocumentFragment();

  Api.get("/repos")
    .then((result: any) => {
      result = filterElementWithoutLanguage(result);
      result.map((repository: IRepository) => {
        const box = createCard(
          repository.name,
          repository.language,
          repository.html_url
        );
        repositories?.appendChild(box);
      });
      document.getElementById("repositories")?.appendChild(repositories);
    })
    .catch(resultErrorRequest);
}

function resultErrorRequest(error: any): void {
  console.error(error);

  let repositories = document.createDocumentFragment(),
    label = document.createElement("p");

  label.innerText = "Ops! Nenhum repositório encontrado no momento.";
  repositories?.appendChild(label);
  document.getElementById("repositories")?.appendChild(repositories);
}

function filterElementWithoutLanguage(list: IRepository[]): IRepository[] {
  return list.filter((repository: IRepository) => repository.language !== null);
}

function createCard(title = "", description = "", hrefGit = ""): HTMLElement {
  const componentTitle = document.createElement("h3");
  componentTitle.append(title);

  const componentDescription = document.createElement("p");
  componentDescription.append(description);

  const link = create(
    "a",
    {
      class: "repository",
      href: hrefGit,
      target: "_blank",
    },
    [componentTitle, componentDescription]
  );

  return link;
}

getRepositories();
