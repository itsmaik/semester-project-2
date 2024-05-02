export function createAuctionCard(listing) {
  const imageUrl =
    listing.media && listing.media.length > 0
      ? listing.media[0].url
      : 'https://source.unsplash.com/featured/?furniture';
  const imageAlt =
    listing.media && listing.media.length > 0
      ? listing.media[0].alt
      : 'Default Image';

  return `
      <div class="col-md-4 mt-3 mb-3">
          <div class="card auction-card">
              <img src="${imageUrl}" class="card-img-top" alt="${imageAlt}">
              <div class="card-body">
                  <h5 class="card-title">${listing.title}</h5>
                  <p class="card-text">${listing.description}</p>
                  <a href="#" class="btn btn-primary">More Info</a>
              </div>
          </div>
      </div>
  `;
}