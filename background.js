chrome.runtime.onInstalled.addListener(() => {  
  const listofchannelnames = []
  const listofwebhooks = []
  chrome.storage.sync.set({namelistforadding : listofchannelnames})
  chrome.storage.sync.set({whlistforadding : listofwebhooks})
  });
  //add listener for clicking context menu item.
chrome.contextMenus.onClicked.addListener(function(info) {
   //Define which context menu item this applies to.
  if (info.menuItemId == "image-2-discord") {
    //webhook url variable. This will be updated so webhooks can be input through the extension UI.
    const whurl ="https://discord.com/api/webhooks/931459626707320844/HfTswb5JWehvhQrYNaDCtN9k_a5wnf5gQpV6dng_1a0WLYc3lptnKkPGmR0VYJt9y3vb"
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

