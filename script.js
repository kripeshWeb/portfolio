const onof = document.getElementById("nav-links");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".menu");

menu.addEventListener('click', ()=>{
    navigation.classList.toggle("active");
});

onof.addEventListener('click',()=>{
    navigation.classList.toggle("active");
})





