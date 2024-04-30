const slide =["PHOTO-2023-12-10-13-47-22.JPG" ,"PHOTO-2023-12-12-19-12-23 (2).JPG",
"PHOTO-2023-12-10-18-49-15.JPG","flamingo-8353373_1280.jpg",
"PHOTO-2023-12-10-17-50-10.JPG","PHOTO-2023-12-15-14-26-14.JPG",
"PHOTO-2023-09-20-22-48-56.JPG","PHOTO-2023-12-10-13-47-12.JPG",
"PHOTO-2023-12-12-19-12-24.JPG","PHOTO-2023-09-20-22-57-46.JPG","PHOTO-2023-12-10-13-47-14.JPG",
"PHOTO-2023-12-10-13-47-20.JPG","PHOTO-2023-12-10-18-46-41.JPG","PHOTO-2023-12-10-18-46-40.JPG",
"PHOTO-2023-12-22-15-57-07.JPG",];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length -1)
        numero = 0;
    if (numero < 0)
        numero = slide.length -1;
     document.getElementById("slide").src = "slide/" + slide[numero];
}

setInterval("ChangeSlide(1)", 3000);
