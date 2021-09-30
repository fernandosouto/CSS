const xbtn = document.getElementsByClassName('searchx')[0]
function apaga(){
    let texto = document.getElementsByClassName("textao")[0];
    texto.value = '';
}
function verticalDisplay(){
    console.log("Chamou Função");
    var ver = document.querySelector(".vertical");
     if(ver.style.display === "inline-flex"){
         ver.style.display = "none"
     }else{
         ver.style.display = "inline-flex"
     }
}