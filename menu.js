let about =document.querySelector('#about');
let exp =document.querySelector('#exp');
let port =document.querySelector('#port');
let cont =document.querySelector('#cont');

about.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('image/about.png')";
});
exp.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('image/Experience.png')";
});
port.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('image/projects.png')";
});
cont.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('image/contact.png')";
});