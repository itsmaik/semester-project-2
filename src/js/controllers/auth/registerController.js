import { AuthServices } from '../../services/AuthServices';
import createFeedbackPopup from '../../utils/functions/feedback';

export function registerController() {
  const registerForm = document.querySelector('#registerModal form');
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userData = {
      name: document.getElementById('username').value.trim(),
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value,
    };

    try {
      await AuthServices.register(userData);
      await AuthServices.login({
        email: userData.email,
        password: userData.password,
      });
      window.location.reload();
      createFeedbackPopup('Registration Successful', 'success');
    } catch (error) {
      if (error && error.errors && error.errors.length > 0) {
        createFeedbackPopup(error.errors[0].message, 'error');
      } else {
        createFeedbackPopup('Error to register account', 'error');
      }
    } finally {
      document.querySelector('#registerModal'); //make loading
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  registerController();
});
