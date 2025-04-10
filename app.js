import hljs from 'highlight.js';
import { codeDatabase } from './database.js';

class CodeCatalog {
  constructor() {
    // DOM Elements
    this.searchInput = document.getElementById('searchInput');
    this.resultsContainer = document.getElementById('resultsContainer');
    this.favoritesList = document.getElementById('favoritesList');
    this.tabs = document.querySelectorAll('.category-tab');

    // State
    this.currentCategory = 'html';
    this.favorites = new Set(this.loadFavorites());

    // Event Listeners
    this.initEventListeners();

    // Initial render
    this.renderResults(this.currentCategory);
    this.renderFavorites();
  }

  initEventListeners() {
    // Search input event
    this.searchInput.addEventListener('input', () => 
      this.renderResults(this.currentCategory, this.searchInput.value)
    );

    // Category tabs event
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.updateActiveTab(tab);
        this.currentCategory = tab.dataset.category;
        this.searchInput.value = '';
        this.renderResults(this.currentCategory);
        this.renderFavorites();
      });
    });
  }

  updateActiveTab(activeTab) {
    this.tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
  }

  renderResults(category, query = '') {
    this.resultsContainer.innerHTML = '';
    const codes = this.filterCodes(category, query);
    
    codes.forEach(code => {
      const div = this.createCodeItemElement(code, category);
      this.resultsContainer.appendChild(div);
    });

    this.applyHighlighting();
  }

  filterCodes(category, query) {
    return codeDatabase[category].filter(code =>
      code.name.toLowerCase().includes(query.toLowerCase()) ||
      code.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  createCodeItemElement(code, category) {
    const div = document.createElement('div');
    div.className = 'code-item';
    
    const isFavorite = this.favorites.has(code.name);
    
    div.innerHTML = `
      <h4>${code.name}</h4>
      <p>${code.description}</p>
      <pre><code class="language-${category}">${code.example.trim()}</code></pre>
      <button class="save-btn ${isFavorite ? 'saved' : ''}" data-name="${code.name}">
        ${isFavorite ? 'Salvo' : 'Salvar'}
      </button>
    `;
    
    const saveButton = div.querySelector('.save-btn');
    saveButton.addEventListener('click', () => this.toggleFavorite(code, saveButton));
    
    return div;
  }

  toggleFavorite(code, button) {
    if (this.favorites.has(code.name)) {
      this.favorites.delete(code.name);
      button.classList.remove('saved');
      button.textContent = 'Salvar';
    } else {
      this.favorites.add(code.name);
      button.classList.add('saved');
      button.textContent = 'Salvo';
    }
    
    this.renderFavorites();
    this.saveFavorites();
  }

  renderFavorites() {
    this.favoritesList.innerHTML = '';
    const storedFavorites = codeDatabase[this.currentCategory]
      .filter(code => this.favorites.has(code.name));
    
    storedFavorites.forEach(code => {
      const div = document.createElement('div');
      div.className = 'favorite-item';
      div.innerHTML = `
        <h4>${code.name}</h4>
        <pre><code class="language-${this.currentCategory}">${code.example.trim()}</code></pre>
      `;
      this.favoritesList.appendChild(div);
    });

    this.applyHighlighting();
  }

  applyHighlighting() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }

  loadFavorites() {
    return JSON.parse(localStorage.getItem('codeFavorites') || '[]');
  }

  saveFavorites() {
    localStorage.setItem('codeFavorites', JSON.stringify([...this.favorites]));
  }
}

// Initialize the application
new CodeCatalog();
