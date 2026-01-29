// import axios from 'axios';

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/esm/axios.min.js';

const API_KEY = 'live_u4ROrppkt7vI6pL7Loufgrm1xxlysew23dfHzzcv4pcbLmIVqor5vyjZo5XsaV0z'; // From your Cat API account
const BASE_URL = 'https://api.thecatapi.com/v1';

// Create axios instance with default config
const catAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY
  }
});

// GET: Fetch random cat images
export async function getRandomCats(limit = 10) {
  try {
    const response = await catAPI.get('/images/search', {
      params: {
        limit: limit,  
        size: 'med'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching random cats:', error);
    throw error;
  }
}

// GET: Search cats by breed
export async function getCatsByBreed(breedId, limit = 10) {
  try {
    const response = await catAPI.get('/images/search', {
      params: {
        breed_ids: breedId,
        limit: limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cats by breed:', error);
    throw error;
  }
}

// GET: Fetch all breeds (for search/filter feature)
export async function getAllBreeds() {
  try {
    const response = await catAPI.get('/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
}

// GET: Search cats by category
export async function getCatsByCategory(categoryId, limit = 10) {
  try {
    const response = await catAPI.get('/images/search', {
      params: {
        category_ids: categoryId,
        limit: limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cats by category:', error);
    throw error;
  }
}

// GET: Fetch categories
export async function getCategories() {
  try {
    const response = await catAPI.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// GET: Paginated gallery with page number
export async function getCatsPaginated(page = 0, limit = 9) {
  try {
    const response = await catAPI.get('/images/search', {
      params: {
        limit: limit,
        page: page,
        order: 'DESC'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching paginated cats:', error);
    throw error;
  }
}