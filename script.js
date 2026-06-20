function toggleProjects() {
  const extra = document.getElementById('extra-projects');
  const btn = document.getElementById('see-more-btn');

  if (extra.style.display === 'none') {
    extra.style.display = 'contents';
    btn.textContent = 'See less ↑';
  } else {
    extra.style.display = 'none';
    btn.textContent = 'See more projects ↓';
  }
}