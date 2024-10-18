let imgBox = document.querySelector(".img-box");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText")

function GenerateQr(){
    if(qrText.value.length > 0){
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        },1000)
    }
}