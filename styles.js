:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a55eea;
  --background-color: #f8f9fe;
  --text-color: #2c3e50;
  --border-radius: 12px;
  --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(108, 92, 231, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(165, 94, 234, 0.1) 0%, transparent 20%);
}

.container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.logo-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  max-width: 200px;
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.categories-nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius);
  background-color: white;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin: 0.3rem;
  min-width: 100px;
  text-align: center;
}

.category-tab.active, .category-tab:hover {
  background: var(--gradient);
  color: white;
}

.catalog-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#searchInput {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(108, 92, 231, 0.2);
  font-size: 1rem;
  transition: all 0.3s ease;
}

#searchInput:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
}

.input-section, .output-section {
  padding: 1.5rem;
}

.code-item, .favorite-item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.save-btn {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background: var(--gradient);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.save-btn.saved {
  background: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

pre code {
  border-radius: var(--border-radius);
  padding: 1rem;
}

@media (max-width: 768px) {
  .categories-nav {
    gap: 0.8rem;
  }

  .category-tab {
    flex-grow: 0;
    min-width: calc(50% - 1rem);
  }
}
