export function createProfileCard(profile, loggedProfile) {
  const avatarUrl = profile.data.avatar
    ? profile.data.avatar.url
    : 'https://source.unsplash.com/featured/?profile';
  const avatarAlt = profile.data.avatar
    ? profile.data.avatar.alt
    : 'Default Image';
  const bannerUrl = profile.data.banner
    ? profile.data.banner.url
    : 'https://source.unsplash.com/featured/?landscape';
  const bannerAlt = profile.data.banner
    ? profile.data.banner.alt
    : 'Default Banner';
  const name = profile.data.name;
  const email = profile.data.email;
  const bio = profile.data.bio || '';
  const credits = profile.data.credits;

  return `
    <div class="container">
      <div class="card mb-3">
        <!-- Banner Image -->
        <img src="${bannerUrl}" class="card-img-top object-fit-cover" alt="${bannerAlt}" style="height: 200px;">

        <div class="card-body text-center">
          <!-- Avatar Image, centered and overlapping the banner -->
          <img src="${avatarUrl}" class="rounded-circle border border-5 border-white object-fit-cover" alt="${avatarAlt}" style="width: 150px; height: 150px; margin-top: -75px;">

          <!-- Profile Name -->
          <h5 class="card-title mt-2">${name}</h5>
          <!-- Email -->
          <p class="card-text">${email}</p>
          <!-- Bio -->
          <p class="card-text">${bio}</p>

          <!-- Conditional Rendering for Credits -->
          ${
            email === loggedProfile.email && name === loggedProfile.name
              ? `
              <p class="card-text fw-bold">Credits: ${credits}</p>
            `
              : ''
          }
          <!-- Action Buttons -->
          ${
            email === loggedProfile.email && name === loggedProfile.name
              ? `
            <div class="d-grid gap-2 d-flex justify-content-center mt-3">
              <button 
                id="edit-btn"
                class="btn btn-outline-primary px-lg-4 h-75 me-2"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                type="button"
              >
                Edit Profile
              </button>
              <button 
                id="new-btn"
                class="btn btn-primary px-lg-4 h-75 me-2"
                data-bs-toggle="modal"
                data-bs-target="#newListingModal"
                type="button"
              >
                New Listing
              </button>
            </div>
          `
              : ''
          }
        </div>
      </div>
    </div>
  `;
}
