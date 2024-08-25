import React from "react";
import styled from "styled-components";
import Logo from "./img.png";
import Telgramicon from "./Vector.png";
import { FaCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdDirectionsBike } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const All = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background: none;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  padding: 0 20px;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
`;

const H3 = styled.h3`
  margin: 0;
  font-family: "Poppins", sans-serif;

  color: white;
`;
const H2 = styled.h2`
  margin: 0;
  color: white;
  font-family: "Poppins", sans-serif;
`;
const P = styled.p`
  margin: 0;
  color: white;
  opacity: 70%;
  font-family: "Poppins", sans-serif;
`;
const Img = styled("img")`
  border-radius: 50%;
`;
const Sub = styled("sub")`
  color: red;
  margin-left: -20px;
  margin-top: -30px;
`;
const BotH1 = styled("h1")`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
  line-height: 62px;
  text-align: left;
`;
const Button = styled("button")`
  width: 272px;
  height: 72px;
  border: none;
  border-radius: 20px;
  opacity: 0px;
  background: #7b61ff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff;
`;
const Foot = styled("div")`
  width: 140px;
  background-color: #ffffff;
  height: 15%;
  padding: 8px 0px 0px 0px;
  gap: 34px;
  border-radius: 20px;
  opacity: 0px;
`;
const Navbar = () => {
  return (
    <All>
      <Main>
        <H2>
          2rism{" "}
          <sup>
            <img src={Telgramicon} alt="" />
          </sup>
        </H2>
        <NavLinks>
          <P>home</P>
          <P>hotels</P>
          <P>restaurants</P>
          <P>tours</P>
          <P>destinations</P>
          <P>activities</P>
          <P>contact</P>
        </NavLinks>
        <ImgDiv>
          <Texts>
            <P>Holla,</P>
            <H3>Ales Nesetril</H3>
          </Texts>
          <Img src={Logo} alt="User Avatar" />
          <Sub>
            <FaCircle />
          </Sub>
        </ImgDiv>
      </Main>
      <Bottom>
        <BotH1>Discover the most engaging places</BotH1>
        <Button>Discover on 3D Globe</Button>
      </Bottom>
      <Foot>
        <CiLocationOn />
        <MdDirectionsBike />
        <CiCalendarDate />
      </Foot>
    </All>
  );
};

export default Navbar;
