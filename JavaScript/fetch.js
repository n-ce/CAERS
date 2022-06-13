const ul = document.getElementById('list');

let parse = (fileName) => {
  fetch("../Databases/" + fileName + ".json")
    .then(res => res.json())
    .then(data =>
    {
      ul.innerHTML = null;
      for (var i = 0; i < data.length; i++) {
        var list = document.createElement("li");
        if (fileName == 'testimonials') {
          list.innerHTML = `<u>${data[i].name}</u><br>"${data[i].quote}"`;
          document.getElementById('list2').appendChild(list);
        }
        else {
          list.innerHTML =
            `<hgroup>
          <h3>${data[i].name}</h3>
          <h4><br>
          Post : ${data[i].post}<br>
          Age Limit : ${data[i].agelimit}<br>
          Salary : ${data[i].salary}<br>
          Location : ${data[i].location}<br>
          </h4>
          </hgroup>`;
          ul.appendChild(list);
        }
      }
    });
}

// list collapse strategy

for (let j = 5; j < 17; j++)
  document.querySelectorAll('li')[j].addEventListener("click", () => {
    document.getElementById('recommendations').style.opacity= '100%';
    location.href = '#recommendations';
    for (let k = 1; k < 4; k++)
      if (document.querySelectorAll('details')[k].hasAttribute('open') == true) {
        document.querySelectorAll('details')[k].toggleAttribute('open');
      }
  });
