import styled from "styled-components";


export const CardsGrid = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  grid-gap: 10px;
  text-align: center;
  
`;

export const CardDiv = styled.div`
  width: 170px;
  background:linear-gradient(to bottom right, cyan ,blue);
  border-radius: 15px;
  text-align: center;
  margin-Left: 10px;
  & > img {
    width: 170px;
    height: 108px;
    border-radius: 15px;
  }
  :hover {
    transform: scaleX(1.2);
    background:linear-gradient(to bottom right, blue ,cyan);
  }
  
`;

export const CardText = styled.div`
  padding: 0 10px 10px;
  

  & > h3 {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.3px;
    color: var(--main-dark-color);
   
  }

  & > span {
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    letter-spacing: -0.3px;
    color: var(--optional-gray-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.title {
      text-overflow: ellipsis;
      text-align: left;
    }

    & > span {
      font-weight: 300;
      font-size: 10px;
      text-align: center;
      letter-spacing: -0.3px;
      color: var(--main-dark-color);

      & > img {
        margin-right: 5px;
      }
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
export const FooterH=styled.div`
display: grid;
place-content: center;
margin-top:20px;

`
