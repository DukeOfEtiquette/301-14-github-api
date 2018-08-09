// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

function appendError(err){
  $('#results').append('<h1 style="color: red;">ERROR</h1>');
  appendData(err);
}

function appendData(data){
  for(var key in data){
    $('#results').append(`<p><strong>${key}</strong>: ${data[key]}</p>`);
  }
}

$(function(){
  let url = 'https://api.github.com/users/dukeofetiquette';
  let url2 = 'https://api.github.com/user';


});