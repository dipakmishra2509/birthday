document.addEventListener('DOMContentLoaded', () => {
    const openCardBtn = document.getElementById('openCardBtn');
    const card = document.querySelector('.card');
    const birthdaySong = document.getElementById('birthdaySong');
    const birthdayCake = document.getElementById('birthdayCake');
    const knife = document.getElementById('knife');
    const candleFlame = document.getElementById('candle-flame');

    let isCakeCut = false;

    // Open the card and play the song
    openCardBtn.addEventListener('click', () => {
        card.classList.add('open-card');
        birthdaySong.play();
        openCardBtn.style.display = 'none'; // Hide the button
        setTimeout(() => {
            knife.style.opacity = 1;
            knife.classList.add('knife-animate'); // Bring the knife to position
        }, 1000); // Delay for a smoother transition
    });

    // Handle cake "cutting"
    birthdayCake.addEventListener('click', () => {
        if (!isCakeCut) {
            isCakeCut = true;
            birthdayCake.classList.add('cake-cut'); // Apply cake visual change
            knife.classList.add('knife-cut-animation'); // Trigger cutting animation
            candleFlame.style.display = 'none'; // Extinguish the flame
            
            const cakeText = document.querySelector('.cake-text p');
            cakeText.textContent = "You did it! Happy Birthday!";
        }
    });

    // --- Lightbox Functionality ---
    const galleryLinks = document.querySelectorAll('.gallery-photo-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    galleryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.style.display = "block";
            lightboxImg.src = link.href;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            lightbox.style.display = "none";
        }
    });
});