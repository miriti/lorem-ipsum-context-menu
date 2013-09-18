function onMessage(request, sender, sendResponse) {
   $(':focus').val( $(':focus').val() + request.text );
}

chrome.runtime.onMessage.addListener(onMessage);