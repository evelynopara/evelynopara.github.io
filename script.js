document.getElementById('sign-now-button').addEventListener('click', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const hometown = document.getElementById('hometown').value;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const hometownInput = document.getElementById('hometown');

  if (name && email && hometown && validateEmail(email)) {
    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
    document.getElementById('signatures').appendChild(newSignature);

    const signatureCount = document.getElementById('signature-count');
    signatureCount.textContent = parseInt(signatureCount.textContent) + 1;

    nameInput.value = '';
    emailInput.value = '';
    hometownInput.value = '';

    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    hometownInput.style.borderColor = '';

    // Show modal with personalized message
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = `Thank you, ${name} from ${hometown}, for your support!`;
    modal.style.display = 'flex';

    // Hide modal after 5 seconds
    setTimeout(() => {
      modal.style.display = 'none';
    }, 5000);
  } else {
    alert('Please fill out all fields correctly.');
    if (!name) nameInput.style.borderColor = 'red';
    if (!email || !validateEmail(email)) emailInput.style.borderColor = 'red';
    if (!hometown) hometownInput.style.borderColor = 'red';
  }
});

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('reduce-motion').addEventListener('click', function() {
  document.body.classList.toggle('reduced-motion');
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Modal close button functionality
document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

// Scroll animation functionality
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && sectionBottom > 0) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
});
