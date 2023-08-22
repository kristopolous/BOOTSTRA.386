# Building 4.4 in 2023 

The internet moves fast and it's mostly moved on from this ecosystem so the *easiest* way, and the way I actually do it is through vagrant/virtualbox and an ubuntu 18.04 installation. There may be more graceful ways to do this in lxc or another modern lighweight container format. Feel free to pull that off and do a PR, I'd be happy to look at it.

The easiest and most reliable way to do this is to use an old install iso like ubuntu 18.04 and then a tool like virtualbox or vagrant.

Given that you probably just want to use ubuntu 18.04 like I said ... that's what I'm using. Looks like the apt repositories will be kept online until at least 2028.

Don't take any recommendations on npm update or upgrade, you could run into dependency hell and break everything. We want this locked in time.

If the repositories eventually tell you to take a hike, open an issue and I'll do a git lfs of a snapshot of the repos to download.

**note**: unlike *most* vagrantfile I've seen in the wild, this is synced a directory up because we want to get some top level scripts (icon-generation and the fonts) into the build process so when you do your npm work you should be in /vagrant/v4.4.1

**port forwarding**: I don't know what's up with my installation but I wasn't able to get this working through vagrant so I did an ssh, something like `ssh -fNC -R host:9003:127.1:9001 user@host` should be ok. (the 0s can collapse like that in ipv4 btw)

## DIY

You could do it another way:

   * You'll need python-2.x somewhere. I'm using 2.7.18, that's achievable with pyenv
   * You'll also need old ruby 2.x, which you can get up and going with rvm. I did `rvm install 2.7`
     These things won't compile unless you have older ssl, and a gcc < 10.0

I really recommend creating some user account for this stuff since all these things want to go into your startup scripts they are all slow.
You can do `rvm autolibs disable` on Debian systems to ignore the `apt-get update` thing it wants to do if you take this route and don't want to go through updating sudoers and all that work.

This is all a complicated mess, I just gave up and used the vagrant method.

