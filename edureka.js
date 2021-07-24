let toggleButton = document.querySelectorAll("div .widen");
toggleButton.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       let ele= btn.nextElementSibling;
       console.log(ele);
       ele.classList.toggle('hidden')
    })
})