"use strict";

const inputId = document.querySelector("#input-id");
const inputName = document.querySelector("#input-name");
const inputType = document.querySelector("#input-type");
const inputBreed = document.querySelector("#input-breed");
const vaccinated = document.querySelector("#input-vaccinated");
const dewormed = document.querySelector("#input-dewormed");
const sterilized = document.querySelector("#input-sterilized");
const tBody = document.querySelector("#tbody");
const btnFind = document.querySelector("#find-btn");

let petArr = [];
getFromStorage();
console.log(petArr);
renderSearch(petArr);

let breeds = [];
getBreedFromStorage();

let catBreed = [];
getCatBreedFromStorage();

let dogBreed = [];
getDogBreedFromStorage();

let breedValue = [];

for (let i = 0; i < breeds.length; i++) {
  breedValue.push(breeds[i].breed);
}

const breed_if = function () {
  if (inputType.value === "Dog") {
    renderBreed(dogBreed);
  } else if (inputType.value === "Cat") {
    renderBreed(catBreed);
  } else {
    renderBreed(breedValue);
  }
};

inputType.addEventListener("click", breed_if);

inputId.addEventListener("click", breed_if);

inputName.addEventListener("click", breed_if);

window.onload = function () {
  renderBreed(breedValue);
};

const renderBreed = function (breed) {
  let option = `<option>Select Breed</option>`;

  for (let i = 0; i < breed.length; i++) {
    option += `<option>${breed[i]}</option>`;
  }
  inputBreed.innerHTML = option;
};

inputId.value;
inputName.value;
inputType.value;
inputBreed.value;
vaccinated.checked === true ? (vaccinated.checked = true) : "";
dewormed.checked === true ? (dewormed.checked = true) : "";
sterilized.checked === true ? (sterilized.checked = true) : "";

//thêm vào thú cưng mới
function renderSearch(pet) {
  let row = ``;

  for (let i = 0; i < pet.length; i++) {
    let vaccinated_2 =
      pet[i].vaccinated_1 === true
        ? "bi-check-circle-fill"
        : "bi-x-circle-fill";
    let dewormed_2 =
      pet[i].dewormed_1 === true ? "bi-check-circle-fill" : "bi-x-circle-fill";
    let sterilized_2 =
      pet[i].sterilized_1 === true
        ? "bi-check-circle-fill"
        : "bi-x-circle-fill";
    row += `<tr>
        <th scope="row">${pet[i].id}</th>
        <td>${pet[i].name}</td>
        <td>${pet[i].age}</td>
        <td>${pet[i].type}</td>
        <td>${pet[i].weight} kg</td>
        <td>${pet[i].length} cm</td>
        <td>${pet[i].breed}</td>
        <td>
            <i class="bi bi-square-fill" style="color: ${pet[i].color}"></i>
        </td>
        <td><i class="${vaccinated_2}"></i></td>
        <td><i class="${dewormed_2}"></i></td>
        <td><i class="${sterilized_2}"></i></td>
        <td>${pet[i].date}</td>
        </tr>`;
  }
  tBody.innerHTML = row;
}

let searchType = [];

// let searchBreed = [];
// let searchId = [];
// let searchName = [];
// let searchVaccinated = [];
// let searchDewormed = [];
// let searchSterilized = [];

btnFind.addEventListener("click", function () {
  
  if (vaccinated.checked === true) {
    searchType = []
    for (let pet of petArr)
      vaccinated.checked === pet.vaccinated_1 ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (dewormed.checked === true) {
    searchType = []
    for (let pet of petArr)
      dewormed.checked === pet.dewormed_1 ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (sterilized.checked === true) {
    searchType = []
    for (let pet of petArr)
      sterilized.checked === pet.sterilized_1 ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (inputType.selectedIndex !== 0) {
    searchType = []
    for (let pet of petArr)
      inputType.value == pet.type ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (inputBreed.selectedIndex !== 0) {
    searchType = []
    for (let pet of petArr)
      inputBreed.value == pet.breed ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (inputId.value.trim().length !== 0) {
    searchType = []
    for (let pet of petArr)
      pet.id.includes(inputId.value) === true ? searchType.push(pet) : "";
    renderSearch(searchType);
  }

  if (inputName.value.trim().length !== 0) {
    searchType = []
    for (let pet of petArr)
      pet.name.includes(inputName.value) === true ? searchType.push(pet) : "";
    renderSearch(searchType);
  }
});
