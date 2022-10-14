'use strict'

const userName = document.querySelector('#input-username')
const passWord = document.querySelector('#input-password')
const btnLogin = document.querySelector('#btn-submit')

let userArr=[]
getFromStorage()
// console.log(userArr);

let usernames = []
getNamesFromStorage()
// console.log(usernames)

let activeUser=[]
getActiveUserFromStorage()
console.log(activeUser);

//validate
const validateLogin = function(){
    // if(userName.value.trim().length===0){
    //     alert('Please input User Name')
    //     return 'false'
    // }

    // if(passWord.value.trim().length===0){
    //     alert('Please input Password')
    //     return 'false'
    // }
}


//nút login
btnLogin.addEventListener('click',function(){
    activeUser=[]
   
        if(validateLogin()!== 'false'){
            if(usernames.includes(`${userName.value}`)){
                for(let i=0; i< userArr.length; i++){
                    if(userName.value === userArr[i].userName){
                        if(userArr[i].passWord === passWord.value){
                            activeUser.push(userArr[i])
                            
                            console.log(activeUser);
                            removeFromStorage('activeUser_1',activeUser)
                            saveToStorage('activeUser_1',activeUser)
                            window.location.href = '../index.html';

                        }else if(userArr[i].passWord !== passWord.value){
                            alert('lỗi passWord')
                        }
                    }
                }
            }else{
                alert('lỗi Username');
            } 



}


})
