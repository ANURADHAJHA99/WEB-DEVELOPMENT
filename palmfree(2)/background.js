// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
// {
//     sendResponse();
//     alert(
//         "PalmAlert");
// });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    // if (request.type == "worktimer-notification")
    //   chrome.notifications.create('worktimer-notification', request.options, function() { });

    
var options = {
    type: "basic", 
    title: "palm free",
    message: "hey, you are killing an orangutan by buying this product",
    iconUrl: "icon.png" ,
    // imageUrl: "logo.jpeg"
};
chrome.notifications.create(options, callback);{
    setTimeout(function(){
        chrome.notifications.clear(notificationId, function(){});
      }, 2000);
}
console.log('popup done#');
function callback() {
    console.log ('Popup done!');
}
    sendResponse();
});


// chrome.notifications.onButtonClicked.addListener(chrome.tabs.create({ url: "https://github.com/HemabhKamboj/PalmFree" }));

// function replyBtnClick { 
//     chrome.tabs.create({ url: "https://github.com/HemabhKamboj/PalmFree" });

// }

chrome.notifications.onClicked.addListener(function(notificationId, byUser) {
chrome.tabs.create({url: "https://www.github.com/HemabhKamboj/PalmFree"}) })