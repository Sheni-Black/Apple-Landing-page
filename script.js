const scroll = document.querySelectorAll(".scroll");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("cards", entry.isIntersecting);
        // if (entry.isIntersecting){
        //     entry.target.classList.add("cards");
        // }
         if (entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    })
},
{
    threshold: 0.1
}
)

scroll.forEach( card => observer.observe(card));