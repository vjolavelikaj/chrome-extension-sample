## How to create a Google Chrome Extension 


* ### What are GCE ?
 'Extensions are small software programs that customize the browsing experience. 
 ... 
 An extension must fulfill a single purpose that is narrowly defined and easy to understand.' 

[Click here ](https://developer.chrome.com/extensions) for more info from the official site

* ### Getting started

This is a simple extension that will scroll you to the bottom of the page

![My example!](https://66.media.tumblr.com/b85d4ba0a1af7457023ac128b8c24596/4625e9964e26cd91-69/s250x400/09d216043d6449dc1b9b9dd76f00fe5f8a340518.png "Scroll to the botom extension")


* Start by creating a directory in your workspace
* Add a file called _**manifest.json**_ with the keys acording to your needs ( check the file and inspect the keys as they are self-explainatory)
* ### **Installation** :
    * Navigate to _**chrome://extensions**_ in your browser.
    * Check the box next to _**Developer Mode**_.
    * Click _**Load Unpacked Extension**_ and select the directory for your extension.

* ### **To know**:
    * _**manifest.json**_ is the configuration file. Check out [here ](https://developer.chrome.com/extensions/manifest) all the possible configurations
    * _**popup.html**_ is the file responsible for the popup of the extension 
    * _**background.js**_ is the file that will execute scripts (checks, changes) in the background


For more advanced scenarios explore [Extensions API](https://developer.chrome.com/extensions/api_index) and the documentation