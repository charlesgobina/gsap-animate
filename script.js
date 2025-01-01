document.addEventListener('DOMContentLoaded', function() {
  const events = document.querySelectorAll('.event');
  const details = document.getElementById('event-details');

  events.forEach(event => {
      event.addEventListener('click', function() {
          const year = this.getAttribute('data-year');
          const description = this.getAttribute('data-description');
          
          details.innerHTML = `<h3>${year}</h3><p>${description}</p>`;
          details.style.display = 'block';
      });
  });
});