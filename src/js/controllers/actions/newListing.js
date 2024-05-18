import { ListingsServices } from '../../services/ListingsServices.js';

export async function newListingController() {
  const newListingForm = document.querySelector('#newListingModal form');
  const title = newListingForm.querySelector('input#title');
  const description = newListingForm.querySelector('input#description');
  const image = newListingForm.querySelector('input#image-url');
  const endsAt = newListingForm.querySelector('input#event-date');

  newListingForm
    .querySelector('button')
    .addEventListener('click', async (e) => {
      e.preventDefault();

      if (!title && !endsAt) {
        alert('Create a title and set an end date!');
        return;
      }

      const newListingData = {
        title: title.value ?? '',
        description: description.value ?? '',
        media: image.value
          ? [
              {
                url: image.value,
                alt: 'Listing Image',
              },
            ]
          : [],
        endsAt: endsAt.value ?? new Date(),
      };

      await ListingsServices.createListing(newListingData);
      window.location.reload();
    });
}
