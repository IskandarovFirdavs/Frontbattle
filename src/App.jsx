import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import Layout from "./Components/Layout/Layout";
import styled from "styled-components";
import BackImg from "./bg-image.png";
import Home from "./Components/Home/Home"
const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

`;

const All = styled("div")`
  background-color: white;

`;
const App = () => {
  return (
    <All>
      <Main>
        <Container>
          <Layout></Layout>
        </Container>
      </Main>
    </All>
  );
};

export default App;
