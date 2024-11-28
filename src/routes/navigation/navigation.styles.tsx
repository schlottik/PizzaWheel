import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 150px;
    padding: 10px 20px;
    margin-bottom: 70px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  padding: 0px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  .logo {
    height: 185px; /* Adjust this to make the logo larger */
    width: auto;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
