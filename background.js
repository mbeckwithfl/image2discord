chrome.contextMenus.onClicked.addListener(function(info) { 
 //get the srcURL of the image that was right-clicked
  const imageSrcUrl = info.srcUrl
 //get the webhook URL that was set to the context menu item on creation
  const webhookurl =info.menuItemId
 //an object in the format for Discord API, containing the srcURL
    const msg ={ 
      "embeds": [{
        "image": {
          "url": imageSrcUrl
        }
      }]
    }
  //send via Fetch API to the the webhookURL of the context menu item that was clicked.
  fetch(webhookurl + "?wait=true", 
  {"method":"POST", 
  "headers": {"content-type": "application/json"},
  "body": JSON.stringify(msg)})
})
