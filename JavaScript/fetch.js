
function parse(Y) {
  console.log(Y);
  fetch("../Databases/" + Y + ".json")
    .then(res => res.json())
    .then(data =>
    {
      for (var i = 0; i < data.length; i++) {
        var list = document.createElement("li");
        if (Y == 'testimonials') {
          list.innerHTML = `<u>${data[i].name}</u><br><i>"${data[i].quote}"</i>`;
        }
        else {
          list.innerHTML = `<hgroup><h2>${data[i].name}</h2><h3><br>${data[i].post}<br>${data[i].salary}<br></h3></hgroup>`;
        }
        document.getElementById('list').appendChild(list);
      }
    })
    .catch(function(err) {
      console.log('error: ' + err);
    });
}
