let screen = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (btns of buttons) {
    btns.addEventListener("click", function (e) {
        buttonText = e.target.innerText;
        console.log("You clicked", buttonText);
        if (buttonText === "*") {
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        else if (buttonText === "C") {
            screen.value = "";
            screenValue="";
        }
        else if(buttonText ==="="){
            screen.value=eval(screenValue);
        }
        else if(buttonText ==="<-"){
            
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    });
}




