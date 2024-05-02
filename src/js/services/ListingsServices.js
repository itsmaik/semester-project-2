import { fetchWithHeaders } from '../api/header/header';
import { BASE_API_URL } from '../config/config';

export const ListingsServices = {
  async createListing(ListingData) {
    const response = await fetchWithHeaders(
      `${BASE_API_URL}/auction/listings`,
      'POST',
      ListingData,
    );
    return response;
  },

  async getAllListings() {
    const response = await fetchWithHeaders(
      `${BASE_API_URL}/auction/listings`,
      'GET',
    );
    return response.data;
  },

  async getListingById(listingId) {
    const response = await fetchWithHeaders(
      `${BASE_API_URL}/auction/listings/${listingId}`,
      'GET',
    );
    return response.data;
  },

  async updateListing(listingId, listingData) {
    const response = await fetchWithHeaders(
      `${BASE_API_URL}/auction/listings/${listingId}`,
      'PUT',
      listingData,
    );
    return response.data;
  },

  async deleteListing(listingId) {
    const response = await fetchWithHeaders(
      `${BASE_API_URL}/auction/listings/${listingId}`,
      'DELETE',
    );
    return response.data;
  },
};
