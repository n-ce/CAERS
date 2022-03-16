
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
          list.innerHTML = `${data[i].name}<br>${data[i].post}<br>${data[i].salary}<br>`;
        }
        document.getElementById('list').appendChild(list);
      }
    })
    .catch(function(err) {
      console.log('error: ' + err);
    });
}
