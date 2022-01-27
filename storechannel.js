function channelAdd(){
  //Get desired name and webhook from HTML UI
  channelNameInput = document.getElementById('channelname').value
  webhookInput = document.getElementById('webhookurl').value
  //Set the name and webhook to an object, that also includes the context when the menu item should pop (images)
  contextMenuItem = {
    title: channelNameInput,
    id: webhookInput,
    contexts: ["image"]
  }
  //create the contextmenuitem
  chrome.contextMenus.create(contextMenuItem)
  //clear the forms and alert if improper information was input
  function clear(data) {
    document.getElementById("channelname").value = data;
    document.getElementById("webhookurl").value = data;
  }  
  if(webhookInput.length == 0 && channelNameInput.length == 0){
    alert("Please input a channel name & a webhook URL.")
    return
  } else if (channelNameInput.length > 0 && webhookInput.length == 0) {
    alert("Please enter a Discord webhook URL")
    return
  } else if (webhookInput.length != 120){
    alert("That's not a Discord webhook.")
  }else if (webhookInput.length = 120){
    alert("Channel added!")
  }
clear("")
}
document.getElementById('storechannel').onclick = channelAdd
