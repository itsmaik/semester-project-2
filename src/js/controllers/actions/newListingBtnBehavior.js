import * as bootstrap from 'bootstrap';
import { AuthServices } from '../../services/AuthServices.js';

document.addEventListener('DOMContentLoaded', function () {
  newListingBtnBehavior();
});

export function newListingBtnBehavior() {
  const newListingBtn = document.querySelectorAll(".new-btn");
  
  newListingBtn.forEach(newBtn => {
    if (AuthServices.getAccessToken()) {
      newBtn.removeAttribute('data-bs-toggle');
      newBtn.setAttribute('data-bs-target', '#newListingModal');
    } else {
      newBtn.removeAttribute('data-bs-toggle');
      newBtn.setAttribute('data-bs-target', '#loginModal');
    }

    newBtn.addEventListener("click", function() {
      const targetModal = newBtn.getAttribute('data-bs-target');
      const targetModalElement = document.querySelector(targetModal);
      if (targetModalElement) {
        const modal = new bootstrap.Modal(targetModalElement);
        modal.show();
      } else {
        console.error("Modal element not found:", targetModal);
      }
    });
  });
}

document.querySelector('.logout-btn').addEventListener('click', function () {
  localStorage.clear();
  newListingBtnBehavior();
  window.location.href = '/';
});
