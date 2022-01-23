chrome.contextMenus.onClicked.addListener(function(info) {
  
  const id = info.menuItemId
  console.log(info.menuItemId)  
  const imgSrcUrl = info.srcUrl
    const whurl =info.menuItemId
    const msg ={ 
      "embeds": [{
        "image": {
          "url": imgSrcUrl
        }
      }]
    }
  fetch(whurl + "?wait=true", 
  {"method":"POST", 
  "headers": {"content-type": "application/json"},
  "body": JSON.stringify(msg)})
})