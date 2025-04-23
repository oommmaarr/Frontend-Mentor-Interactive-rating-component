let spans = document.querySelectorAll(".rating-buttons span");
console.log(spans);
let button = document.querySelector("button")
console.log(button)
let parent1 = document.getElementsByClassName("parent")[0]
console.log(parent1)
let parent2 = document.getElementsByClassName("parent2")[0]
console.log(parent2)
let selectedRating = 0;
let h = document.querySelectorAll("h1")
console.log(h);
spans.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        spans.forEach(ele=>{ele.classList.remove("selected")})
      ele.classList.add("selected");
      selectedRating=ele.innerHTML
    })
})
console.log(selectedRating)

button.addEventListener("click",()=>{
       parent1.style.display="none";
       parent2.style.display="flex";
       document.querySelectorAll("h1")[1].innerText = `You selected ${selectedRating} out of 5`
})