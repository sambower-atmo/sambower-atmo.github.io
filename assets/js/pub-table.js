document.addEventListener("DOMContentLoaded", function() {
  fetch('impacts-current.json')
    .then(response => response.json())
    .then(publications => {
        // Use the 'publications' data to populate the HTML
        const container = document.getElementById('publicationsContainer');
        publications.forEach(publication => {
            const wrapper = document.createElement('div');
            wrapper.className = 'publication-wrapper';

            const link = document.createElement('a');
            link.href = publication.Link;
            link.target = "_blank";

            const img = document.createElement('img');
            img.src = publication.imageURL;
            img.alt = 'Image for ' + publication.Title;

            const infoContainer = document.createElement('div');
            infoContainer.className = 'info-container';

            const year = document.createElement('div');
            year.className = 'year';
            year.textContent = publication.Year;

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = publication.Title;

            link.appendChild(img);
            wrapper.appendChild(link);
            infoContainer.appendChild(year);
            infoContainer.appendChild(title);
            wrapper.appendChild(infoContainer);
            container.appendChild(wrapper);
        });
    })
    .catch(error => console.error('Error loading the JSON file:', error));
});
