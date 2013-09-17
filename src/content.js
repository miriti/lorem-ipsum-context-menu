function onMessage(request, sender, sendResponse) {
   $(':focus').val(request.text);
   sendResponse({ inserted: true });
}

console.log('hi, i am here again!!');

chrome.runtime.onMessage.addListener(onMessage);