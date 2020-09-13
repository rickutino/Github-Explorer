import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-black);

  max-width: 450px;
  line-height: 3.5rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 4.35rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: var(--text-black);
    border: 2px solid var(--white);
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: var(--error-color);
      `}
    &::placeholder {
      color: var(--second-text-white);
    }
  }

  button {
    width: 210px;
    height: 4.35rem;
    border-radius: 0 5px 5px 0;
    background: var(--color-primary);
    border: 0;
    color: var(--white);
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 700px;

  a {
    background: var(--white);
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 1rem;
    }

    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }

    div {
      margin: 0 1rem;
      line-height: 1.4rem;
      flex: 1;

      strong {
        font-size: 1.25rem;
        color: var(--color-text-strong);
      }

      p {
        font-size: 1.125rem;
        color: var(--second-text-white);
      }
    }

    svg {
      /* 全てのマージンを左に移動させる。 */
      margin-left: auto;
      color: var(--icon-color);
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 0.5rem;
  color: var(--error-color);
`;
