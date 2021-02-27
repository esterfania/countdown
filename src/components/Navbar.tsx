import styled from 'styled-components';

const NavbarWrapper = styled.header`
  position: absolute;
  height: 100%;
  background: ${props => props.theme.white};
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
      padding: 2rem;
      text-align: center;
      border-left: 4px solid transparent;
    }
    > :first-child {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      background: url('/logo.png') no-repeat center;
    }
    > :nth-child(2) {
      border-left: 4px solid ${props => props.theme.blue};
      background: url('/icons/blue-home.png') no-repeat center;
    }

    > :last-child {
      background: url('/icons/gray-ranking.png') no-repeat center;
    }
  }
`;

export function Navbar() {
  return (
    <NavbarWrapper>
      <nav>
        <div />
        <div title='Home' />
        <div />
      </nav>
    </NavbarWrapper>
  );
}
