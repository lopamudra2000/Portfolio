import React from 'react';
import styled from 'styled-components';
import PText from './PText';
// import BlobRight from '../assets/images/blob-right.svg';
import BlobLeft from '../assets/images/blob-left.svg';

const FooterStyle = styled.div`
  background-color: var(--gray-1);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Lopamudragiri</h1>
          <img src={BlobLeft} alt="blob design" />
          <PText>Portfolio</PText>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>- Lopamudra Giri</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
