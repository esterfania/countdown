import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import FeatherIcon from 'feather-icons-react';

const NavbarWrapper = styled.header`
  position: absolute;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  width: 4.5rem;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  nav {
    width: 100%;
    div {
      transition: width 2ms;
      padding: 1rem 0;
      text-align: center;
      border-left: 4px solid transparent;
    }
    > :first-child {
      position: absolute;
      padding: 2rem 0;
      right: 0;
      left: 0;
      top: 0;
      background: url('/logo.png') no-repeat center;
    }
    > :nth-child(2) {
      border-left: 4px solid ${(props) => props.theme.colors.blue};
    }
    > :last-child {
      position: absolute;
      padding: 1rem;
      bottom: 0;
    }
    svg {
      stroke: ${(props) => props.theme.colors.blue};
      cursor: pointer;
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
  @media screen and (max-width: 500px) {
    height: 5rem;
    background: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;

    nav {
      display: flex;
      justify-content: flex-end;
      div {
        display: inline-block;
        transition: width 2ms;
        padding: 1rem;
        text-align: center;
        border-left: 4px solid transparent;
      }

      > :first-child {
        position: absolute;
        padding: 2rem;
        right: auto;
        background: url('/logo.png') no-repeat center;
      }
      > :nth-child(2) {
        border: none;
        border-top: 4px solid ${(props) => props.theme.colors.blue};
      }
      > :last-child {
        position: relative;
      }
    }
  }
`;

export function Navbar() {
  const { ToggleTheme } = useTheme();

  function handleClick() {
    ToggleTheme();
  }

  return (
    <NavbarWrapper>
      <nav>
        <div />
        <div title="Início">
          <FeatherIcon icon="home"></FeatherIcon>
        </div>
        <div title="Mudar o tema">
          <FeatherIcon onClick={handleClick} icon="sun"></FeatherIcon>
        </div>
      </nav>
    </NavbarWrapper>
  );
}
