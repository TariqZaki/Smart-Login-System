var welcome = document.querySelector("#content");

var userName = localStorage.getItem("username");


window.addEventListener('load' , function(){
    displayUserName();
})


function displayUserName(){
if (localStorage.getItem('username')!== null){
    welcome.innerHTML +=  userName ;
    
}
}


