
document.querySelector('#next').onclick = () => {
    let slideElements = document.querySelectorAll('.item');

    // MUEVE el primer elemento como último para hacer el slide infinito
    document.querySelector('#slider').appendChild(slideElements[0]);
}

document.querySelector('#prev').onclick = () => {
    let slideElements = document.querySelectorAll('.item');
    
    // MUEVE ultimo elemento al inicio
    document.querySelector('#slider').prepend(slideElements[slideElements.length - 1]);
    
}