import React, { useContext } from "react";
import Card from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { GlobalContext } from "../../context/GlobalContext";
import { Container, ContainerCard, Title } from "./styles";

const PokedexPage = () => {
// aqui estamos chamando o estado global
  const context = useContext(GlobalContext)
  const {pokedex} = context

  return (
    <>
      <Header />
      <Container>
        <Title>
        <h1>Meus Pokémons</h1>
        </Title>
        <ContainerCard>
        {pokedex?.map((pokemon) => {
          return (
            <Card key={pokemon.name} pokemon={pokemon}/>
          )
        })}
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
};

export default PokedexPage;
