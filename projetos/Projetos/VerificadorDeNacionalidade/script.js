function mostrar() {

   var nome = String(window.document.getElementById('nome').value)
   var pais = String(window.document.getElementById('pais').value)
   var res = window.document.getElementById('res')
   
   res.innerHTML = `<p> Olá <strong>${nome}</strong> voce mora no pais <strong>${pais}</strong> </p>`

   if (pais.toLowerCase() == 'brasil') {
       res.innerHTML += `<p> Voce é <strong>brasileiro!</strong> </p>`
   } else {
       res.innerHTML += `<p> Voce é <strong>estrangeiro!</strong> </p>`
   }
   }




