import styled from 'styled-components';

export const Container = styled.div`
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

    margin: 5px 10px;
    min-width: 200px;
    min-height: 200px;

    div.img {
      display: block;
      background: #000;
      width: 100%;
      height: 60%;
    }

    p {
      display: inline-block;
      width: 100%;
      height: 40%;
      text-align: center;
    }
  }
`