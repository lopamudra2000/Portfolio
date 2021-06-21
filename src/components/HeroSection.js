import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import HeroImg from '../assets/images/about-sec-img.svg';
import Button from './Button';
import PText from './PText';
import gitlogo from '../assets/images/github.png';
import linkedinlogo from '../assets/images/linkedin.png';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -2rem;
    position: relative;
    span {
      padding-top: 25px;
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 5rem;
      font-family: 'Montserrat SemiBold';
      color: var(--deep-dark);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-bottom: none;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__social__logo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
    left: 20px;
    padding: 10px;
    margin: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social,
    .hero__social__logo {
      bottom: 5rem;
      width: 50px;
      left: 0px;
      padding: 10px;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello I am </span>
            <span className="hero__name">Lopamudra Giri</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>I'm a developer.</PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="hero__social">
            <div className="hero__social__logo">
              {/* <p>Follow</p> */}
              <ul>
                <li>
                  {/* <img src={gitlogo} alt="git logo" /> */}
                  <a
                    href="https://github.com/lopamudra2000/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={gitlogo} alt="git logo" />
                  </a>
                </li>
                <li>
                  {/* <img src={gitlogo} alt="git logo" /> */}
                  <a
                    href="https://github.com/lopamudra2000/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedinlogo} alt="git logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
