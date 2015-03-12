chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == 'toggle') {
        var microphoneButton = document.querySelector('.ha-w-P-y-Xi-f');
        simulateClick(microphoneButton);

        var webcamButton = document.querySelector('.ha-w-P-y-si-f');
        simulateClick(webcamButton);

        return true;
    }

    return false;
});

var simulateClick = function (element) {
    var initEvent = function (elt, str) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(str, true, true);
        elt.dispatchEvent(clickEvent)
    };
    initEvent(element, 'mousedown');
    initEvent(element, 'click');
    initEvent(element, 'mouseup');
};