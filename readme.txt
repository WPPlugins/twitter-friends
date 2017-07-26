=== Twitter Friends ===
Contributors: freebee
Tags: twitter, friends, widget
Requires at least: 2.5
Tested up to: 2.7
Stable tag: 1.2

Widget that displays your twitter followers

== Description ==

Widget that allows you to give love to the people that follow you on Twitter. You can choose different display styles of either picture only or picture, username, and most recent tweet. Due to Twitter limit on API hits, I cache the friend list and only hit Twitter every 5 minutes to avoid getting "Over the limit errors"

Version 1.1 fixes the issue that prevented the posts to update when viewed from front page of blog. Added a tweet box that allows you to post to twitter directly from the widget. Removed users that have not made a tweet in a long time.

Version 1.2 fixes a couple bugs, and adds optional direct message to new followers. Adds ability to block followers from the widget

== Installation ==

1. Upload the `twitter_friends` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. go to settings > twitter followers and enter your twitter username and password.
4. go to design > widgets and add the widget to a sidebar. You can edit the widget width, number of followers to display and type of view.

NOTE: See "Other Notes" for Upgrade and Usage Instructions as well as other pertinent topics.

== Other Notes ==

Must use PHP5 because I use simple_xml functions


== Screenshots ==

1. Widget with full details
2. widget with only the pictures showing


== Change Log ==

= 1.0 (2008-10-08): =
* Initial Public Release
= 1.1 (2008-11-23): =
* Bug Fixes and additional features
= 1.2 (2008-11-25): =
* Added Direct Message to new followers
