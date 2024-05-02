import { AuthServices } from '../../services/AuthServices.js';

document.addEventListener('DOMContentLoaded', function () {
  updateButtonVisibility();
});

export function updateButtonVisibility() {
  // const isLoggedIn = !!localStorage.getItem('accessToken');

  if (AuthServices.getAccessToken()) {
    console.log(AuthServices.getAccessToken());
    document.getElementById('login-modal-btn').style.display = 'none';
    document.getElementById('register-modal-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
    console.log(document.getElementById('logout-btn'));
  } else {
    document.getElementById('logout-btn').style.display = 'none';
  }
}

document.getElementById('logout-btn').addEventListener('click', function () {
  localStorage.removeItem('accessToken');
  updateButtonVisibility();
  window.location.reload();
});
