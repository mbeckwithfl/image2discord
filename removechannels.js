function removeOneChannel(){
    //To remove context menu item, Chrome API needs the MenuItemID of the context menu item from when it was created.
    //Input the webhookURL of the channel you want to remove
    const idOfChannel = document.getElementById('webhookforRemoval').value
    chrome.contextMenus.remove(idOfChannel)
    alert("Channel removed!")
}
//Nothing needs to be passed to remove all the context menu items.
function removeAll(){
    chrome.contextMenus.removeAll()
    alert("All channels removed!")
}
/Tie the functions to the appropriate HTML buttons
document.getElementById('removeonechannel').onclick = removeOneChannel
document.getElementById('removeallchannels').onclick = removeAll
