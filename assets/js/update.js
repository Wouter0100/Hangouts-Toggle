var muted = false;
var mutedMicrophone = false;
var mutedWebcam = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == 'toggle') {
        muted = !muted;

        updateButton('.gbbhzb', muted); // Microphone
        updateButton('.YczAdf', muted); // Webcam

        mutedMicrophone = muted;
        mutedWebcam = muted;

        return true;
    } else if (request == 'toggleMicrophone') {
        mutedMicrophone = !mutedMicrophone;

        updateButton('.gbbhzb', mutedMicrophone); // Microphone
    } else if (request == 'toggleWebcam') {
        mutedWebcam = !mutedWebcam;

        updateButton('.YczAdf', mutedWebcam); // Webcam
    }

    return false;
});

function updateButton(selector, state) {
    // If muted == true AND hangouts muted == true, do nothing.
    // If muted == false AND hangouts muted == false, do nothing.

    var button = document.querySelector(selector);

    // If muted == false AND hangouts muted == true, simulate click in Hangouts.
    if (!button.classList.contains('U8OAre') && state) {
        simulateClick(button);
    }

    button = document.querySelector(selector); //Reselect to ensure there is a element which is valid, since we may have clicked simulateClick.

    // If muted == true AND hangouts muted == false, simulate click in Hangouts.
    if (button.classList.contains('U8OAre') && !state) {
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