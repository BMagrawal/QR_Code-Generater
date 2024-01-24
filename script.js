const imgBox = document.getElementById("imgBox");
const qrimage = document.getElementById("qrimage");
const qrtext = document.getElementById("qrtext");


function QRGenerater(){
    if(qrtext.value == ""){
        alert("Please enter some text or URL !")
    }
    
    else{
        setTimeout((qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value),2000);

    imgBox.classList.add("show-img");
    }
}