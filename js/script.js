// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue(
    {
        el: '#root',
        data: {
            activeImage: 0,
            arrayImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ],
        },
        methods: {
            nextImage() {
                const nextImg = this.activeImage + 1;

                if (nextImg > this.arrayImages.length - 1) {
                    this.activeImage = 0;
                } else {
                    this.activeImage = nextImg;
                }
            },

            prevImage() {
                const prevImg = this.activeImage - 1;

                if (prevImg < 0) {
                    this.activeImage = this.arrayImages.length - 1;
                } else {
                    this.activeImage = prevImg;
                }
            }
        },
        created() {
            setInterval(() => this.nextImage(), 3000);
        }
    }
);