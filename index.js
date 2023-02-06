import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const fetchUrl = "https://rickandmortyapi.com/api/character";


// States
const maxPage = 1;
const page = 1;
const searchQuery = "";


async function fetchCharacters() {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data.results;
}
const characterData = await fetchCharacters();

for (const element in characterData) {
  const characterName = characterData[element].name;
  const characterStatus = characterData[element].status;
  const characterType = characterData[element].type;
  const characterImage = characterData[element].image;
  const characterOccurrences = characterData[element].episode.length;

  cardContainer.append(createCharacterCard(characterImage, characterName, characterStatus, characterType, characterOccurrences));
  //cardContainer.innerHTML = "";
}