'use strict'


const inputPageSize = document.querySelector('#input-page-size')
const inputCategory = document.querySelector('#input-category')
const btnSubSet = document.querySelector('#btn-submit')

let setting = []
getSettingFromStorage()

let activeUser=[]
getActiveUserFromStorage()

if(activeUser.length!==0){
        btnSubSet.addEventListener('click', function(){
    if(inputPageSize.value.trim().length!==0){

            setting = []
            let data = new Setting(inputPageSize.value,inputCategory.value)
            setting.push(data)
            removeFromStorage('setting_1',setting) 
            saveToStorage('setting_1',setting) 
            // console.log(setting);
           
        }else{
            alert('Please input News per page')
        }
        })
    }else{
        document.querySelector('#content').innerHTML = '<h1 style="color:red;margin: auto;">Please Log In</h1>' 
    
    }


