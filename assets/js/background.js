chrome.commands.onCommand.addListener(function(command) {
    var urls = [
        'https://plus.google.com/hangouts/*',
        'https://talkgadget.google.com/hangouts/*'
    ];

    chrome.tabs.query({ url: urls }, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];

            chrome.tabs.sendMessage(tab.id, command);
        }
    });
});