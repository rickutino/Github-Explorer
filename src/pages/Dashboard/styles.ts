import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 4.5rem;
  font-size: 3rem;
  color: var(--black);

  max-width: 28rem;
  line-height: 3.5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.5rem;

  display: flex;

  input {
    flex: 1;
    height: 4.35rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: var(--black);
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 4.35rem;
    border-radius: 0 5px 5px 0;
    background: var(--primary);
    border: 0;
    color: var(--white);
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
