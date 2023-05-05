---
title: "My New SFF PC. AMD 7700X + RTX 4080"
date: 2023-05-04T21:36:25Z
draft: false
description: "My new SFF PC."
tags: ["PC", "SFF", "ITX", "Build log"]
series: ["PC"]
series_order: 2
---

{{< lead >}}
Building my new small form factor / mini ITX PC.
{{< /lead >}}

I just finished putting together my new small form factor PC and figured I'd make a build log!
In this article I'll be covering which parts I used and why, as well as my thoughts on them.
I'll also be talking about the issues I faced and what I would have done differently if I were to do this build again.

## The Build

![](gallery/01.JPG)

First let me tell you all of the parts I chose, then I'll go into more detail about each one below.

<ul>
    <li>Case: FormD T1 V2</li>
    <li>CPU: AMD Ryzen 7 7700X</li>
    <li>Cooler: Phanteks Glacier One 240MP</li>
    <li>Motherboard: Asus ROG STRIX B650E-I</li>
    <li>Memory: G.Skill Ripjaws DDR5-6000 CL30</li>
    <li>Storage: Samsung 980 Pro 2TB M.2 SSD</li>
    <li>GPU: NVIDIA GeForce RTX 4080 Founders Edition</li>
    <li>PSU: Corsair SF750</li>
    <li>Case Fans: Noctua A12x15 120mm & Phanteks T30 120mm</li>
</ul>

## Why ITX?

I've built several mATX PC's in the past but this is my first time building for the mini ITX form factor.
I always liked the idea of compact PC's but there was always two things preventing me from going ITX in the past, the main one's being:

<ol>
    <li>Difficulty.</li>
    <li>Price.</li>
</ol>

Obviously as a new builder I remember my first mATX PC being pretty challenging, there's a lot more consideration involved when it comes to part selection compared to full ATX towers (due to size limitations), and cable management can be tricky.

Still though, it was a nice middle-ground between ATX and ITX, motherboards had more expansion slots which was useful to me at the time, parts were cheaper than those made for ITX, and of course you still had tons of space for storage (since SSD's were still pretty expensive at the time and M.2 drives weren't really a thing).

Now though, things have changed. I feel that the mATX platform doesn't really get a lot of love these days and there's a very limited amount of motherboards, cases, etc. The prices between the different form factors are also not so different now, plus I have a couple years experience of PC building under my belt so I felt it was time.

## Part List

### FormD T1

I don't think it's uncommon for ITX builds (and even mATX) to start here, with choosing a case. It's more about choosing a volume and then filling that space efficiently, vs the traditional method of choosing everything you want and then something to put them in. I went with the FormD T1 V2, at just 9.95L in volume, it's about as small as you can go without impacting performance in any significant way. It also just looks super clean and minimal in black, which I really like, and is made for a sandwich layout.

The unique thing about this case is that it ships as a flatpack, meaning you have to assemble it yourself, obviously this makes the build process a lot more difficult and time consuming than anything I've done before, but it does have it's benefits, as it makes the case highly configurable allowing you to really optimize your use of the space. I also have to mention how premium this case feels, each piece metal just feels super sturdy, light, and just has an amazing finish all around, theirs really nothing like it.

### AMD Ryzen 7 7700X

I decided to go with AM5 because... it's new. Also the 7700X just seemed to be the right fit for me, it strikes a middle ground between great gaming performance and also being able to handle production workloads very well. Since I mainly am just a hobbyist when it comes to video editing, 3D rendering, game-development, etc. I didn't feel like I needed to go for one of the CPU's the focuses primarily on handling those workloads (e.g. 7900X / 7950X). If I was only concerened about gaming performance, I probably would have gone with a 5800X3D.

### NVIDIA RTX 4080 Founders Edition

Maybe a controversial choice. This card has been slated a bit for it's poor value due to pricing, but here in the UK I really felt like there was no other option if you're looking for a high end GPU that can handle 4K high refresh rate gaming. The competing AMD 7900 XTX is actually more expensive in a lot of cases unless you go with a not so great card. I didn't want to spend insane money on a 4090 even if it is "better value" (to me spending more than I need to for performance I don't need isn't exactly "value"), and the other NVIDIA options like the 4070 & 4070 TI just don't really reach performance I want.

![](gallery/02.JPG)

### Asus ROG STRIX B650E-I

Not much to say about this one, there aren't a ton of AM5 ITX motherboards on the market right now and this seemed to be one of the better options. Some users have complained about a coil whine and I can unfortunately confirm this is true, it's not hugely noticeable though.

### Phanteks Glacier One

I went for this AIO for a few reasons, it's AM5 compatible, it has a low profile CPU pump block (which is great for a sandwich case like this), and most importantly, it looks cool and doesn't have any RGB on it. Unfortunately though, the CPU pump gets pretty loud, so I'm having to run it at 70% speed. I used to have an NZXT Kraken which to be honest, is probably the better AIO, but I'm not a huge fan of having to install their software to use it, and I'm not going to be able to see the display through my mesh side panels anyway.

### G.Skill Ripjaws DDR5-6000 CL30

6000Mhz seems to be the sweet spot for AM5. This was the lowest latency set I could find for a good price.

### Samsung 980 Pro 2TB M.2

Also not a lot to say here, it's just a solid M.2 drive that doesn't break the bank. I'll probably get a second one in the future for the other motherboard slot.

### Corsair SF750

Tried and tested PSU for ITX builds. 750W Platinum is more than enough to power this build. It comes with some great cables too. The Silverstone Extreme 850R is also an option if you need something a bit more powerful, though I've seen 4090 builds that do just fine with the Corsair.

### Case Fans (Noctua A12x15 + Phanteks T30)

The reason for the mismatched fans is to make use of the extra space on the PSU side. The motherboard side only has enough room for a slim fan, these two are some of the best performers on the market.

## Closing Thoughts + PBO2 Tuning

Overall I'm really happy with the build and I think the problems I faced were pretty minor. At the end of the day it reaches the performance I was hoping for so that's what really matters.

However after a few days I decided to undervolt the CPU with PBO2. The new Ryzen CPU's seem to always run at temps of 95C under-load, whilst AMD have said this is normal, it's just a bit too hot for me to be comfortable. In the motherboard BIOS, I set a negative curve optimizer of 30, a thermnal limit of 85C, as well as some other PBO limits. After this configuration, the CPU is running at a comfy 60c under load, at the same clock speeds as stock, and much lower power draw. It's just an all around win.

![](gallery/03.JPG)