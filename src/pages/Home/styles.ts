import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(11, minmax(min-content, 1fr));
  grid-column-gap: 20px;
  grid-template-rows: 12vh 88vh;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Main = styled.main`
  grid-row: 2;
  grid-column: 1/12;

  display: grid;
  grid-template-columns: repeat(11, minmax(max-content, 1fr));
  grid-template-rows: 70vh max-content;
`;

export const HomeTitle = styled.div`
  grid-row: 1/1;
  grid-column: 1/12;

  display: flex;
  align-items: center;
`;

export const HomeTitleContent = styled.div`
  width: 90%;
  margin: 0 auto;

  h1 {
    @media only screen and (max-width: 75em) {
      width: 80%;
      font-size: 2rem;
    }

    @media only screen and (max-width: 56.25em) {
      width: 80%;
      font-size: 2rem;
    }

    @media only screen and (max-width: 37.5em) {
      width: 90%;
      font-size: 1.6rem;
    }

    width: 40%;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-style: italic;
    color: #202124;
    font-size: 2rem;
    margin-bottom: 4vh;
  }
`;

export const Repositories = styled.div`
  grid-row: 2/2;
  grid-column: 1/12;

  display: grid;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, minmax(min-content, 30vh));
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, minmax(min-content, 30vh));
  }

  @media only screen and (max-width: 75em) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, minmax(min-content, 30vh));
  }

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, minmax(min-content, 30vh));
`;

export const Repository = styled.a`
  cursor: pointer;
  box-sizing: border-box;
  padding: 50px 40px;
  color: #fff;
  background-image: linear-gradient(
      to left bottom,
      rgba(00, 00, 00, 0.95),
      rgba(00, 00, 00, 0.9)
    ),
    url("https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80");
  text-decoration: none;
  background-size: cover;
  background-position: center;
  transition: 0.1s background;

  &:hover {
    background-image: linear-gradient(
        to left bottom,
        rgba(00, 00, 00, 0.7),
        rgba(00, 00, 00, 0.7)
      ),
      url("https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80");
  }
`;

export const RepositoryTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin-right: 15px;
  }
`;

export const Logo = styled.img`
  width: 2.4rem;
`;

export const Navbar = styled.header`
  grid-row: 1;
  grid-column: 1/12;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #eee;
`;

export const NavbarContent = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;

  svg {
    cursor: pointer;
    color: #111;
  }
`;
