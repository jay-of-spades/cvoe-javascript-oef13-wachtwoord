'use strict';
const input = document.getElementById('password');
let inputWW = 'zegikniet',
  melding = document.getElementById('meldingen'),
  emailInput = document.getElementById('email');

function checkWW() {
  let errorMessage = '';
  if (input.value === inputWW && emailInput.value !== '') {
    melding.classList.remove('hidden');
    melding.innerHTML = 'Juist wachtwoord. Welkom';
  }
  if (input.value === '' || input.value !== inputWW) {
    input.classList.add('input-error');
    errorMessage = 'Er is iets mis met het wachtwoord.';
  }
  if (emailInput.value === '') {
    emailInput.classList.add('input-error');
    errorMessage +=
      (errorMessage ? ' ' : '') + 'Die e-mail staat niet in onze lijst.';
  }

  if (errorMessage) {
    melding.classList.remove('hidden');
    melding.innerHTML = errorMessage;
  }
}

function clearErrorMessage() {
  if (input.classList.contains('input-error')) {
    melding.innerHTML = '';
    melding.classList.add('hidden');
    input.classList.remove('input-error');
    ('input-error');
    input.value = '';
  }
  if (emailInput.classList.contains('input-error')) {
    melding.innerHTML = '';
    melding.classList.add('hidden');
    emailInput.classList.remove('input-error');
    emailInput.value = '';
  }
}

function handleFocus() {
  clearErrorMessage();
  if (input.type === 'text' && input.value === '') {
    input.type = 'password';
  }
}

function handleEmailFocus() {
  clearErrorMessage();
}

function handleBlur() {
  if (input.value === '') {
    input.type = 'text';
  }
}

function handleInput() {
  if (input.value !== '' && input.type === 'text') {
    input.type = 'password';
  }
}

function init() {
  input.addEventListener('input', handleInput);
  input.addEventListener('focus', handleFocus);
  emailInput.addEventListener('focus', handleEmailFocus);
}
window.onload = init;
