import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const Logo =
  'https://res.cloudinary.com/rosehack/image/upload/f_auto,dpr_auto,h_100/logo.png'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  align-items: center;

  @media (max-width: 650px) {
    padding: 0 12px;
  }
`

const LogoWrapper = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 0px;
`

const ActionsWrapper = styled.span`
  margin-left: auto;
`
const ActionStyles = css`
  font-family: 'Lato', sans-serif;
  color: #dac6d5;
  text-decoration: none;
  margin-left: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgb(140, 87, 125);
    color: #fff;
  }

  @media (max-width: 400px) {
    margin-left: 0px;
  }
`

const ActionInternal = styled(Link)`
  ${ActionStyles}
`

const ActionExternal = styled.a`
  ${ActionStyles}
`

const activeStyle = {
  background: 'rgb(140, 87, 125)',
  color: '#fff',
}

const LogoContainer = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  text-decoration: none;

  h2 {
    margin: 0;
    margin-left: 12px;
    font-size: 1.25em;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }
`

const NavItems = [
  {
    name: 'Get Started',
    path: '/getting-started',
    classes: 'noMobile',
  },
  {
    name: 'Schedule',
    path: '/schedule',
  },
  {
    name: 'Directions',
    path: '/directions',
  },
  {
    name: 'Map',
    path: '/map',
  },
  {
    name: 'Mentors',
    path: '/mentors',
    classes: 'noMobile',
  },
  {
    name: 'Wi-Fi',
    path: '/wifi',
  },
  {
    name: 'Slack',
    path:
      'https://join.slack.com/t/rosehack2019/shared_invite/enQtNTIzNzM5NjAzMjY2LTQyODUyMjM1Yjk4Yjk5NjUwMWEwOTBlMzc4NjcxYjEzMTliNjc5Y2EzM2U0YjMwNjViODE1ZjQyNGQzN2RjNzc',
    classes: 'noMobile',
  },
  {
    name: 'Submit Project',
    path: 'https://rosehack2019.devpost.com',
    classes: 'noMobile',
  },
]

const Header = ({ siteTitle }) => (
  <Wrapper>
    <LogoContainer to="/">
      <LogoWrapper src={Logo} alt="" />
    </LogoContainer>
    <ActionsWrapper>
      {NavItems.map(item => {
        if (item.path.includes('http')) {
          return (
            <ActionExternal
              href={item.path}
              key={item.path}
              target="_blank"
              className={item.classes}
            >
              {item.name}
            </ActionExternal>
          )
        } else {
          return (
            <ActionInternal
              to={item.path}
              key={item.path}
              activeStyle={activeStyle}
              className={item.classes}
            >
              {item.name}
            </ActionInternal>
          )
        }
      })}
    </ActionsWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
