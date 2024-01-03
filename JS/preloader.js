// Add an event listener to add a class to the body when the page starts loading
document.body.classList.add('preloader-visible');
    
// Add an event listener to hide the preloader and main content when the content is fully loaded
window.addEventListener('load', function () {
  document.body.classList.remove('preloader-visible');
  document.querySelector('.preloader-container').style.display = 'none';
  document.querySelector('main').style.opacity = '1';
});