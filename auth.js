function signup(){

let user=document.getElementById("signupUser").value
let pass=document.getElementById("signupPass").value

localStorage.setItem(user,pass)

alert("Account created")

window.location="index.html"
}

function login(){

let user=document.getElementById("loginUser").value
let pass=document.getElementById("loginPass").value

if(localStorage.getItem(user)===pass){

localStorage.setItem("loggedUser",user)

window.location="dashboard.html"
}
else{

alert("Invalid login")

}
}

function logout(){

localStorage.removeItem("loggedUser")

window.location="index.html"

}