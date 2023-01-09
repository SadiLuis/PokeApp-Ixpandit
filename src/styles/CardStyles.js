import styled from "styled-components";


export const CardsGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 16px;
  text-align: center;
  
`;

export const CardDiv = styled.div`
  width: 170px;
  background:linear-gradient(to bottom right, blue, white);
  border-radius: 11px;
  text-align: center;
  margin-Left: 10px;
  & > img {
    width: 170px;
    height: 108px;
    border-radius: 11px;
  }
  :hover {
    
    background:rgba(600, 115, 18, 0.53);
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
export const Fondo=styled.div`
background-image:url("https://3.bp.blogspot.com/-L007IjhoKfs/WOfj7HBLr-I/AAAAAAAAGdc/ujDWs09gqk4vNiMP_3L-7IoiHODfT58VgCLcB/s1600/pokemon-9.jpg")
`