// Get the full section element
const fullSection = document.querySelector('.container');

// Detect when the user scrolls to the end of the section
fullSection.addEventListener('scroll', function() {
  if (fullSection.scrollTop + fullSection.clientHeight >= fullSection.scrollHeight) {
    // Trigger your desired event here
    console.log('User has scrolled through the full section!');
  }
});
