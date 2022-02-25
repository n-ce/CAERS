function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML = '<a href=\"https://youtube.com/' + data[i].URL + '\">' + data[i].Name + '</a>';
    addlist[a].appendChild(list);
  }
}

function parse(title) {
  return fetch("../Databases/" + title + ".json").then(function(response) {
    return response.json();
  }).then(function(data) {
    appendData(data);
  }).catch(function(err) {
    console.log('error: ' + err);
  });;
}