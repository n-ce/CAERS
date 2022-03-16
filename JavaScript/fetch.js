function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML = `<u>${data[i].name}</u><br><i>"${data[i].quote}"</i>`;
    document.getElementById('list').appendChild(list);
  }
}

function parse(Y) {
  return fetch("../Databases/" + Y + ".json").then(function(response) {
    return response.json();
  }).then(function(data) {
    appendData(data);
  }).catch(function(err) {
    console.log('error: ' + err);
  });;
}
  
