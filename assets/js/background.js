chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({ url: 'https://plus.google.com/hangouts/*' }, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];

            chrome.tabs.sendMessage(tab.id, 'toggle');
        }
    });
});