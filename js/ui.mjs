// Display cats in a gallery grid
export function displayCatGallery(cats) {
  const gallery = document.getElementById('cat-gallery');
  gallery.innerHTML = ''; // Clear existing content

  cats.forEach(cat => {
    const catCard = createCatCard(cat);
    gallery.appendChild(catCard);
  });
}

// Create a single cat card element
function createCatCard(cat) {
  const card = document.createElement('div');
  card.className = 'cat-card';
  
  const img = document.createElement('img');
  img.src = cat.url;
  img.alt = 'Cat image';
  img.loading = 'lazy';
  
  card.appendChild(img);
  
  // Add breed info if available
  if (cat.breeds && cat.breeds.length > 0) {
    const breedName = document.createElement('p');
    breedName.textContent = cat.breeds[0].name;
    breedName.className = 'breed-name';
    card.appendChild(breedName);
  }
  
  return card;
}

// Display breed options in dropdown
export function displayBreedOptions(breeds) {
  const select = document.getElementById('breed-select');
  select.innerHTML = '<option value="">All Breeds</option>';
  
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    select.appendChild(option);
  });
}

// Show loading spinner
export function showLoading(show = true) {
  const loader = document.getElementById('loading');
  loader.style.display = show ? 'block' : 'none';
}

// Show error message
export function showError(message) {
  const errorDiv = document.getElementById('error-message');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 5000);
}

// Update pagination buttons
export function updatePagination(currentPage) {
  document.getElementById('current-page').textContent = currentPage + 1;
}