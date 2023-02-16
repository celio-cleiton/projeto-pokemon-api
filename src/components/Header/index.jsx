import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container,StyledImagem ,StyledButton} from "./styles";
import logo from "../../assets/logo.png";
import ModalCard from "../Modal/ModalCard";
import { GlobalContext } from "../../context/GlobalContext";

const Header = (props) => {
  
  const location = useLocation();

  
  const navigate = useNavigate();
  const params = useParams();

  const context = useContext(GlobalContext);

  const {
    pageNumber,
    pokedex,
    addToPokedex,
    removeToPokedex,
    setIsOpen,
    setFlow,
  } = context;

  useEffect(() => {
    renderHeader();
  }, []);

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
              <StyledImagem src={logo} />
            </div>
     
              <StyledButton onClick={() => goToPokedexPage(navigate)}>Pokédex</StyledButton>
          
          </Container>
        );
      case `/page/${pageNumber}`:
        return (
          <Container>
            <div>
              <StyledImagem src={logo} />
            </div>
     
              <StyledButton onClick={() => goToPokedexPage(navigate)}>Pokédex</StyledButton>
      
          </Container>
        );
      case "/pokedex":
        return (
          <Container>
         
              <StyledButton onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </StyledButton>
           
            <StyledImagem src={logo} />
          </Container>
        );
      case `/detail/${params.pokemonName}`:
        return (
          <Container>
          
              <StyledButton onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </StyledButton>
          
            <StyledImagem src={logo} />
            {pokedex.find((pokemon) => pokemon.name === params.pokemonName) ? (
       
                <StyledButton
                  onClick={() => {
                    setFlow(2);
                    setIsOpen(true);
                    removeToPokedex(props.pokemon);
                  }}
                >
                  Excluir da Pokédex
                </StyledButton>
          
            ) : (
           
                <StyledButton
                  onClick={() => {
                    setFlow(1);
                    setIsOpen(true);
                    addToPokedex(props.pokemon);
                  }}
                >
                  Adicionar da Pokédex
                </StyledButton>
        
            )}
          </Container>
        );
    }
  };

  return (
    <Container>
      {renderHeader()}
      <ModalCard />
    </Container>
  );
};

export default Header;
