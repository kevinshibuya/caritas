import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;

  div.head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: var(--cause-head);
      font-weight: 400;
      letter-spacing: 0.05rem;
    }

    div.input {
      position: relative;

      input {
        border: 1px solid rgba(0,0,0,0.4);
        border-radius: 8px;
        font-size: var(--tiny-labels);
        padding: 2px;
      }

      div.search-icon {
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        top: 3px;
        right: 5px;

        background: #000000;
      }
    }
  }

  div.theme-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
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

      div.img {
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
        padding: 5px;
        background: #ffffff;
      }
    }
  }
`