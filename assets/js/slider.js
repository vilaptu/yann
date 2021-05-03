var slide = new Array("assets/images/cavalier/journal1.bmp", "assets/images/cavalier/journal2.jpg", "assets/images/cavalier/journal3.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}