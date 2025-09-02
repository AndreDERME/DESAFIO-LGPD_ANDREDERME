// Array para armazenar os itens do carrossel
let carouselArr = [];

class Carousel {

    
    static _interval = null;
    static _sequence = 0;
    static _size = 0;
    static _arr = [];

    constructor(image, title, uri) {
        this.image = image;
        this.title = title;
        this.uri = uri;
    }

    
    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw new Error("O método Start precisa receber um array com itens.");
        }

        
        Carousel.Stop();

        Carousel._arr = arr;
        Carousel._size = arr.length;
        Carousel._sequence = 0;

        Carousel.Next(); 
        Carousel._interval = setInterval(Carousel.Next, 3000); 
    }

    static Stop() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
            Carousel._interval = null;
        }
    }

    
    static Next() {
        const carouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

        if (!carouselElement || !titleElement) {
            console.error("Elementos do carrossel (#carousel ou #carousel-title) não encontrados no DOM.");
            Carousel.Stop();
        }

        const item = Carousel._arr[Carousel._sequence];

        
        carouselElement.style.backgroundImage = `url(img/${item.image})`;

        
        titleElement.innerHTML = ''; 
        const link = document.createElement('a');
        link.href = item.uri;
        link.textContent = item.title;
        
        titleElement.appendChild(link);

        
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}


carouselArr.push(new Carousel("imagem1.jpg", "Título da Notícia 1", "https://site.com/noticia1"));
carouselArr.push(new Carousel("imagem2.jpg", "Título da Notícia 2", "https://site.com/noticia2"));
carouselArr.push(new Carousel("imagem3.jpg", "Título da Notícia 3", "https://site.com/noticia3"));


document.addEventListener('DOMContentLoaded', () => {
    Carousel.Start(carouselArr);
});