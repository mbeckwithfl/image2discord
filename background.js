chrome.contextMenus.onClicked.addListener( async function(info) {
  
  const id = "https://discord.com/api/webhooks/933803837893017610/i0DG5XtYl_fQrmapWDLqTF9jEJ5U5XfKkqSRbkQ5gxtQ3KQr9sgSlq2o6B8xNnUSe3OQ"
    chrome.contextMenus.remove({
        menuItemId: id,
    },
  console.log(id),
  console.log(info.menuItemId)
    )
  
  // console.log(info.menuItemId)  
  // const imgSrcUrl = info.srcUrl
  //   const whurl =info.menuItemId
  //   const msg ={ 
  //     "embeds": [{
  //       "image": {
  //         "url": imgSrcUrl
  //       }
  //     }]
  //   }
  // fetch(whurl + "?wait=true", 
  // {"method":"POST", 
  // "headers": {"content-type": "application/json"},
  // "body": JSON.stringify(msg)})
})