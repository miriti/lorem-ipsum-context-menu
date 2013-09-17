function onMessage(request, sender, sendResponse) {
   $(':focus').val( $(':focus').val() + request.text );
}

console.log('hi, i am here again!!');

chrome.runtime.onMessage.addListener(onMessage);