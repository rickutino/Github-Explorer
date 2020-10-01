import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-10px);

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--second-text-white);
    transition: color 0.2s;
    &:hover {
      color: var(--second-text-white-dark);
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 2.25rem;
        color: var(--color-text-strong);
      }

      p {
        font-size: 1.125rem;
        color: var(--second-color-text-strong);
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;

    li {
      & + li {
        margin-left: 5rem;
      }

      strong {
        display: block;
        font-size: 2.25rem;
        color: var(--color-text-strong);
      }

      span {
        display: block;
        margin-top: 4px;
        color: var(--color-text-span);
      }
    }
  }
`;

export const Issues = styled.main`
  margin-top: 5rem;

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

export const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-strong);
`;
