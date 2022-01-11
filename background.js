//create a context menu on installation that appears when right-clicking an image
chrome.runtime.onInstalled.addListener(() => {  
  
  chrome.contextMenus.create({
      title: "Image2Discord",
      id: "image-2-discord",
      contexts: ["image"],
    });
  });
  
  //add listener for clicking context menu item. Define which context menu item this applies to.
  //open a new chrome tab to google as a test
  chrome.contextMenus.onClicked.addListener(function(info) {

    if (info.menuItemId === "image-2-discord") {

      chrome.tabs.create({url: "https://www.google.com"})
  
  }
})