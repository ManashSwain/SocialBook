// function to toggle profile menu icon 

let menu = document.getElementById("menuitems");
let profilebox = document.getElementById("profilebox");

function miniprofilemenu() {
    profilebox.classList.toggle("changeclass");
}

// function for changing the theme 

let mode = document.getElementById("theme");

function themechanger() {

    document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
           
           mode.src="./images/crescent-moon.png";
   }
   else{
        mode.src="./images/sunny.png";
   }
   if((localStorage.getItem("theme") == "light")){
    localStorage.setItem("theme","dark");
   }
   else{
    localStorage.setItem("theme","light");
   }
}

if(localStorage.getItem("theme") == "light"){
     document.body.classList.remove("dark-theme");
     mode.src="./images/sunny.png";
}
else if (localStorage.getItem("theme") == "dark"){
    document.body.classList.add("dark-theme");
    mode.src="./images/crescent-moon.png";
}
else{
    localStorage.setItem("theme","light");
}