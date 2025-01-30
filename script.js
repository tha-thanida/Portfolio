const menuBtn = document.getElementById('menu-btn'); 
const menu = document.getElementById('menu'); 

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); 
});

const fadeInElements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('show');  
            setTimeout(() => entry.target.classList.add('show'), 100);
        }
    });
}, { threshold: 0.2 }); 

fadeInElements.forEach(el => observer.observe(el));
