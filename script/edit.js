'use strict';

const btnSub = document.querySelector('#submit-btn')
const inputId = document.querySelector('#input-id')
const inputName = document.querySelector('#input-name')
const inputAge = document.querySelector('#input-age')
const inputType = document.querySelector('#input-type')
const inputWeight = document.querySelector('#input-weight')
const inputLength = document.querySelector('#input-length')
const inputColor_1 = document.querySelector('#input-color-1')
const inputBreed = document.querySelector('#input-breed')
const vaccinated = document.querySelector('#input-vaccinated')
const dewormed = document.querySelector('#input-dewormed')
const sterilized = document.querySelector('#input-sterilized')
const btnHeal = document.querySelector('#healthy-btn')
const btnAll = document.querySelector('#show-all-btn')
const tBody = document.querySelector('#tbody')
const btnBMI = document.querySelectorAll('#BMI')
const sideBar = document.querySelector('#sidebar')
const btnEdit = document.querySelector('#container-form')

let petArr =[]
let healPet = []
console.log(petArr);
getFromStorage()

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
  } 
  else {
    renderBreed(breedValue);
  }
};
const valueBreed = function (i) {
    let option = `<option>${petArr[i].breed}</option>`;
    inputBreed.innerHTML = option;
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
inputAge.value;
inputType.value;
inputWeight.value;
inputLength.value;
inputColor_1.value
inputBreed.value
vaccinated.checked === true ? vaccinated.checked = true : ''
dewormed.checked === true ? dewormed.checked = true : ''
sterilized.checked === true ? sterilized.checked = true : ''
//thêm vào danh sách chỉnh sửa thú cưng
renderTableDataEdit(petArr)
function renderTableDataEdit(pet) {
    let row = ``
    
        for(let i=0; i<pet.length; i++){ 
        let vaccinated_2 = pet[i].vaccinated_1 === true ? 'bi-check-circle-fill' : 'bi-x-circle-fill' 
        let dewormed_2 = pet[i].dewormed_1 === true ? 'bi-check-circle-fill' : 'bi-x-circle-fill' 
        let sterilized_2 = pet[i].sterilized_1 === true ? 'bi-check-circle-fill' : 'bi-x-circle-fill' 
             row += `<tr>
        <th scope="row">P${pet[i].id}</th>
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
        <td><button id="edit_btn" type="button" class="btn btn-warning" onclick="editPet(${pet[i].id})" >Edit</button></td>
        </tr>`
        } 
        tBody.innerHTML = row
    }

//hiện bảng thông số chỉnh sửa
const editPet = function(id){

    let i = petArr.indexOf(id)
    
    for( i=0; i < petArr.length; i++){
        if(petArr[i].id==id)
        {
        btnEdit.classList.remove('hide')
        valueBreed(i)
        //giá trị các thông số hiện có
inputId.value = petArr[i].id
inputName.value = petArr[i].name
inputAge.value = petArr[i].age
inputType.value = petArr[i].type
inputWeight.value = petArr[i].weight
inputLength.value = petArr[i].length
inputColor_1.value = petArr[i].color
inputBreed.value = petArr[i].breed
vaccinated.value = petArr[i].vaccinated_1
dewormed.value = petArr[i].dewormed_1
sterilized.value = petArr[i].sterilized_1

};    
}
inputType.addEventListener("click", breed_if);


// inputId.value;
// inputName.value;
// inputAge.value;
// inputType.value;
// inputWeight.value;
// inputLength.value;
// inputColor_1.value
// inputBreed.value
// vaccinated.checked === true ? vaccinated.checked = true : ''
// dewormed.checked === true ? dewormed.checked = true : ''
// sterilized.checked === true ? sterilized.checked = true : ''




btnSub.addEventListener('click', function() {
    let i = petArr.indexOf(id)
    
    for( i=0; i < petArr.length; i++){
        if(petArr[i].id==id){

    btnEdit.classList.add('hide')

    if(validate()!=="false"){
        // dữ liệu từ input
     const dataEdit = {
         id:petArr[i].id,
         name: inputName.value,
         age: parseInt(inputAge.value),
         type: inputType.value,
         weight: parseInt(inputWeight.value),
         length: parseInt(inputLength.value),
         color: inputColor_1.value,
         breed: inputBreed.value,
         vaccinated_1: vaccinated.checked,
         dewormed_1: dewormed.checked,
         sterilized_1: sterilized.checked,
         date: petArr[i].date,
     }
    // console.log(i);
 //thêm dữ liệu từ data vào array petArr
 petArr.splice(i, 1, dataEdit)
 
 renderTableDataEdit(petArr)
 
 saveToStorage('petArr_1',petArr)
}
}
}
})
}


const validate = function() {
   
	//cảnh báo nhập thiếu dữ lệu
	if(inputName.value.trim().length === 0 ) {
        alert('please input Name')
        return "false"
    }
	
	if(inputAge.value.trim().length === 0 ) {
        alert('please input Age')
        return "false"
    }
	
	if(inputWeight.value.trim().length === 0 ) {
        alert('please input Weight')
        return "false"
    }
	
	if(inputLength.value.trim().length === 0 ) {
        alert('please input Length')
        return "false"
    }
	
	if(inputColor_1.value.trim().length === 0 ) {
        alert('please input Color')
        return "false"
    }

	if(inputAge.value < 1 || inputAge.value > 15) {
        alert("Age must be between 1 and 15!")
	    return "false"
	};
	if(inputWeight.value < 1 || inputWeight.value > 15) {
        alert("Weight must be between 1 and 15!")
	    return "false"
	};
	if(inputLength.value < 1 || inputLength.value > 100) {
        alert("Length must be between 1 and 100!")
	    return "false"
	};
	if (inputType.selectedIndex === 0) {
        alert("Please select Type!")
	    return "false"
	}
	if (inputBreed.selectedIndex === 0) {
        alert("Please select Breed!")
	    return "false"
    }
}

sideBar.addEventListener('click', function(){
    sideBar.classList.toggle('active')
})