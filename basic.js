document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const hoverBtn = document.getElementById('hover-btn');
    const doubleClickBtn = document.getElementById('double-click-btn');
    const keypressInput = document.getElementById('keypress-input');
    const form = document.getElementById('user-form');
    const formFeedback = document.getElementById('form-feedback');

    // Change text on button click
    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = 'The text has been changed!';
    });

    // Change color on hover
    hoverBtn.addEventListener('mouseover', () => {
        hoverBtn.style.backgroundColor = 'green';
    });
    hoverBtn.addEventListener('mouseout', () => {
        hoverBtn.style.backgroundColor = '#007bff';
    });

    // Keypress detection
    keypressInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            dynamicText.textContent = `You typed: ${keypressInput.value}`;
        }
    });

    // Double-click action
    doubleClickBtn.addEventListener('dblclick', () => {
        dynamicText.textContent = 'Text reset on double-click!';
    });

    // Image gallery functionality (simple slideshow)
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    setInterval(() => {
        galleryImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        galleryImages[currentImageIndex].style.display = 'block';
    }, 2000);

    // Tabs functionality
    window.openTab = function(evt, tabName) {
        const tabcontent = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className += ' active';
    };

    // Form validation
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formFeedback.textContent = 'Please enter a valid email address.';
            return;
        }

        // Password validation
        if (password.length < 8) {
            formFeedback.textContent = 'Password must be at least 8 characters long.';
            return;
        }

        formFeedback.textContent = 'Form submitted successfully!';
        form.reset();
    });
});
