import { AuthServices } from '../../services/AuthServices';
import createFeedbackPopup from '../../utils/functions/feedback';
import { updateButtonVisibility } from '../actions/logged';
import { newListingBtnBehavior } from '../actions/newListingBtnBehavior';

export function loginController() {
  const loginForm = document.querySelector('#loginModal form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const credentials = {
      email: document.getElementById('email-login').value.trim(),
      password: document.getElementById('password-login').value,
    };

    try {
      await AuthServices.login(credentials);

      createFeedbackPopup('Login Successful', 'success');
      updateButtonVisibility();
      newListingBtnBehavior();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error && error.errors && error.errors.length > 0) {
        createFeedbackPopup(error.errors[0].message, 'error');
      } else {
        createFeedbackPopup('Error to update profile', 'error');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loginController();
});
