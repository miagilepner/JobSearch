var linkToSend = "";
var l = [].slice.apply(document.getElementsByTagName('a'));
for(var i=0; i<l.length; i++){
  var link = l[i].href;
  if(link.search("(job.|Job.|career.|Career.)")!=-1){
  linkToSend=link;
  break;
  }
}
chrome.extension.sendRequest(linkToSend); 
