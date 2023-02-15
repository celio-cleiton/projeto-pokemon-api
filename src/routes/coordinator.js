// Este arquivo contém funções para navegar para diferentes páginas em seu aplicativo.

export const goToHomePage = (navigate) => {
  // Esta função é usada para navegar para a página inicial do aplicativo.
  // O parâmetro "navigate" é a função de navegação fornecida pelo react-router-dom.
  navigate("/");
};

export const goToDetailsPage = (navigate, pokemon) => {
  // Esta função é usada para navegar para a página de detalhes de um Pokémon específico.
  // O parâmetro "navigate" é a função de navegação fornecida pelo react-router-dom.
  // O parâmetro "pokemon" é o nome do Pokémon para o qual você deseja navegar.
  navigate(`/detail/${pokemon}`);
};

export const goToPokedexPage = (navigate) => {
  // Esta função é usada para navegar para a página Pokedex.
  // O parâmetro "navigate" é a função de navegação fornecida pelo react-router-dom.
  navigate("/pokedex");
};

export const goToHomeTurnPage = (navigate, page) => {
  // Esta função é usada para navegar para uma página específica na página inicial.
  // O parâmetro "navigate" é a função de navegação fornecida pelo react-router-dom.
  // O parâmetro "page" é o número da página para a qual você deseja navegar.
  navigate(`/page/${page}`);
};
