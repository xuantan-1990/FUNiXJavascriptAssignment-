'use strict';


const todoList = document.querySelector('#todo-list');
const inputTask = document.querySelector('#input-task')
const btnAdd = document.querySelector('#btn-add')

todoList.innerHTML = ''

let userArr=[];
getFromStorage();
// console.log(userArr);

let activeUser=[];
getActiveUserFromStorage()
// console.log(activeUser);




let todoArr = [];
getTodoListFromStorage()
if(activeUser.length!=0){
renderTask()

//nhập dữ liệu
btnAdd.addEventListener('click', function(){
    if(inputTask.value.trim().length!==0){
        const data= new Task (inputTask.value, activeUser[0][0].userName, false)
        console.log(data);
        todoArr.push(data)
    }else{
        alert('please input Task')
    }
    saveToStorage('todoArr_1', todoArr)
   renderTask()
   inputTask.value =''
})
}else{
    document.querySelector('#content').innerHTML = '<h1 style="color:red;margin: auto;">Please Log In</h1>' 

}

//hiển thị trên giao diện
function renderTask(){
    let row = ``;
for(let i=0; i< todoArr.length; i++){
    todoArr[i].id = todoArr.indexOf(todoArr[i])
    if(activeUser[0][0].userName === todoArr[i].owner){
        if(todoArr[i].isDone === true){
            row += `
            <li class="add checked" ><p onclick="checked(${todoArr[i].id})">${todoArr[i].task}</p><span class="close" onclick="deleteList(${todoArr[i].id})">×</span></li>
            `
        }else{
            row += `
            <li class="add" ><p onclick="checked(${todoArr[i].id})">${todoArr[i].task}</p><span class="close" onclick="deleteList(${todoArr[i].id})">×</span></li>
            `
        }
  }
todoList.innerHTML = row
}
};

//thay đổi checked
function checked(id){  
    let i = todoArr.indexOf(id)
    for( i=0; i < todoArr.length; i++){
        if(todoArr[i].id==id){
            if(todoArr[i].isDone === true){
                todoArr[i].isDone = false

            }else{
                todoArr[i].isDone = true
            }  
        };
        removeFromStorage('todoArr_1', todoArr)
        saveToStorage('todoArr_1', todoArr)
        renderTask()
    }
}

//nút delete
function deleteList(id){ 
        let i = todoArr.indexOf(id)
        for( i=0; i < todoArr.length; i++){
            if(todoArr[i].id==id){
                todoArr.splice(i, 1)}; 
            removeFromStorage('todoArr_1', todoArr)
            saveToStorage('todoArr_1', todoArr)
            if(todoArr.length!=0){
                renderTask()
            }else{
                renderTask()
                todoList.innerHTML = ''
            }      
}
}

