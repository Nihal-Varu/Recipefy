function addRecipe(){

let title=document.getElementById("title").value
let cat=document.getElementById("category").value
let desc=document.getElementById("description").value
let img=document.getElementById("image").value

let recipe={title,category:cat,description:desc,image:img}

let recipes=JSON.parse(localStorage.getItem("recipes")) || []

recipes.push(recipe)

localStorage.setItem("recipes",JSON.stringify(recipes))

showMyRecipes()

}

function showMyRecipes(){

let recipes=JSON.parse(localStorage.getItem("recipes")) || []

let output=""

recipes.forEach(r=>{

output+=`

<div class="recipe-card">

<img src="${r.image}">

<h3>${r.title}</h3>

<p>${r.description}</p>

</div>

`

})

let box=document.getElementById("myList")

if(box) box.innerHTML=output

}

function filter(type){

let recipes=JSON.parse(localStorage.getItem("recipes")) || []

let output=""

recipes.forEach(r=>{

if(r.category===type){

output+=`

<div class="recipe-card">

<img src="${r.image}">

<h3>${r.title}</h3>

<p>${r.description}</p>

</div>

`
}

})

document.getElementById("recipeList").innerHTML=output

}

showMyRecipes()