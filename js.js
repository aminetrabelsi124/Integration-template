document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    clearMessages();
    let isValid = true;
    const title = document.getElementById('t').value;
    if (!validateTitle(title)) {
        showError('t', 'Le titre est obligatoire et doit comporter au moins 3 caractères.');
        isValid = false;
    }
    const destination = document.getElementById('des').value;
    if (!validateDestination(destination)) {
        showError('des', 'La destination doit comporter au moins 3 caractères et ne doit contenir que des lettres et des espaces.');
        isValid = false;
    }
    const departureDate = document.getElementById('d1').value;
    if (!validateDate(departureDate)) {
        showError('d1', 'La date de départ est obligatoire.');
        isValid = false;
    }
    const returnDate = document.getElementById('d2').value;
    if (!validateDate(returnDate)) {
        showError('d2', 'La date de retour est obligatoire.');
        isValid = false;
    }
    const price = document.getElementById('pr').value;
    if (!validatePrice(price)) {
        showError('pr', 'Le prix doit être un nombre entier ou décimal positif.');
        isValid = false;
    }
    const category = document.getElementById('cat').value;
    if (!validateCategory(category)) {
        showError('cat', 'La catégorie doit être sélectionnée parmi les choix proposés.');
        isValid = false;
    }
    if (isValid) {
        alert('Formulaire validé!');
    }
});
function showError(id, message) {
    const field = document.getElementById(id);
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    field.parentElement.appendChild(errorMessage);
}
function clearMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.remove();
    });
}
function validateTitle(title) {
    return title && title.length >= 3;
}
function validateDestination(destination) {
    const regex = /^[a-zA-Z ]+$/;
    return destination && destination.length >= 3 && regex.test(destination);
}
function validateDate(date) {
    return date && date !== '';
}
function validatePrice(price) {
    const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    return regex.test(price);
}
function validateCategory(category) {
    const validCategories = ["1", "2", "3", "4"];
    return validCategories.includes(category);
}