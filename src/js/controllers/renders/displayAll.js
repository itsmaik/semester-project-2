import { ListingsServices } from '../../services/ListingsServices';
import { createAuctionCard } from '../templates/auctionCard';

async function displayAllListings() {
  const auctionContainer = document.getElementById('auction-container');
  if (!auctionContainer) return;

  const MAX_LISTINGS = 9; // Maximum number of listings to display

  try {
    const listings = await ListingsServices.getAllListings();
    console.log(listings);
    if (listings && listings.length > 0) {
      const limitedPosts = listings.slice(0, MAX_LISTINGS); // Limit the number of listings
      const postsHtml = limitedPosts
        .map((listing) => createAuctionCard(listing))
        .join('');
      auctionContainer.innerHTML = postsHtml;
    } else {
      auctionContainer.innerHTML = '<p>No listings found.</p>';
    }
  } catch (error) {
    console.error('Error displaying listings:', error);
    auctionContainer.innerHTML = '<p>Error loading listings.</p>';
  }
}

document.addEventListener('DOMContentLoaded', displayAllListings);
