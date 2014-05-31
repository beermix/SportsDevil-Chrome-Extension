SportsDevil-Chrome-Extension
============================

What is it?
----------
SportsDevil has a huge library of livestream resolvers. What this chrome extension does is to send over your current opened browser tab link to a remote (or local) XBMC instance which has SportsDevil installed. The link will be sent to script.sportsdevilextension addon which will forward it to SportsDevil addon. Luckily, SportsDevil will resolve the link to the stream url and play it right away...

Why the hell is this usefull?
----------
Supose you have an htpc on your network, such as a Raspberry Pi. You can open a webpage containing a livestream on your laptop and send the link to your Raspberry Pi. You can avoid slow browsing menu issues on low powerfull devices or just send links that are not listed by SportsDevil. Also, you can browse an event webpage and check which links are up or down, check which one has the best quality and after deciding...just send the link to your XBMC htpc. This extension also helps SportsDevil development since it is easier to detect why a link is not playing in SportsDevil. 

Installation and preview?
----------
* Download the zip from github and extract it somewhere
* Install the script.sportsdevilextension.zip on your HTPC
* Activate the webserver and define a port on (system-->settings-->services --> webserver)
* Install the extension (the .crx file) on chrome
* Configure the extension to use your HTPC ip and port
* Open a webpage containing a livestream
* Hit the Devil
* Have fun

Watch the video below

[![Demo Video](http://s28.postimg.org/w5gxz1599/extensai.jpg)](http://www.youtube.com/watch?v=1dTisVL67rg)
----------
You can fork the repo, do your code changes and make a pull request. If it adds a functionality or fix an issue the code will be merged after a review. If the problem is on the SportsDevil side, you can also contribute to the [SportsDevil public Repository](https://github.com/al101/SportsDevil-Fixes).

Why not on a repository or Chrome WebStore?
----------
I'll take care of this later.

Can I take the code and run away with it?
----------
Of course you can and you are encouraged to do so. You are free to copy the extension, change the code and adapt to your addon. However I'd be pleased if you could mention the original extension somewhere on your project page.

The link xxxxxx doesn't work..help!!!!
----------
Web developers hide the stream links behind multiple iframes or use javascript encryption to make the page scrapping harder. Unless you solve it yourself (and send code changes to the extension or SportsDevil) or the stream comes from an already available SportsDevil website parser...your message will most likely be ignored. 

Aknowledgements
----------
* To Pure Css for the inputs/button css.
* To Paul Underwood for the CSS-Based Content Accordion
* To fightnight for the wtairplay extension which served the basis of this extension. 

Changelog
----------
* (31st May 2014) Version 1.0 of script.sportsdevilextension and SportsDevil-Chrome-Extension.




