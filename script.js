document.getElementById('contrast-toggle').addEventListener('click', function () {
    // Alternar entre clases de contraste
    document.body.classList.toggle('high-contrast');

document.getElementById('increaseTextSizeButton').addEventListener('click', function() {
        document.body.classList.toggle('increase-text-size');
    });
    

    // Asegurar estilos en el título y enlaces
    const title = document.querySelector('h1');
    const links = document.querySelectorAll('nav ul li a');

    if (document.body.classList.contains('high-contrast')) {
        title.style.color = '#FFD700'; 
        links.forEach(link => link.style.color = '#FFD700'); 
    } else {
        title.style.color = '';
        links.forEach(link => link.style.color = '');
    }
});

