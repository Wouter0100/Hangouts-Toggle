var muted = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == 'toggle') {
        muted = !muted;

        updateButton('.ha-w-P-y-Xi-f'); // Microphone
        updateButton('.ha-w-P-y-si-f'); // Webcam

        return true;
    }

    return false;
});

function updateButton(selector) {
    // If muted == true AND hangouts muted == true, do nothing.
    // If muted == false AND hangouts muted == false, do nothing.

    var button = document.querySelector(selector);

    // If muted == false AND hangouts muted == true, simulate click in Hangouts.
    if (button.parentElement.getAttribute('aria-pressed') == 'false' && muted) {
        simulateClick(button);
    }

    button = document.querySelector(selector); //Reselect to ensure there is a element which is valid, since we may have clicked simulateClick.

    // If muted == true AND hangouts muted == false, simulate click in Hangouts.
    if (button.parentElement.getAttribute('aria-pressed') == 'true' && !muted) {
        simulateClick(button);
    }
}

function simulateClick (element) {
    var initEvent = function (elt, str) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(str, true, true);
        elt.dispatchEvent(clickEvent)
    };
    initEvent(element, 'mousedown');
    initEvent(element, 'click');
    initEvent(element, 'mouseup');
}