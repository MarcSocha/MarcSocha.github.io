// Prompts data
const prompts = [
    "song im playing while crumbling under the pressure of parallel parking while cars are watching.",
    "The hush of fresh snowfall, standing under a streetlamp, feeling like time has paused just for you.",
    "A beach bonfire, salt in the air, the sound of waves harmonizing with laughter that feels like home."
];

let currentPrompt = 0;

// Change prompt function
function changePrompt(index) {
    currentPrompt = index;
    document.getElementById('prompt-text').textContent = `"${prompts[index]}"`;
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Page navigation
function showPage(page) {
    // Hide all pages
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('privacy-page').classList.add('hidden');
    document.getElementById('about-page').classList.add('hidden');
    
    // Show selected page
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
    } else if (page === 'privacy') {
        document.getElementById('privacy-page').classList.remove('hidden');
    } else if (page === 'about') {
        document.getElementById('about-page').classList.remove('hidden');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}
