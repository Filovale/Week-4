let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let movies = document.querySelectorAll(".card");

for (film of movies) {
    film.addEventListener ("mouseenter", (event) => {
        film.offsetWidth;
        event.target.classList.add("zoom-in");
    });
    film.addEventListener ("mouseleave", (event) => {
        film.offsetWidth;
        event.target.classList.remove("zoom-in");
    });
}

