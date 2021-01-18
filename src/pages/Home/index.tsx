import React, { useState, useEffect } from "react";
import { FiAlertCircle, FiGithub, FiCodepen } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

import Button from "../../components/Button";
import {
  Container,
  Content,
  Navbar,
  Main,
  HomeTitle,
  HomeTitleContent,
  Repositories,
  Repository,
  RepositoryTitle,
  NavbarContent,
  Logo,
} from "./styles";

interface IRepositorie {
  name: string;
  id: number;
  html_url: string;
  description: string;
}

const Home: React.FC = () => {
  const repo = "https://github.com/siomar";
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api
      .get("https://api.github.com/users/siomar/repos")
      .then((response) => setRepositories(response.data));
  }, []);

  const openRepository = () => {
    window.location.href = repo;
  };

  return (
    <Container>
      <Navbar>
        <NavbarContent>
          <Logo src={logoImg} alt="Siomar Velloso | Desenvolvedor Front-end" />
          <a href={repo} target="__blank">
            <FiAlertCircle />
          </a>
        </NavbarContent>
      </Navbar>
      <Main>
        <HomeTitle>
          <HomeTitleContent>
            <>
              <h1>
                Desenvolvedor Front-web que ama desenvolvimento mobile híbrido.
                Bem-vindo à minha Sandbox.{" "}
                <FiCodepen style={{ marginBottom: -6 }} />
              </h1>
              <Button type="button" onClick={openRepository}>
                <FiGithub /> Github
              </Button>
            </>
          </HomeTitleContent>
        </HomeTitle>
        <Repositories>
          {repositories.map((repo: IRepositorie) => (
            <Repository key={repo.id} href={repo.html_url} target="__blank">
              <RepositoryTitle>
                <FiGithub />
                {repo.name}
              </RepositoryTitle>
              <p>{repo.description}</p>
            </Repository>
          ))}
        </Repositories>
      </Main>
    </Container>
  );
};

export default Home;
