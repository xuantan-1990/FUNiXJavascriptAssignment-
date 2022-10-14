'use strict'

const begin = document.querySelector('#login-modal')
const logOut = document.querySelector('#btn-logout')
const message = document.querySelector('#welcome-message')

let activeUser=[]
getActiveUserFromStorage()
console.log(activeUser);

if(activeUser.length === 0){
    console.log('đúng');
    logOut.style.display = 'none'
    
}else{
   console.log('sai');
   logOut.style.display = 'block'
   begin.style.display = 'none'
   message.textContent = `Welcome ${activeUser[0][0].firstName}`
}

logOut.addEventListener('click', function(){
    removeFromStorage('activeUser_1',activeUser)
    
    window.location.href = 'pages/login.html';
})