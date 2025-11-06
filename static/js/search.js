// 简单的客户端搜索功能
(function() {
  'use strict';
  
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput) return;
  
  // 搜索数据（从页面中提取）
  const searchData = {
    publications: Array.from(document.querySelectorAll('.pub')).map(pub => ({
      title: pub.querySelector('.title')?.textContent || '',
      authors: pub.querySelector('.authors')?.textContent || '',
      venue: pub.querySelector('.tag')?.textContent || '',
      element: pub
    })),
    awards: Array.from(document.querySelectorAll('#awards li')).map(award => ({
      text: award.textContent,
      element: award.closest('section')
    })),
    hobbies: Array.from(document.querySelectorAll('#hobbies li')).map(hobby => ({
      text: hobby.textContent,
      element: hobby.closest('section')
    }))
  };
  
  function search(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    const q = query.toLowerCase();
    const results = [];
    
    // 搜索论文
    searchData.publications.forEach(pub => {
      if (pub.title.toLowerCase().includes(q) || 
          pub.authors.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q)) {
        results.push({
          type: 'Publication',
          title: pub.title,
          preview: pub.authors,
          element: pub.element
        });
      }
    });
    
    // 搜索获奖和兴趣
    [...searchData.awards, ...searchData.hobbies].forEach(item => {
      if (item.text.toLowerCase().includes(q)) {
        results.push({
          type: 'Other',
          title: item.text.substring(0, 50),
          element: item.element
        });
      }
    });
    
    displayResults(results);
  }
  
  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }
    
    searchResults.innerHTML = results.map(r => `
      <div class="search-result" onclick="scrollToElement(this)" data-element="${r.element.id || ''}">
        <div class="search-result-type">${r.type}</div>
        <div class="search-result-title">${r.title}</div>
        ${r.preview ? `<div class="search-result-preview">${r.preview}</div>` : ''}
      </div>
    `).join('');
  }
  
  // 防抖搜索
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => search(e.target.value), 300);
  });
  
  // 滚动到元素
  window.scrollToElement = function(elm) {
    const elementId = elm.getAttribute('data-element');
    if (elementId) {
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
})();

