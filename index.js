const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];

let passOneEl = document.getElementById("pass-one-el")
let passTwoEl = document.getElementById("pass-two-el")
let buttonEl = document.getElementById("button-el")


buttonEl.addEventListener("click", function() {
    passOneEl.textContent = getpwd()
    passTwoEl.textContent = getpwd()

})

function getpwd(){
    let pwd = ""
    for (let i = 0;i < 16; i++ ){
        pwd += getano()
    }
    return pwd
}

function getano() {
    return characters[Math.floor(Math.random() * characters.length)]
}

passOneEl.addEventListener("click", function(){
    /* Get the text field */
    let copyText = passOneEl;
  
    /* Select the text field */
    let copyThis = copyText.textContent;
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyThis);
  
    alert("Copied to clipboard");
  
  })
  passTwoEl.addEventListener("click", function(){
    /* Get the text field */
    let copyText = passTwoEl;
  
    /* Select the text field */
    let copyThis = copyText.textContent;
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyThis);
  
    alert("Copied to clipboard");
  
  })
