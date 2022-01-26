let $btnCat = document.querySelector('#btnCat');
$btnCat.addEventListener('click', ()=>{

    //Con fetch hacemos una petición al servidor
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data=>{
            console.log(data);
            //aquí agrego una imagen al documento
            let catImage=document.createElement('img');
            //le damos valor a la imagen con una url, del arreglo que nos arrojó el fetch, pero queremos sólo la primera posición del arreglo
            catImage.src=data[0].url;
            //y aqui se los agregamos directamente al body
            document.body.appendChild(catImage);
        })
    //necesitamos que la respuesta esté en forma de JSON
});


//Con dog api, directamente nos devuelve un json el fetch, no un arreglo, así que sólo tenemos que hacer referencia a la imagen en vez de a la posición como en el de arriba
$btnCat.addEventListener('click', ()=>{


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data=>{
            console.log(data);
            let catImage=document.createElement('img');
            catImage.src=data.message;
            document.body.appendChild(catImage);
        })
})