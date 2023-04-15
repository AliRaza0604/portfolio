// Get the project list and filter select element
const projectList = document.querySelector('#project-list');
const filterSelect = document.querySelector('#tech-filter');

// Get the project details elements
const projectDetailsOverlay = document.querySelector('#project-details-overlay');
const projectDetails = document.querySelector('#project-details');
const projectDetailsTitle = document.querySelector('#project-details-title');
const projectDetailsImage = document.querySelector('#project-details-image');
const projectDetailsTechnology = document.querySelector('#project-details-technology');
const projectDetailsDescription = document.querySelector('#project-details-description');
const projectDetailsLink = document.querySelector('#project-details-link');
const closeDetailsButton = document.querySelector('#close-details-button');

// Add event listener to filter select element
filterSelect.addEventListener('change', () => {
  const selectedTech = filterSelect.value;
  const projects = projectList.querySelectorAll('li');

  projects.forEach(project => {
    const tech = project.getAttribute('data-tech');

    if (selectedTech === 'all' || selectedTech === tech) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});


