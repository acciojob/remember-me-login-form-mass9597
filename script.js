
const form = document.querySelector("form");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");


const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    alert(`logged in as ${username}`);


    if(checkbox.checked){
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
    }

    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
})

const otherButton = document.getElementById("existing");

if(localStorage.getItem("username")&& localStorage.getItem("password")){
    otherButton.style.display="inline";
}

otherButton.addEventListener("click",function(e){
    e.preventDefault();

    const user = localStorage.getItem("username");
    alert(`logged in as ${user}`);
})
