function fetchPage(name) {
  fetch("Pages/" + name + ".html")
    .then(response => response.text())
    .then(html => {
      document.getElementById('root').innerHTML = html;
    });
}
fetchPage('landingpage');