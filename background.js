//create a context menu on installation that appears when right-clicking an image
chrome.runtime.onInstalled.addListener(() => {  
  chrome.contextMenus.create({
      title: "Image2Discord",
      id: "image-2-discord",
      contexts: ["image"],
    });
  });
  
  //add listener for clicking context menu item.
chrome.contextMenus.onClicked.addListener(function(info) {
   //Define which context menu item this applies to.
  if (info.menuItemId == "image-2-discord") {
    //create webhook url variable. This will be updated so webhooks can be input through the chrome extension UI.
    const whurl ="https://discord.com/webhook/goes/here"
    //create message variable. This will be updated so message variable is created on click.
    const msg = {
    "content": "https://image/URL/goes/here"
  }
//manifest V3 uses fetch() API where V2 used XMLHttpRequest. This also converts the JS object const msg to a JSON string for interpretation by the webhook.
  fetch(whurl + "?wait=true", {
    "method":"POST", 
    "headers": {"content-type": "application/json"}, 
    "body": JSON.stringify(msg)}
       )}
});
//we are talking to Discord!!!
