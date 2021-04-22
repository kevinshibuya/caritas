import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;

  h1 {
    font-size: var(--cause-head);
    font-weight: 400;
    letter-spacing: 0.05rem;
    margin-bottom: 2rem;
  }

  div.projects-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-content: center;
    justify-content: center;
    grid-gap: 1rem;

    a.card {
      text-decoration: none;

      :first-child {
        margin-left: 0px;
      }

      img {
        display: block;
        width: 100%;
      }

      p.origin {
        font-size: var(--tiny-labels);
        color: var(--text-grey);
        margin: 0.5rem 0;
      }

      p.title {
        font-size: var(--body-text);
        color: var(--text-grey);
        text-transform: lowercase;
      }
    }
  }
`