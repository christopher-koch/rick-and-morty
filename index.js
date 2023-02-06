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
const fetchUrl = "https://rickandmortyapi.com/api/character?page=1";


// States
const maxPage = 1;
const page = 1;
let pageCount = page;
const searchQuery = "";


async function fetchCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
const fetchedData = await fetchCharacters(fetchUrl);

async function createNewCards(data){
  let characterData = data;

  for (const element in characterData) {
    const characterName = characterData[element].name;
    const characterStatus = characterData[element].status;
    const characterType = characterData[element].type;
    const characterImage = characterData[element].image;
    const characterOccurrences = characterData[element].episode.length;
  
    cardContainer.append(createCharacterCard(characterImage, characterName, characterStatus, characterType, characterOccurrences));
    //cardContainer.innerHTML = "";
  }
}
createNewCards(fetchedData);

nextButton.addEventListener('click', async () => {
  cardContainer.innerHTML = "";
  if (pageCount < 42) {
    pageCount++;
  } else if (pageCount >= 42) {
    pageCount = 42;
  }
  pagination.textContent = `${pageCount} / 42`;
  const newFetchUrl = `https://rickandmortyapi.com/api/character?page=${pageCount}`;
  const newFetchedData = await fetchCharacters(newFetchUrl);
  await createNewCards(newFetchedData);
})

prevButton.addEventListener('click', async () => {
  cardContainer.innerHTML = "";
  if (pageCount > 1) {
    pageCount--;
  } else if (pageCount < 1) {
    pageCount = 1;
  }
  pagination.textContent = `${pageCount} / 42`;
  if (pageCount < 1) {
    pageCount == 1;
  }
  const newFetchUrl = `https://rickandmortyapi.com/api/character?page=${pageCount}`;
  const newFetchedData = await fetchCharacters(newFetchUrl);
  await createNewCards(newFetchedData);
})