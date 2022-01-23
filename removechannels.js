function removeOne(){
    const id = document.getElementById('webhookforRemoval').value
    chrome.contextMenus.remove(id)
    alert("Channel removed!")
}
function removeAll(){
    chrome.contextMenus.removeAll()
    alert("All channels removed!")
}
document.getElementById('removeonechannel').onclick = removeOne
document.getElementById('removeallchannels').onclick = removeAll