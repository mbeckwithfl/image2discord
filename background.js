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
    //webhook url variable. This will be updated so webhooks can be input through the extension UI.
    console.log(info.srcUrl)
    const whurl ="https://discord.com/api/webhooks/930195632675766343/EYo0SQV21fA9rxETrUZ8bYTdh4OW-5uTjLgnDASV-piis5aYPuWKZOGente549yovw1n"
    const testUrl = info.srcUrl
    const msg ={ 
      "embeds": [{
        "image": {
          "url": testUrl
        }
      }]
    }
//Post to webhook via fetch API
  fetch(whurl + "?wait=true", 
  {"method":"POST", 
  "headers": {"content-type": "application/json"},
  "body": JSON.stringify(msg)})
  }
});
