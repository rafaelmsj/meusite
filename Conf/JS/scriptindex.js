//carrocel de imagens
{
    let imgs = document.getElementById("img");
    let img = document.querySelectorAll("#img img");
    
    let id = 0
    
    function carrocel(){
        id++
    
        if(id > img.length -1){
            id = 0
        }
        imgs.style.transform = `translateX(${-id * 700}px)`
    }
    
    setInterval(carrocel, 3000)
}

/*Parte onde fica os eventos que acontecem quando o mouse entra/sai da parte onde fica o ver mais sobre js,css,html */
{
    let cssvermais = document.getElementById('cssvermais')
    let jsvermais = document.getElementById('jsvermais')
    let htmlvermais = document.getElementById('htmlvermais')

    //css
   function entroucss() {
    
    cssvermais.style.background = 'rgba(45, 47, 49, 0.336'
    cssvermais.style.border = '1px solid rgb(70, 200, 237)'
   }

   function saiucss() {

    cssvermais.style.background = 'white'
    cssvermais.style.border = ''
   }

   function clicoucss() {
    window.location.href = "abas/css.html"
   }

   //JS
   function entroujs() {
    
    jsvermais.style.background = 'rgba(45, 47, 49, 0.336'
    jsvermais.style.border = '1px solid rgb(70, 200, 237)'
   }

   function saiujs() {

    jsvermais.style.background = 'white'
    jsvermais.style.border = ''
   }

   function clicoujs() {
    window.location.href = "abas/js.html"
   }

   //HTML
   function entrouhtml() {
    
    htmlvermais.style.background = 'rgba(45, 47, 49, 0.336'
    htmlvermais.style.border = '1px solid rgb(70, 200, 237)'
   }

   function saiuhtml() {

    htmlvermais.style.background = 'white'
    htmlvermais.style.border = ''
   }

   function clicouhtml() {
    window.location.href = "abas/html.html"
   }
}