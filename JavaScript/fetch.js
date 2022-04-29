const ul = document.getElementById('list');

function parse(Y) {
  fetch("../Databases/" + Y + ".json")
    .then(res => res.json())
    .then(data =>
    {
      ul.innerHTML = null;
      for (var i = 0; i < data.length; i++) {
        var list = document.createElement("li");
        if (Y == 'testimonials') {
          list.innerHTML = `<u>${data[i].name}</u><br><i>"${data[i].quote}"</i>`;
        }
        else {
          list.innerHTML =
            `<hgroup>
          <h2>${data[i].name}</h2>
          <h3><br>
          ${data[i].post}<br>
          ${data[i].salary}<br>
          ${data[i].location}<br>
          </h3>
          </hgroup>`;
        }
        ul.appendChild(list);
      }
    });
}