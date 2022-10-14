'use strict'

let saveToStorage = function(key,value){
    localStorage.setItem(key, JSON.stringify(value))
}

let getFromStorage = function () {
    if (localStorage.getItem('userArr_1')) {
      const userArr_1 = JSON.parse(localStorage.getItem('userArr_1'));
      for (let i = 0; i < userArr_1.length; i++) {
        userArr.push(userArr_1[i]);
      }
    } else {
        userArr = [];
    }
  };

let getNamesFromStorage = function () {
    if (localStorage.getItem('usernames_1')) {
      const usernames_1 = JSON.parse(localStorage.getItem('usernames_1'));
      for (let i = 0; i < usernames_1.length; i++) {
        usernames.push(usernames_1[i]);
      }
    } else {
      usernames = [];
    }
  };

  let getActiveUserFromStorage = function () {
    if (localStorage.getItem('activeUser_1')) {
      const activeUser_1 = JSON.parse(localStorage.getItem('activeUser_1'));
      activeUser.push(activeUser_1);
    } else {
      activeUser = [];
    }
  };

  let getTodoListFromStorage = function () {
    if (localStorage.getItem('todoArr_1')) {
      const todoArr_1 = JSON.parse(localStorage.getItem('todoArr_1'));
      for(let i=0; i<todoArr_1.length;i++){
      
      todoArr.push(todoArr_1[i])}
    } else {
      todoArr = [];
    }
  };

  let getSettingFromStorage = function () {
    if (localStorage.getItem('setting_1')) {
      const setting_1 = JSON.parse(localStorage.getItem('setting_1'));
      for(let i=0; i<setting_1.length;i++){
      
        setting.push(setting_1[i])}
    } else {
      setting = [];
    }
  };

let removeFromStorage = function(key,value){
  localStorage.removeItem(key, JSON.stringify(value))
}