let image = document.getElementById('clickImage');
console.log("Hi");
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

image.onclick = function(element) {
  console.log("Hibitch");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: ' scrollingElement = (document.scrollingElement || document.body); scrollingElement.scrollTop = scrollingElement.scrollHeight;'
          // 'function scrollSmoothToBottom (id) { \
          //   $(scrollingElement).animate({ \
          //     scrollTop: document.body.scrollHeight \
          //   }, 500);'
        }
      );
  });
};


// scrollingElement = (document.scrollingElement || document.body)
// function scrollToBottom () {
//    scrollingElement.scrollTop = scrollingElement.scrollHeight;
// }

// function scrollToTop (id) {
//    scrollingElement.scrollTop = 0;
// }

// //Require jQuery
// function scrollSmoothToBottom (id) {
//    $(scrollingElement).animate({
//       scrollTop: document.body.scrollHeight
//    }, 500);
// }

// //Require jQuery
// function scrollSmoothToTop (id) {
//    $(scrollingElement).animate({
//       scrollTop: 0
//    }, 500);
// }

