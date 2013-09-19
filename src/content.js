/*!
 * Lorem Ipsum Context Menu
 *
 * Includes jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 */
(function () {
    function onMessage(request, sender, sendResponse) {
        console.log('onMessage');
        var element = $(':focus');
        $(element).val( $(element).val() + request.text );
    }

    chrome.runtime.onMessage.addListener(onMessage);
})();
