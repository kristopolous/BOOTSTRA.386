# Building in 2026

`./build-386.sh` compiles `less/bootstrap.less` and `less/theme.less` with a
current `lessc` (fetched through `npx`), minifies them, puts the Fixedsys
font next to the css in `dist/css/fonts/` and copies the lot into
`_gh_pages/dist/` where the prebuilt docs look for it. No vagrant, no grunt,
no ruby: the docs html in `_gh_pages/` is kept as built and only its
stylesheet, `docs/assets/css/src/docs.css`, is edited (the BOOTSTRA/386 part
is the block at the end of it; copy it to `_gh_pages/assets/css/src/` after
editing). `deploy/v3.sh` at the repo root makes the zip and publishes the
docs.

The notes below are how it used to be done.

# Building 3.2 in 2023 

The internet moves fast and it's mostly moved on from this ecosystem so the *easiest* way, and the way I actually do it is through vagrant/virtualbox and an ubuntu 14.04 installation. There may be more graceful ways to do this in lxc or another modern lighweight container format. Feel free to pull that off and do a PR, I'd be happy to look at it.

The easiest and most reliable way to do this is to use an old install iso like ubuntu 14.04 and then a tool like virtualbox or vagrant.

Given that you probably just want to use ubuntu 14.04 like I said ... that's what I'm using. 

Don't take any recommendations on npm update or upgrade, you could run into dependency hell and break everything. We want this locked in time.

If the repositories eventually tell you to take a hike, open an issue and I'll do a git lfs of a snapshot of the repos to download.

**note**: unlike *most* vagrantfile I've seen in the wild, this is synced a directory up because we want to get some top level scripts (icon-generation and the fonts) into the build process so when you do your npm work you should be in /vagrant/v3.3.2

**port forwarding**: I don't know what's up with my installation but I wasn't able to get this working through vagrant so I did an ssh, something like `ssh -fNC -R host:9003:127.1:9001 user@host` should be ok. (the 0s can collapse like that in ipv4 btw)

