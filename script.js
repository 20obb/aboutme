// Page loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Create loader element
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>جاري التحميل...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    setTimeout(function() {
        loader.classList.add('hidden');
        setTimeout(function() {
            loader.remove();
        }, 500);
    }, 1500);
    
    // Add page transition div
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);
    
    // Add theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'تبديل المظهر');
    document.body.appendChild(themeToggle);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize language and content
    initializeLanguage();
    
    // Make sections visible initially
    setTimeout(function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.classList.add('visible');
        });
    }, 500);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add animation to sections when they come into view
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
});

// Language toggle functionality
function initializeLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const currentLang = document.getElementById('current-lang');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Set initial language from localStorage or default to Arabic
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    
    // Language toggle click event
    languageToggle.addEventListener('click', function() {
        const pageTransition = document.querySelector('.page-transition');
        
        // Start transition animation
        pageTransition.classList.add('active');
        
        setTimeout(function() {
            // Toggle language after transition starts
            const newLanguage = htmlElement.lang === 'ar' ? 'en' : 'ar';
            setLanguage(newLanguage);
            
            // Complete transition
            setTimeout(function() {
                pageTransition.classList.add('exit');
                
                setTimeout(function() {
                    pageTransition.classList.remove('active', 'exit');
                }, 500);
            }, 500);
        }, 500);
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        bodyElement.classList.toggle('light-theme');
        
        if (bodyElement.classList.contains('light-theme')) {
            themeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Set initial theme from localStorage - dark is default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-theme');
        themeToggle.innerHTML = '☀️';
    }
}

// Set language and update content
function setLanguage(lang) {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const currentLang = document.getElementById('current-lang');
    
    htmlElement.lang = lang;
    localStorage.setItem('language', lang);
    
    if (lang === 'ar') {
        // Arabic content
        bodyElement.classList.add('rtl');
        bodyElement.classList.remove('ltr');
        htmlElement.dir = 'rtl';
        currentLang.textContent = 'العربية';
        
        // Update all content sections to Arabic
        document.querySelector('.hero-content h1').textContent = 'مرحباً 👋 أنا سرمد';
        document.querySelector('.hero-content p').textContent = 'مبرمج وشغوف بعالم التقنية واكتشاف الأدوات الجديدة';
        
        document.querySelector('#about .section-title').textContent = 'من أنا؟';
        document.querySelector('#about .section-content p').textContent = 'أنا سرمد، مبرمج وشغوف بعالم التقنية واكتشاف الأدوات الجديدة. أحب أبحث عن ثغرات وأتعمق بلغات البرمجة وأنظمة المواقع. هدفي أكون شخص مؤثر بعالم التكنولوجيا وأقدم شي يغير العالم للأفضل.';
        
        document.querySelector('#skills .section-title').textContent = '🧠 مهاراتي';
        document.querySelector('#skills .skill-item:nth-child(1) h3').textContent = '💻 لغات البرمجة';
        document.querySelector('#skills .skill-item:nth-child(1) p').textContent = 'Python , Full stack dev web , C , Java';
        document.querySelector('#skills .skill-item:nth-child(2) h3').textContent = '🌐 تصميم المواقع';
        document.querySelector('#skills .skill-item:nth-child(2) p').textContent = 'بداية ممتازة وجاري التطور';
        document.querySelector('#skills .skill-item:nth-child(3) h3').textContent = '🛡️ البحث عن الثغرات';
        document.querySelector('#skills .skill-item:nth-child(3) p').textContent = 'عندي خبرة بصيد الثغرات بمواقع وتطبيقات الويب';
        
        document.querySelector('#projects .section-title').textContent = '🛠 مشاريعي';
        document.querySelector('#projects .project-item h3').textContent = '🤖 HiLoader';
        document.querySelector('#projects .project-item p').textContent = 'بوت تيليجرام لتحميل محتوى من السوشيال ميديا. مشروع بسيط لكن يخدم الناس بطريقة عملية، وأفتخر بيه كبداية قوية.';
        
        document.querySelector('#interests .section-title').textContent = '🎮 اهتماماتي';
        document.querySelector('#interests .section-content p:nth-child(1)').textContent = 'أحب الألعاب والبرمجة، وأقضي وقتي بين التعلّم والتجريب بكل شي يفيدني.';
        document.querySelector('#interests .section-content p:nth-child(2)').textContent = 'أتعلم من أي مصدر مفيد، سواء كان يوتيوب، مواقع، أو دورات، أهم شي يكون مصدره موثوق وينشر معلومات صحيحة.';
        
        document.querySelector('#contact .section-title').textContent = '📬 تواصل وياي';
        document.querySelector('#contact .section-content > p').textContent = 'Instagram أو Telegram، راسلني هناك بكل بساطة ✌️';
        
        // Update footer
        document.querySelector('.footer-text p').textContent = 'شكراً لزيارتك موقعي الشخصي';
        document.querySelector('.footer-links a:nth-child(1)').textContent = 'الرئيسية';
        document.querySelector('.footer-links a:nth-child(2)').textContent = 'من أنا';
        document.querySelector('.footer-links a:nth-child(3)').textContent = 'مهاراتي';
        document.querySelector('.footer-links a:nth-child(4)').textContent = 'مشاريعي';
        document.querySelector('.footer-links a:nth-child(5)').textContent = 'تواصل معي';
        document.querySelector('.copyright p').innerHTML = `© <span id="current-year">${new Date().getFullYear()}</span> سرمد. جميع الحقوق محفوظة.`;
        
    } else {
        // English content
        bodyElement.classList.add('ltr');
        bodyElement.classList.remove('rtl');
        htmlElement.dir = 'ltr';
        currentLang.textContent = 'English';
        
        // Update all content sections to English
        document.querySelector('.hero-content h1').textContent = 'Hello 👋 I\'m Sarmad';
        document.querySelector('.hero-content p').textContent = 'Programmer and tech enthusiast passionate about discovering new tools';
        
        document.querySelector('#about .section-title').textContent = 'Who Am I?';
        document.querySelector('#about .section-content p').textContent = 'I\'m Sarmad, a programmer and tech enthusiast passionate about discovering new tools. I love searching for vulnerabilities and diving deep into programming languages and web systems. My goal is to become an influential person in the technology world and create something that changes the world for the better.';
        
        document.querySelector('#skills .section-title').textContent = '🧠 My Skills';
        document.querySelector('#skills .skill-item:nth-child(1) h3').textContent = '💻 Programming Languages';
        document.querySelector('#skills .skill-item:nth-child(1) p').textContent = 'Python , Full stack dev web , C , Java';
        document.querySelector('#skills .skill-item:nth-child(2) h3').textContent = '🌐 Web Design';
        document.querySelector('#skills .skill-item:nth-child(2) p').textContent = 'Excellent start and continuously improving';
        document.querySelector('#skills .skill-item:nth-child(3) h3').textContent = '🛡️ Vulnerability Research';
        document.querySelector('#skills .skill-item:nth-child(3) p').textContent = 'Experienced in finding vulnerabilities in websites and web applications';
        
        document.querySelector('#projects .section-title').textContent = '🛠 My Projects';
        document.querySelector('#projects .project-item h3').textContent = '🤖 HiLoader';
        document.querySelector('#projects .project-item p').textContent = 'A Telegram bot for downloading content from social media. A simple project that serves people in a practical way, and I\'m proud of it as a strong beginning.';
        
        document.querySelector('#interests .section-title').textContent = '🎮 My Interests';
        document.querySelector('#interests .section-content p:nth-child(1)').textContent = 'I love gaming and programming, and I spend my time learning and experimenting with everything that benefits me.';
        document.querySelector('#interests .section-content p:nth-child(2)').textContent = 'I learn from any useful source, whether it\'s YouTube, websites, or courses, as long as the source is reliable and publishes accurate information.';
        
        document.querySelector('#contact .section-title').textContent = '📬 Contact Me';
        document.querySelector('#contact .section-content > p').textContent = 'Instagram or Telegram, message me there with ease ✌️';
        
        // Update footer
        document.querySelector('.footer-text p').textContent = 'Thank you for visiting my personal website';
        document.querySelector('.footer-links a:nth-child(1)').textContent = 'Home';
        document.querySelector('.footer-links a:nth-child(2)').textContent = 'About';
        document.querySelector('.footer-links a:nth-child(3)').textContent = 'Skills';
        document.querySelector('.footer-links a:nth-child(4)').textContent = 'Projects';
        document.querySelector('.footer-links a:nth-child(5)').textContent = 'Contact';
        document.querySelector('.copyright p').innerHTML = `© <span id="current-year">${new Date().getFullYear()}</span> Sarmad. All rights reserved.`;
    }
}
