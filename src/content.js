/*!
 * Lorem Ipsum Context Menu
 *
 * Includes jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes jQuery FancyBox v1.3.4
 * http://fancybox.net/
 *
 */

function onMessage(request, sender, sendResponse) {
    if(typeof(request["action"]) != "undefined") {
        if(request["action"] == "show")
        {
            $.fancybox(request["text"]);
        }else if(request["action"] == "insert") {
            var element = $(':focus');
            $(element).val( $(element).val() + request["text"] );
        }
    }
}

chrome.runtime.onMessage.addListener(onMessage);