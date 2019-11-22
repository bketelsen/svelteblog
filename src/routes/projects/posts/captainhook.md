---
title: Captain Hook
date: "2019-09-03"
image: /images/xBmmFz2psKw.jpg
thumbnail: /images/xBmmFz2psKw-thumb.jpg
credit: https://unsplash.com/photos/xBmmFz2psKw
description: "A generic webhook endpoint that runs scripts based on the URL called."
link: https://github.com/bketelsen/captainhook
---

# captainhook

A generic webhook endpoint that runs scripts based on the URL called

This tool was built as part of a CI orchestration process, to be called when
Docker trusted builds finish.  It explicitly ignores the posted data from the webhook
because that would be `insecure`, which is `bad`. 

