function renderUrl(redirectUrl){
  if(redirectUrl === ""){
    document.getElementById('link').innerHTML = "<p>Sorry, no jobs here!</p>";
  } else{
  document.getElementById('link').innerHTML = '<a target="_blank" href="'+redirectUrl+'">'+redirectUrl+'</a>';
  }
}

chrome.extension.onRequest.addListener(function(link){
  renderUrl(link);
});

window.onload = function(){
  chrome.tabs.executeScript({file:'findlinks.js', allFrames: true});
};
