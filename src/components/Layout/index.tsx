import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from './f1_logo.svg'

const Nav = styled.nav`
  overflow: visible;
  display: flex;
`

const NavPrimary = styled.div`
  background-color: #e10600;
  overflow: auto;
  position: relative;
  z-index: 101;
  width: 100%;
`

const NavPrimaryContainer = styled.div`
  max-width: 1320px;
  margin: auto;
`

const Logo = styled.div`
  text-align: left;
  padding: 0;
  border: none;
`

const LogoSpan = styled.div`
  width: 130px;
  height: 35px;
  margin: 19px 30px 12px;
  transition: margin .25s linear;
`

export default function Layout() {
  return (
    <div>
      <header>
        <Nav>
          <NavPrimary>
            <NavPrimaryContainer>
              <Logo>
                <Link to="/">
                  <LogoSpan>
                    <img src={LogoImage} alt="logo" />
                  </LogoSpan>
                </Link>
              </Logo>
            </NavPrimaryContainer>
          </NavPrimary>
        </Nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}