// Back to Top Button Functionality
function setupBackToTopButton() {
    const backToTopButton = document.getElementById("backToTopBtn");
    if (!backToTopButton) {
        console.warn("Back to top button not found. Ensure it has id 'backToTopBtn'.");
        return;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const pageTransition = document.createElement("div");
    pageTransition.className = "page-transition";
    document.body.appendChild(pageTransition);

    const themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    // Icon will be set by applyTheme
    document.body.appendChild(themeToggle);

    setTimeout(() => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.classList.add("visible"); 
        });
    }, 100);

    setupBackToTopButton(); 

    if (typeof sectionObserver !== 'undefined') {
        setTimeout(() => {
             const sections = document.querySelectorAll("section");
             sections.forEach(section => {
                 sectionObserver.observe(section);
             });
        }, 100);
    }

    const languageToggle = document.getElementById("language-toggle");
    const currentLangSpan = document.getElementById("current-lang");
    let currentLanguage = localStorage.getItem("language") || "ar";

    async function loadTranslations(lang) {
        try {
            const response = await fetch(`${lang}.json`);
            if (!response.ok) {
                console.error(`Failed to load ${lang}.json: ${response.statusText}`);
                return {};
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${lang}.json:`, error);
            return {};
        }
    }

    async function applyTranslations(translations) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[key]) {
                if (element.tagName === 'UL' && Array.isArray(translations[key])) {
                    element.innerHTML = translations[key].map(item => `<li>${item}</li>`).join('');
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
        // Apply rtl/ltr class to body for specific styling if needed, otherwise CSS handles direction
        document.body.classList.remove("rtl", "ltr"); 
        document.body.classList.add(currentLanguage === "ar" ? "rtl" : "ltr");
        if (currentLangSpan) currentLangSpan.textContent = currentLanguage === "ar" ? "العربية" : "English";
        updateYear();
    }

    async function toggleLanguage() {
        currentLanguage = currentLanguage === "ar" ? "en" : "ar";
        localStorage.setItem("language", currentLanguage);
        const translations = await loadTranslations(currentLanguage);
        applyTranslations(translations);
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", toggleLanguage);
    }

    const body = document.body;
    let currentTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode

    function applyTheme(theme) {
        body.classList.remove("light-theme", "dark-theme");
        body.classList.add(theme + "-theme");
        themeToggle.innerHTML = theme === "dark" ? "☀️" : "🌙"; // Sun for dark theme, Moon for light theme
        localStorage.setItem("theme", theme);
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            currentTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(currentTheme);
        });
    }
    
    function updateYear() {
        const yearSpan = document.getElementById("current-year");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    async function initializeApp() {
        const translations = await loadTranslations(currentLanguage);
        applyTranslations(translations);
        applyTheme(currentTheme); // Apply theme on initial load
        updateYear();
    }

    initializeApp();

});

// Define sectionObserver if it was part of the original script.js
// This is a placeholder, actual implementation might differ
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // observer.unobserve(entry.target); // Optional
        }
    });
}, { threshold: 0.1 });

