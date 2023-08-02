
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggleBtn = document.getElementById('mobileMenuToggleBtn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const aboutBtn = document.querySelector('[aria-haspopup="true"]');
  const aboutDropdown = document.querySelector('[aria-expanded="false"]');

  aboutBtn.addEventListener('click', () => {
    aboutDropdown.setAttribute('aria-expanded', aboutDropdown.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });

  const seeMoreButton = document.getElementById('seeMoreButton');
  const hiddenImages = document.querySelectorAll('.hidden-image');

  seeMoreButton.addEventListener('click', () => {
    hiddenImages.forEach(image => {
      image.classList.toggle('hidden');
    });

    seeMoreButton.textContent = seeMoreButton.textContent === 'See More' ? 'See Less' : 'See More';
  });

  hiddenImages.forEach(image => {
    image.classList.add('hidden');
  });
});
