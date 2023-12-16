
let imgBox = document.querySelector(".imgBox");
let qrImg = document.querySelector(".qrImg");
let qrValue =document.querySelector(".qrValue");
let submitBtn = document.querySelector(".button")

const generateQr = ()=>{
    if(qrValue.value.length > 0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrValue;
    imgBox.classList.add("show-img")
    }else{
        qrValue.classList.add("error")
        setTimeout(()=>{
            qrValue.classList.remove("error")
        },1000);
    }
};
submitBtn.addEventListener("click",()=>{
    generateQr();
})