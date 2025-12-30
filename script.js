// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
if (savedTheme === 'light' || (!savedTheme && !prefersDarkScheme.matches)) {
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggle.checked = false;
} else {
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggle.checked = true;
}

// Toggle theme function
function toggleTheme() {
    if (themeToggle.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', toggleTheme);

// Japanese words rotation
const japaneseWords = [
    { word: "探究 (Tansaku)", meaning: "Exploration & Discovery" },
    { word: "匠 (Takumi)", meaning: "Artisan & Craftsmanship" },
    { word: "和 (Wa)", meaning: "Harmony & Balance" },
    { word: "禅 (Zen)", meaning: "Meditation & Focus" },
    { word: "雅 (Miyabi)", meaning: "Elegance & Refinement" }
];

let currentWordIndex = 0;

function rotateJapaneseWords() {
    const wordElement = document.getElementById('japaneseWord');
    const meaningElement = document.querySelector('.japanese-meaning');
    
    currentWordIndex = (currentWordIndex + 1) % japaneseWords.length;
    const currentWord = japaneseWords[currentWordIndex];
    
    // Add fade out effect
    wordElement.style.opacity = 0;
    meaningElement.style.opacity = 0;
    
    setTimeout(() => {
        wordElement.textContent = currentWord.word;
        meaningElement.textContent = currentWord.meaning;
        
        // Add fade in effect
        wordElement.style.opacity = 1;
        meaningElement.style.opacity = 1;
    }, 500);
}

// Rotate Japanese words every 5 seconds
setInterval(rotateJapaneseWords, 5000);

// Terminal animation effect
function typeTerminalText() {
    const terminalOutput = document.querySelector('.terminal-output:last-child');
    if (terminalOutput) {
        terminalOutput.style.transition = 'none';
        terminalOutput.style.transform = 'scale(0.95)';
        terminalOutput.style.opacity = '0.7';
        
        setTimeout(() => {
            terminalOutput.style.transition = 'all 0.5s ease';
            terminalOutput.style.transform = 'scale(1)';
            terminalOutput.style.opacity = '1';
        }, 10);
    }
}

// Animate terminal periodically
setInterval(typeTerminalText, 3000);

// Add scroll animation to elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .principle-card, .stat, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial check for elements in view
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initialize all elements with animation properties
document.querySelectorAll('.project-card, .principle-card, .stat, .contact-item').forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.1}s`;
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add special effect to GitHub profile stats
document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Add cursor blink effect
const cursor = document.querySelector('.terminal-cursor');
if (cursor) {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// Add scroll-to-top functionality
window.onscroll = function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.id = 'scrollToTop';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--japanese-gold);
        color: var(--bg-dark);
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: var(--transition);
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
    `;
    
    if (!document.getElementById('scrollToTop')) {
        document.body.appendChild(scrollButton);
    }
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.opacity = '1';
        scrollButton.style.transform = 'translateY(0)';
    } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.transform = 'translateY(20px)';
    }
    
    scrollButton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};

// Add particle effects to the background
function createParticles() {
    const container = document.body;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: ${Math.random() > 0.5 ? 'var(--japanese-gold)' : 'var(--japanese-red)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: float${Math.floor(Math.random() * 3)} 15s infinite linear;
        `;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 15}s`;
        
        container.appendChild(particle);
    }
    
    // Add keyframes for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float0 {
            0% { transform: translate(0, 0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh); opacity: 0; }
        }
        
        @keyframes float1 {
            0% { transform: translate(0, 0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh); opacity: 0; }
        }
        
        @keyframes float2 {
            0% { transform: translate(0, 0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh); opacity: 0; }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize particles after the page loads
window.addEventListener('load', createParticles);

// Add click effect to theme toggle
themeToggle.addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

// Add special effect to project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Newsletter Form Functionality
const newsletterForm = document.querySelector('.card__form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Simple email validation
        const emailRegex = /^[\w\+\.-]+@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert('Thank you for subscribing to my newsletter!');
        
        // Reset form
        emailInput.value = '';
    });
}