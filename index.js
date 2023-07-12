

function displaysignupcon(){ 
    let signupcontainer=document.getElementById("signupcon");
    let signincontainer=document.getElementById("signincon");
    let homecontainer=document.getElementById("homepage");
    let searchcontainer=document.getElementById("search");
    homecontainer.classList.add("nodisplay");
    signincontainer.classList.add("nodisplay");
    signupcontainer.classList.remove("nodisplay");
    searchcontainer.classList.add("nodisplay");
}
function displaysignincon(){
    let signupcontainer=document.getElementById("signupcon");
    let signincontainer=document.getElementById("signincon");
    let homecontainer=document.getElementById("homepage");
    let searchcontainer=document.getElementById("search");
    homecontainer.classList.add("nodisplay");
    signincontainer.classList.remove("nodisplay");
    signupcontainer.classList.add("nodisplay");
    searchcontainer.classList.add("nodisplay");
}


function displayhome(){
    let signupcontainer=document.getElementById("signupcon");
    let signincontainer=document.getElementById("signincon");
    let homecontainer=document.getElementById("homepage");
    let searchcontainer=document.getElementById("search");
    homecontainer.classList.remove("nodisplay");
    signincontainer.classList.add("nodisplay");
    signupcontainer.classList.add("nodisplay");
    searchcontainer.classList.add("nodisplay");
}

function displaysearchcon(){
    let signupcontainer=document.getElementById("signupcon");
    let signincontainer=document.getElementById("signincon");
    let homecontainer=document.getElementById("homepage");
    let searchcontainer=document.getElementById("search");
    homecontainer.classList.add("nodisplay");
    signincontainer.classList.add("nodisplay");
    signupcontainer.classList.add("nodisplay");
    searchcontainer.classList.remove("nodisplay");
}