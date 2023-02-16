import styled from "styled-components";

export const StyledNavBar = styled.nav`
  position: sticky;
  height: 120px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  display: flex;
  align-content: center;
  background-color: orangered;
  @media screen and (max-width: 414px) {
    padding: 50px;
    justify-content: center;
  }
`;

export const StyledUl = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 20%;
  align-content: center;
  @media screen and (max-width: 414px) {
    justify-content: center;
    margin-top: 80px;
  }
  
`;
export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  justify-content: end;
  text-decoration: none;
  list-style: none;
  font-size: 2rem;
`;

export const StyledImagem = styled.img`
  width: 307px;
  height: 113px;
  left: 566px;
  top: 21px;
`;

export const StyledButton = styled.button`
  padding: 4px 10px;
  width: 200px;
  height: 50px;
  left: 1112px;
  top: 41px;
  align-self: center;
  font-size: 2rem;
  background: #33a4f5;
  border-radius: 8px;
  border: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: white;
`;


//css teste

export const Container = styled.div`
  position: sticky;
  height: 120px;
  width: 100%;
  left: 0px;
  top: 0px;
  background: #ffffff;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  justify-content: space-around;
  background-color: orangered;
  @media screen and (max-width: 414px) {
    padding: 50px;
    justify-content: center;
  }
`;

export const ButtonPokemon = styled.div`
  button {
    border: none;
    background: none;
    color: black;
    text-decoration: underline;

    font-size: "Poppins";
    font-weight: 700;
    cursor: pointer;
  }
  position: absolute;
  left: 7vw;
`;

export const ButtonPokedex = styled.div`
  position: absolute;
  right: 7vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 14.9vw;
    height: 7.6vh;
    background-color: #33a4f5;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonDelet = styled.div`
  position: absolute;
  right: 7vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 11.7vw;
    height: 5.8vh;
    background-color: #FF6262;
    border-radius: 8px;
    font-family: sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonAdd = styled.div`
  position: absolute;
  right: 7vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 11.7vw;
    height: 5.8vh;
    background-color: #33a4f5;;
    border-radius: 8px;
    font-family: sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
