const fetchUrl = "https://rickandmortyapi.com/api/character";

export async function fetchData() {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data.results;
  }
  
/* const characterData = fetchData();
//console.log(characterData.results[1].status);

  
 export default function createCharacterCard() { 
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const infoContainer = document.createElement("dl");
    const status = document.createElement("dt");
    const isAlive = document.createElement("dd");
    const type = document.createElement("dt");
    const typeValue = document.createElement("dd");
    const occurences = document.createElement("dt");
    const occurencesNumber = document.createElement("dd");

    status.textContent = characterData.results[1].status;

    infoContainer.append(status, isAlive, type, typeValue, occurences, occurencesNumber);
} */
