async function channelAdd(){
  channelNameInput = document.getElementById('channelname').value
  webhookInput = document.getElementById('webhookurl').value
  chrome.storage.sync.set({channelTitle: channelNameInput})
  chrome.storage.sync.set({webHook: webhookInput})
  var thing1 = new Promise(function(resolve, reject){
    chrome.storage.sync.get(['channelTitle'], function(info){
        resolve(info.channelTitle);
    })
  });
  var thing2 = new Promise(function(resolve, reject){
    chrome.storage.sync.get(['webHook'], function(info){
        resolve(info.webHook);
    })
  });
  const nameyName = await thing1
  const hookyHook = await thing2
  console.log(nameyName)
  console.log(hookyHook)

  chrome.contextMenus.create({
    title: nameyName,
    id: nameyName,
    contexts: ["image"], 
  })
 
  var thing3 = new Promise(function(resolve, reject){
    chrome.storage.sync.get(['namelistforadding'], function(info){
           resolve(info.namelistforadding); 
    })
  });
  var thing4 = new Promise(function(resolve, reject){
    chrome.storage.sync.get(['whlistforadding'], function(info){
           resolve(info.whlistforadding); 
    })
  });
  const listyList1 = await thing3
  const listyList2 = await thing4
  console.log(listyList1)
  console.log(listyList2)

}
document.getElementById('storechannel').onclick = channelAdd

  // const namelist = []
  // const hooklist = []
  // namelist.push(nameyName)
  // hooklist.push(hookyHook)
  // chrome.storage.sync.set({listofnames: namelist})
  // chrome.storage.sync.set({listofhooks: hooklist})

  // var thing3 = new Promise(function(resolve, reject){
  //   chrome.storage.sync.get(['listofnames'], function(info){
  //       resolve(info.listofnames);
  //   })
  // });
  
  // var thing4 = new Promise(function(resolve, reject){
  //   chrome.storage.sync.get(['listofhooks'], function(info){
  //       resolve(info.listofhooks);
  //   })
  // });

  // console.log (thing3)
  // console.log(thing4)

// async function channelAdd(){
//   webhookInput = document.getElementById('webhookurl').value
//   chrome.storage.sync.set({webHook: webhookInput})
  
//   chrome.storage.sync.get(['webHook'], function(info){
//     webHookString=info.webHook
//     console.log(webHookString)
//     })

// }

// async function mainFuction() {
  
//   var p = new Promise(function(resolve, reject){
//       chrome.storage.sync.get(['webHook'], function(info){
//           resolve(info.webHook);
//       })
//   });

//   const configOut = await p;
//   console.log(configOut);
// }


// function listTest(colorToAdd){
//   var colors = ["green", "yellow",]
//   colors.push(colorToAdd)
//   console.log(colors)




//   chrome.storage.sync.get(['webHook'], function(info){
//     let webHookString=info.webHook
//     console.log(webHookString)
//     return webHookString
//     })
// //debugging
// console.log(webHookString)




// function storechannel(){
//     function logger(){
//         console.log("Hello World!")
//     }
//     document.getElementById("storechannel").onclick = logger;
// }