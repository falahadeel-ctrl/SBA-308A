// api key="live_u4ROrppkt7vI6pL7Loufgrm1xxlysew23dfHzzcv4pcbLmIVqor5vyjZo5XsaV0z"
// Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_u4ROrppkt7vI6pL7Loufgrm1xxlysew23dfHzzcv4pcbLmIVqor5vyjZo5XsaV0z'
// ducumentation:https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
import { 
  getRandomCats, 
  getCatsByBreed, 
  getAllBreeds,
  getCatsPaginated 
} from './api.mjs';

import { 
  displayCatGallery, 
  displayBreedOptions,
  showLoading,
  showError,
  updatePagination
} from './ui.mjs';

// State management
let currentPage = 0;
const CATS_PER_PAGE = 9;

// Initialize app
async function initApp() {
  try {
    showLoading(true);
    
    // Load breeds for dropdown
    const breeds = await getAllBreeds();
    displayBreedOptions(breeds);
    
    // Load initial cats
    const cats = await getRandomCats(CATS_PER_PAGE);
    displayCatGallery(cats);
    
    showLoading(false);
  } catch (error) {
    showLoading(false);
    showError('Failed to load cats. Please try again.');
  }
}

// Search by breed
document.getElementById('breed-select').addEventListener('change', async (e) => {
  const breedId = e.target.value;
  
  try {
    showLoading(true);
    
    let cats;
    if (breedId) {
      cats = await getCatsByBreed(breedId, CATS_PER_PAGE);
    } else {
      cats = await getRandomCats(CATS_PER_PAGE);
    }
    
    displayCatGallery(cats);
    showLoading(false);
  } catch (error) {
    showLoading(false);
    showError('Failed to search cats. Please try again.');
  }
});

// Pagination: Next button
document.getElementById('next-btn').addEventListener('click', async () => {
  currentPage++;
  await loadPagedCats();
});

// Pagination: Previous button
document.getElementById('prev-btn').addEventListener('click', async () => {
  if (currentPage > 0) {
    currentPage--;
    await loadPagedCats();
  }
});

// Load cats for current page
async function loadPagedCats() {
  try {
    showLoading(true);
    const cats = await getCatsPaginated(currentPage, CATS_PER_PAGE);
    displayCatGallery(cats);
    updatePagination(currentPage);
    showLoading(false);
  } catch (error) {
    showLoading(false);
    showError('Failed to load page. Please try again.');
  }
}

// Random cats button
document.getElementById('random-btn').addEventListener('click', async () => {
  try {
    showLoading(true);
    const cats = await getRandomCats(CATS_PER_PAGE);
    displayCatGallery(cats);
    showLoading(false);
  } catch (error) {
    showLoading(false);
    showError('Failed to load random cats. Please try again.');
  }
});

// Start the app
initApp();
