"use strict";

const sideBar = document.querySelector("#sidebar");
const inputBreed = document.querySelector("#input-breed");
const inputType = document.querySelector("#input-type");
const btnSub = document.querySelector("#submit-btn");
const tBody = document.querySelector("#tbody");

let breeds = [];
let dogBreed = [];
let catBreed = [];
console.log(breeds);
getDogBreedFromStorage()
getCatBreedFromStorage()
getBreedFromStorage();
// getDogBreedFromStorage()
// getCatBreedFromStorage()
renderTableDataBreed();

const validate = function () {
  //dò id có trùng với id đã có hay ko
  for (let i = 0; i < breeds.length; i++) {
    if (
      inputBreed.value === breeds[i].breed &&
      inputType.value === breeds[i].type
    ) {
      alert("Please enter a unique Breed or Type")
      return "false";
    }
  }
};
// // Submit button
const add = function () {
  // console.log(dogBreed);
  inputType.value;
  inputBreed.value;

  if (validate() !== "false") {
    // dữ liệu từ input
    const dataBreed = {
      type: inputType.value,
      breed: inputBreed.value,
    };

    inputType.value === "Dog"
      ? dogBreed.push(dataBreed.breed)
      : catBreed.push(dataBreed.breed);

    //thêm dữ liệu từ dataBreed vào array breed
    breeds.push(dataBreed);

    renderTableDataBreed();
    resetInputBreed();

    saveToStorage("breed_1", breeds);
    saveToStorage("dogBreed_1", dogBreed);
    saveToStorage("catBreed_1", catBreed);
  }
};

// //thêm vào breed mới
function renderTableDataBreed() {
  let row = ``;
  for (let i = 0; i < breeds.length; i++) {
    breeds[i].id = breeds.indexOf(breeds[i]);
    row += `<tr>
        <th scope="row">${(breeds[i].id += 1)}</th>
        <td>${breeds[i].breed}</td>
        <td>${breeds[i].type}</td>
        <td><button "type="button" class="btn btn-danger" onclick="deleteBreed(${
          breeds[i].id
        })" >Delete</button></td>
        </tr>`;
  }
  tBody.innerHTML = row;
}

//xóa dữ liệu input
const resetInputBreed = function () {
  inputType.value = "Select Type";
  inputBreed.value = "";
};

// Xóa breed
const deleteBreed = function(id){
  
  const del = confirm('Are you sure?')
  if(del===true){
     
      let i = breeds.indexOf(id)
      for( i=0; i < breeds.length; i++){
          if(breeds[i].id==id){
            if(breeds[i].type==='Dog'){
              let breed = breeds[i].breed
              let i1 = dogBreed.indexOf(breed)
              dogBreed.splice(i1, 1)
              // console.log(dogBreed);
              removeStorage('dogBreed_1',dogBreed)
              saveToStorage('dogBreed_1',dogBreed)
            }else if(breeds[i].type==='Cat'){
              let breed = breeds[i].breed
              let i2 = dogBreed.indexOf(breed)
              catBreed.splice(i2, 1)
              // console.log(catBreed);
              removeStorage('catBreed_1',catBreed)
              saveToStorage('catBreed_1',catBreed)
            }
            


            breeds.splice(i, 1)
            
              
            }
            removeStorage('breed_1',breeds)
          saveToStorage('breed_1',breeds)
          renderTableDataBreed()
          }
          }; 
        }      



sideBar.addEventListener("click", function () {
  sideBar.classList.toggle("active");
});
