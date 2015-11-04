chrome.omnibox.setDefaultSuggestion({ 'description': 'Search in Dribbble'});

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    suggest([
      {'content': "Search " + text + " in Dribbble"}
    ]);
  });


// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.create({ "url": "https://dribbble.com/search?q=" + text });
  });
