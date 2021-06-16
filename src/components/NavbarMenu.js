import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavbarMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 5rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 5px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavbarMenu() {
  const [openNav, SetOpenNav] = useState(false);
  return (
    <NavbarMenuStyles className>
      <div
        className="mobile-menu-icon"
        onClick={() => SetOpenNav(!openNav)}
        role="button"
        onKeyDown={() => SetOpenNav(!openNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!openNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => SetOpenNav(!openNav)}
          role="button"
          onKeyDown={() => SetOpenNav(!openNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            exact
            to="/"
            onClick={() => SetOpenNav(!openNav)}
            role="button"
            onKeyDown={() => SetOpenNav(!openNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            onClick={() => SetOpenNav(!openNav)}
            role="button"
            onKeyDown={() => SetOpenNav(!openNav)}
            tabIndex={0}
          >
            Aboutme
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => SetOpenNav(!openNav)}
            role="button"
            onKeyDown={() => SetOpenNav(!openNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => SetOpenNav(!openNav)}
            role="button"
            onKeyDown={() => SetOpenNav(!openNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavbarMenuStyles>
  );
}
