var head = document.querySelector('#titleSection')
var head2 = head.querySelector('h1')
var head3 = head2.querySelector('span')
var span_Text = document.getElementById("productTitle").innerText;
if(span_Text.includes("Cadbury")){

      console.log("hello")
    //chrome.runtime.sendMessage("Show notifcation");{
    //     console.log("message sent");
    //   }; 
    // chrome.extension.sendMessage({}, function(response) {
    //     //code to initialize my extension
    // });
    
    //code to send message to open notification. This will eventually move into my extension logic
    chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Heinz")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Bingo")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Be Natural")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    
if(span_Text.includes("Kellogs")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Special K")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Fanta")){

    console.log("hello")
  //chrome.runtime.sendMessage("Show notifcation");{
  //     console.log("message sent");
  //   }; 
  // chrome.extension.sendMessage({}, function(response) {
  //     //code to initialize my extension
  // });
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    
if(span_Text.includes("Mountain Dew")){

    console.log("hello")
  
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    
if(span_Text.includes("Coca-Cola")){

    console.log("hello")
  
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("Mountain Dew")){

    console.log("hello")
  
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    

if(span_Text.includes("7Up")){

    console.log("hello")
  
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    
if(span_Text.includes("Maggi")){

    console.log("hello")
  
  
  //code to send message to open notification. This will eventually move into my extension logic
  chrome.runtime.sendMessage({type: "notification" });
}    
// options: { 
//     type: "basic", 
//     iconUrl: chrome.extension.getURL("icon.png"),
//     title: "Test",
//     message: "Test"
// }