'use strict';



const btnSub = document.querySelector('#submit-btn')
const inputId = document.querySelector('#input-id')
const inputName = document.querySelector('#input-name')
const inputAge = document.querySelector('#input-age')
const inputType = document.querySelector('.Type')
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

let petArr =[]
let healPet = []
let catBreed = []
let dogBreed = []

getFromStorage()
getDogBreedFromStorage()
getCatBreedFromStorage()

 
   
//    petArr.push(petArr_1)
   renderTableData(petArr)




const validate = function() {
   
	//cảnh báo nhập thiếu dữ lệu
	if(inputId.value.trim().length === 0 ) {
		alert('please input ID')
        return "false"
	}

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
	

	//dò id có trùng với id đã có hay ko
	for (let i = 0; i < petArr.length; i++) {
		if (inputId.value === petArr[i].id){
            alert("Please enter a unique ID")
            return "false"
	}
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

inputType.addEventListener('click',function(){
    if(inputType.value === 'Dog'){
        renderBreed(dogBreed)
        
    }else if(inputType.value === 'Cat'){
        renderBreed(catBreed)
    }
})


const renderBreed =function (breed) {
    
    let option = `<option>Select Breed</option>`

    for (let i =0; i<breed.length; i++){
        
    option += `<option>${breed[i]}</option>`

}
    inputBreed.innerHTML = option 
}

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



    
    
    

// Submit button
const addPet= function() {
   


   if(validate()!=="false"){
       // dữ liệu từ input
	const data = {
		id: inputId.value,
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
		date: new Date(),
	}

//thêm dữ liệu từ data vào array petArr
petArr.push(data)

//lọc healthy pet
if (
    vaccinated.checked === true &&
    dewormed.checked === true &&
    sterilized.checked === true
  )
   {healPet.push(data)};

renderTableData(petArr)

resetInput()
saveToStorage('petArr_1',petArr)


}
}


//thêm vào thú cưng mới
function renderTableData(pet) {
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
        <td><button id="${pet[i].id}"type="button" class="btn btn-danger" onclick="deletePet(${pet[i].id})" >Delete</button></td>
        </tr>`
        } 
        tBody.innerHTML = row
    }

    

//xóa dữ liệu input
const resetInput = function(){
	inputId.value = ''
	inputName.value = ''
	inputAge.value = ''
	inputType.value = 'Select Type'
	inputWeight.value = ''
	inputLength.value = ''
	inputColor_1.value = '#000000'
	inputBreed.value = 'Select Breed'
	vaccinated.checked = ''
	dewormed.checked = ''
	sterilized.checked = ''
}

//Xóa thú cưng
const deletePet = function(id){
const del = confirm('Are you sure?')
if(del===true){
   
    let i = petArr.indexOf(id)
    for( i=0; i < petArr.length; i++){
        if(petArr[i].id==id)
        {petArr.splice(i, 1)}; 
        removeStorage('petArr_1',petArr)
        saveToStorage('petArr_1',petArr)
        renderTableData(petArr)
            // console.log(petArr);
	}
}
}

// Hiển thị các thú cưng khỏe mạnh
const showHeal = function() {
    tBody.innerHTML = ''
renderTableData(healPet)
btnAll.classList.toggle('display')
btnHeal.classList.toggle('display')
}

//hiển thị tất cả thú cưng
const showAll = function() {
    tBody.innerHTML = ''
renderTableData(petArr)
btnAll.classList.toggle('display')
btnHeal.classList.toggle('display')
}

sideBar.addEventListener('click', function(){
    sideBar.classList.toggle('active')
})




