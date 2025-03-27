document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Select the h1 element and change its text content
  const title = document.querySelector('h1');
  title.textContent = "Welcome to My HTML Adventure";

  // Add an event listener to the paragraph to change its color on click
  const paragraph = document.querySelector('p');
  paragraph.addEventListener('click', function() {
    paragraph.style.color = 'blue';
  });

  // Log a message when the table is clicked
  const table = document.querySelector('table');
  table.addEventListener('click', function() {
    console.log('Table clicked!');
  });
});
