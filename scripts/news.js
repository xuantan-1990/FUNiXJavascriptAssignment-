'use strict'

const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const pageNum = document.querySelector('#page-num')


let userArr=[]
getFromStorage()
// console.log(userArr);

let usernames = []
getNamesFromStorage()
// console.log(usernames)

let activeUser=[]
getActiveUserFromStorage()
// console.log(activeUser);

let setting = []
getSettingFromStorage()
// console.log(setting);

const dataNews = {
country: 'us',
category: setting[0].category,
pageSize: 20,
page: 4,
apiKey: 'eb9e573cdc0a47f69ff402c07337a5a0'
}
console.log(dataNews);

if(activeUser.length!=0){
 function getNews(){
     
    // fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5f5301a537b54d9a9d193f9c314f9f32', dataNews)
    fetch(`https://newsapi.org/v2/top-headlines?country=${dataNews.country}&category=${dataNews.category}&apiKey=${dataNews.apiKey}`)
    .then(function(res){
        
        return res.json()
    })
    .then(function(data){
        console.log(data.articles);
        let pageSize = Number(setting[0].pageSize)
        console.log(pageSize);
        let num = Number(pageNum.textContent)
        let pages =Math.ceil(data.articles.length/setting[0].pageSize)
        let row = ``
        if(num == 1){
            btnPrev.classList.add('display')
                    for (let i = 0; i < num*pageSize; i++) {
                        row += `
                        <div style="border: 1px solid #050505;height:102px;">
                            <img src="${data.articles[i].urlToImage}" style="float:left; width:150px; height:100px;padding-right:5px; ">
                            <p style="padding: 0px 20px; margin:0;">${data.articles[i].description}<p>
                            <a href="${data.articles[i].url}"style=" margin:0;">View</a>
                        </div>`; 
            }
        }

        btnNext.addEventListener('click',function(){
            
            num++ 
            if(num < pages && num >1){
               
                    pageNum.textContent = num
                    if(num == Number(pageNum.textContent)){
                        btnPrev.classList.remove('display')
                        row = ``
                        for (let i = (num-1)*pageSize; i < (num-1)*pageSize +pageSize; i++) {
                            row += `
                            <div style="border: 1px solid #050505;height:102px;">
                                <img src="${data.articles[i].urlToImage}" style="float:left; width:150px; height:100px;padding-right:5px; ">
                                <p style="padding: 0px 20px; margin:0;">${data.articles[i].description}<p>
                                <a href="${data.articles[i].url}"style=" margin:0;">View</a>
                            </div>`; 
                        }  
                        document.querySelector('#news-container').innerHTML = row; 
                }
            }else if(num == pages){
                pageNum.textContent = num
                    btnNext.classList.add('display')
                    row = ``
                    for (let i = (num-1)*pageSize; i < data.articles.length; i++) {
                        
                        console.log(i);
                        console.log(data.articles[i]);
                        row += `
                        <div style="border: 1px solid #050505;height:102px;">
                            <img src="${data.articles[i].urlToImage}" style="float:left; width:150px; height:100px;padding-right:5px; ">
                            <p style="padding: 0px 20px; margin:0;">${data.articles[i].description}<p>
                            <a href="${data.articles[i].url}"style=" margin:0;">View</a>
                        </div>`; 
                    }  
                    document.querySelector('#news-container').innerHTML = row; 
            
            }
        
                }) 

                btnPrev.addEventListener('click',function(){
                    
                    num--
                    if(num >1){
                        pageNum.textContent = num
                            if(num == Number(pageNum.textContent)){
                                btnNext.classList.remove('display')
                                row = ``
                                for (let i = (num-1)*pageSize; i < (num-1)*pageSize +pageSize; i++) {
                                    row += `
                                    <div style="border: 1px solid #050505;height:102px;">
                                        <img src="${data.articles[i].urlToImage}" style="float:left; width:150px; height:100px;padding-right:5px; ">
                                        <p style="padding: 0px 20px; margin:0;">${data.articles[i].description}<p>
                                        <a href="${data.articles[i].url}"style=" margin:0;">View</a>
                                    </div>`; 
                                }  
                                document.querySelector('#news-container').innerHTML = row; 
                        }
                    }
                    else if(num == 1){
                       
                        pageNum.textContent = num
                        btnPrev.classList.add('display')
                            row = ``
                            for (let i = (num-1)*pageSize; i < (num-1)*pageSize +pageSize; i++) {
                                
                                console.log(i);
                                console.log(data.articles[i]);
                                row += `
                                <div style="border: 1px solid #050505;height:102px;">
                                    <img src="${data.articles[i].urlToImage}" style="float:left; width:150px; height:100px;padding-right:5px; ">
                                    <p style="padding: 0px 20px; margin:0;">${data.articles[i].description}<p>
                                    <a href="${data.articles[i].url}"style=" margin:0;">View</a>
                                </div>`; 
                            }  
                            document.querySelector('#news-container').innerHTML = row; 
                    
                    }
                
                        })             
                document.querySelector('#news-container').innerHTML = row;     
})
 }
getNews()
}else{
    document.querySelector('#content').innerHTML = '<h1 style="color:red;margin: auto;">Please Log In</h1>' 

}


