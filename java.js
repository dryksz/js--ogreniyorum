/* function kontrol() {
    var username, pass, text ; 
    
    // Kullanıcı adının uzunluğunu username değişkenine aktar
    // Şifrenin uzunluğunu pass değişkenine aktar
    username= document.getElementById("kullaniciad").value.length;
    pass= document.getElementById("kullanicisifre").value.length;
    
   
    // Kullanıcı adı veya şifre girilmemişse
    if (username == 0 || pass == 0) {    
    text= "Kullanici adı veya sifre bos birakilamaz";
    }
    
    // Şifre 6 karakterden kısaysa
    else if (pass < 6) {
    text= "Sifre 6 karakterden kisa olamaz";
    }
    
    // Kullanıcı adı 3'den küçük 20'den fazlaysa 
    else if (username < 3 || username > 20) {    
    text= "Kullanici adi 3-20 karakter arasında olmalıdır"; 
    }
        
    // İkisi de uygunsa
    else {    
    text= "Kayıt Basarili" ;
    }
    
    
    document.getElementById("result").innerHTML = text;
}
*/
var i=0;
var images=["image/sepet.jpg", "image/sepet1.jpg", "image/mutfak.jpg"];
var zaman=3000;
function slideİmg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout(slideImg(),zaman);
}
window.onload=slideİmg;