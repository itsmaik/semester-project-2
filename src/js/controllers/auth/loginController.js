import { AuthServices } from '../../services/AuthServices';
import { updateButtonVisibility } from '../../pages/home/logged';

export function loginController() {
  const loginForm = document.querySelector('#loginModal form');

  loginForm.addEventListener('submit', async (event) => {
    console.log('Login form submitted');
    event.preventDefault();

    const credentials = {
      email: document.getElementById('email-login').value.trim(),
      password: document.getElementById('password-login').value,
    };

    try {
      await AuthServices.login(credentials);
      window.location.reload();
      alert('Login Successful');
      updateButtonVisibility();
      console.log(alert);
    } catch (error) {
      alert('Error during login: ' + error.message);
    } finally {
      document.querySelector('#loginModal'); //make loading function
    }
  });
}