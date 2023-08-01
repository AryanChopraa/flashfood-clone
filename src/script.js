document.getElementById('see-more-btn').addEventListener('click', function() {
    const thirdRowImages = document.querySelectorAll('.third-row');
    thirdRowImages.forEach(image => {
      if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });
  });

  const seeMoreButton = document.getElementById('seeMoreButton');
  const hiddenImages = document.querySelectorAll('.hidden-image');
  
  seeMoreButton.addEventListener('click', () => {
      hiddenImages.forEach(image => {
          image.classList.toggle('hidden');
      });
  
      if (seeMoreButton.textContent === 'See More') {
          seeMoreButton.textContent = 'See Less';
      } else {
          seeMoreButton.textContent = 'See More';
      }
  });
  