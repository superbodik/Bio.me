
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    });
  
    const techGrid = document.getElementById('tech-grid');
    const techs = [
      'Unity', 'C++', 'C#', 'React', 'Angular', 
      'Python', '3D Graphics', 'Docker', 'Git'
    ];
  
    techs.forEach(tech => {
      const techItem = document.createElement('div');
      techItem.className = 'tech-item';
      techItem.textContent = tech;
      techGrid.appendChild(techItem);
    });
  });