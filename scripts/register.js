'use strict'


const firstName = document.querySelector('#input-firstname')
const lastName = document.querySelector('#input-lastname')
const userName = document.querySelector('#input-username')
const passWord = document.querySelector('#input-password')
const passwordConfirm = document.querySelector('#input-password-confirm')
const btnSub = document.querySelector('#btn-submit')


let userArr = []
getFromStorage()
console.log(userArr)

let usernames = []
getNamesFromStorage()
console.log(usernames);

firstName.value;
lastName.value;
userName.value;
passWord.value;

//xóa dữ liệu input
const clear = function(){
    firstName.value = '';
    lastName.value = '';
    userName.value = '';
    passWord.value = '';
    passwordConfirm.value = '';
}

  //validate
  const validate = function(){
      
    //không có trường nào bỏ trống
    if(firstName.value.trim().length===0){
        alert('please input First Name')
        return 'false'
    }

    if(lastName.value.trim().length===0){
        alert('please input Last Name')
        return 'false'
    }

    if(userName.value.trim().length===0){
        alert('please input User Name')
        return 'false'
    }

    if(passWord.value.trim().length===0){
        alert('please input Password')
        return 'false'
    }

    if(passwordConfirm.value.trim().length===0){
        alert('please input Password Confirm')
        return 'false'
    }


    //userName không trùng nhau
    for(let i=0; i<userArr.length; i++){
    if(userName.value===userArr[i].userName){
        alert('Please enter a unique User Name')
        return 'false'
    }}

    //Password phải có nhiều hơn 8 ký tự
    if(passWord.value.length < 8){
        alert('please enter a unique Password')
        return 'false'
    }

    //xác nhận password
    if(passWord.value!== passwordConfirm.value){
        alert('please enter a unique Password or Password Confirm')
        return 'false'
    }
  }
  

//nút Register
btnSub.addEventListener('click',function(){

  if(validate() !== 'false'){
    const data = new User(firstName.value,lastName.value,userName.value,passWord.value)
    userArr.push(data)
    usernames.push(data.userName)
    console.log(userArr);
    console.log(usernames);
       saveToStorage('userArr_1',userArr)
       saveToStorage('usernames_1',usernames)
       clear()
    window.location.href = '../pages/login.html'
  }
})
