const apiKey = https: newsapi.org/v2/everything?q=apple&from=2025-01-24&to=2025-01-24&sortBy=popularity&apiKey=API_KEY
const newsContainer = document.getElementById('newsCards');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');


async function fetchTopHeadlines() {
  const response = await fetch(https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey});
  const data = await response.json();
  displayNews(data.articles);
}


async function fetchNews(query) {
  const response = await fetch(https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey});
  const data = await response.json();
  displayNews(data.articles);
}


function displayNews(articles) {
  newsContainer.innerHTML = '';
  if (articles.length === 0) {
    newsContainer.innerHTML = '<p>No articles found.</p>';
    return;
  }

  articles.forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('newsCard');
    newsCard.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300x150'}" alt="News Image">
      <div class="content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      </div>
    `;
    newsContainer.appendChild(newsCard);
  });
}


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    fetchNews(query);
  }
});


fetchTopHeadlines();