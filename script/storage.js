"use strict";




// //kiểm tra có hỗ trợ storage hay không
// if (typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     console.log('Code for localStorage/sessionStorage');
//     } else {
//     // Sorry! No Web Storage support..
//     console.log('Sorry! No Web Storage support.');
//     }

//save vào localStorage
let saveToStorage = function (Key, Value) {
    localStorage.setItem(Key, JSON.stringify(Value))
};

//lấy dữ liệu từ petArr trong localStorage
let getFromStorage = function () {
  if (localStorage.getItem("petArr_1")) {
    const petArr_1 = JSON.parse(localStorage.getItem("petArr_1"));
    for (let i = 0; i < petArr_1.length; i++) {
      petArr.push(petArr_1[i]);
    }
  } else {
    petArr = [];
  }
};

//lấy dữ liệu từ Breed trong localStorage
let getBreedFromStorage = function () {
  if (localStorage.getItem("breed_1")) {
    const breed_1 = JSON.parse(localStorage.getItem("breed_1"));
    for (let i = 0; i < breed_1.length; i++) {
      breeds.push(breed_1[i]);
    }
  } else {
    breeds = [];
  }
};

//lấy dữ liệu từ dogBreed trong localStorage
let getDogBreedFromStorage = function () {
    if (localStorage.getItem("dogBreed_1")) {
      const dogBreed_1 = JSON.parse(localStorage.getItem("dogBreed_1"));
      for (let i = 0; i < dogBreed_1.length; i++) {
        dogBreed.push(dogBreed_1[i]);
      }
    } else {
        dogBreed = [];
    }
  };

//lấy dữ liệu từ catBreed trong localStorage
let getCatBreedFromStorage = function () {
    if (localStorage.getItem("catBreed_1")) {
      const catBreed_1 = JSON.parse(localStorage.getItem("catBreed_1"));
      for (let i = 0; i < catBreed_1.length; i++) {
        catBreed.push(catBreed_1[i]);
      }
    } else {
      catBreed = [];
    }
  };



//xóa dữ liệu từ localStorage
let removeStorage = function (Key,Value) {
  localStorage.removeItem(Key, JSON.stringify(Value))

};
