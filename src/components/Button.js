import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--white)'};
    color: var(--deep-dark);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = '',
  btnText = '',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <BrowserRouter>
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </BrowserRouter>
    </ButtonStyle>
  );
}
