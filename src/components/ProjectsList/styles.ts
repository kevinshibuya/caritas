import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;

  h1 {
    font-size: var(--cause-head);
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  div.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    flex-direction: column;

    margin: 2rem 8px;
    min-width: 150px;
    max-width: 150px;
    min-height: 180px;
    -webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.03); 
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.03);

    :first-child {
      margin-left: 0px;
    }

    img {
      display: block;
      background: var(--light-mint);
      width: 100%;
      height: 70%;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      height: 30%;
      font-size: var(--body-text);
      color: var(--main-blue);
      letter-spacing: 0.05rem;
      padding: 5px;
      background: #ffffff;
    }
  }
`