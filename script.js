const passwordInput=document.querySelector(".password-box input"),
copyIcon=document.querySelector(".password-box i"),
rangeInput=document.querySelector(".pass-range input"),
sliderNumber=document.querySelector(".pass-range .number"),
generateButton=document.querySelector(".generate-button");

let allChar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/"

const generatePass=()=>{
    let newPass="";

    for (let index = 0; index < rangeInput.value; index++) {
        let randomnumbers=Math.floor(Math.random() * allChar.length);
        newPass+=allChar[randomnumbers];     
    }
    passwordInput.value=newPass;
    copyIcon.classList.replace("bx-check","bx-copy");
}
copyIcon.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("bx-copy","bx-check");
})
rangeInput.addEventListener("input",()=>{
    sliderNumber.innerText=rangeInput.value;
    generatePass();
   
})
generatePass();
generateButton.addEventListener("click",generatePass);