Here's notes for modern building which should be good until it isn't.

The easiest and most reliable way to do this is to use an old install iso like ubuntu 18.04 and then a tool like virtualbox or vagrant.
This sounds crazy until you try it your way.

You'll need python-2.x somewhere. I'm using 2.7.18, that's achievable with pyenv
You'll also need old ruby 2.x, which you can get up and going with rvm. I did `rvm install 2.7`
These things won't compile unless you have older ssl, and a gcc < 10.0

I really recommend creating some user account for this stuff since all these things want to go into your startup scripts they are all slow.
You can do `rvm autolibs disable` on Debian systems to ignore the `apt-get update` thing it wants to do if you take this route and don't want to go through updating sudoers and all that work

Given that you probably just want to use ubuntu 18.04 like I said ... that's what I'm using. Looks like the apt repositories will be kept online until at least 2028.
