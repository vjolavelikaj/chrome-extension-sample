let image = document.getElementById('clickImage');
image.onclick = function(element) {
  console.log("Hibitch");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: ' scrollingElement = (document.scrollingElement || document.body); scrollingElement.scrollTop = scrollingElement.scrollHeight;'
        }
      );
  });
};
