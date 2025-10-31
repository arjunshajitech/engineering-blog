---
title: BGP - The Guy Who Knows Every Shortcut on the Internet
layout: content.njk
date: 2025-10-30
---

Let me explain.

You can think of **BGP (Border Gateway Protocol)** like the delivery partner in Swiggy or Zomato. When you place an order, the delivery person doesn't just take any random route they find the fastest and most efficient path to reach your location. Similarly, BGP figures out the best possible route for your data to travel across multiple networks, making sure it reaches the destination as quickly and efficiently as possible.

We all know that the Internet is a massive network connecting countless computers around the world. Among these, there's a special kind called an **Autonomous System (AS)** that helps route data across the Internet.

Not every computer or server connected to the Internet is an Autonomous System. To become one, a network must apply through a **Regional Internet Registry (RIR)**. Once approved, it receives a unique **Autonomous System Number (ASN)** from IANA for example, `AS299`. ASN are 16 bit numbers between 1 and 65534 and 32 bit numbers between 131072 and 4294967294. This number acts like an official ID, making the system globally recognizable.

As of 2025, there are approximately **120,000 ASNs** in use worldwide (eBGP). 

Each AS can have multiple routers. Communication between routers within the same AS is called internal (iBGP), while communication between routers belonging to different ASes such as between two ISPs is called external (eBGP).

Now, here’s where things get interesting. Many people think that when they click a YouTube thumbnail or hit ‘play’ on a video,packets travels directly from their device to YouTube’s server (after DNS).

Sounds simple, right? But in reality, that’s not how it works.

> **Hopping** refers to the process of data traveling from one Autonomous System (AS) to another as it moves toward its destination. Each step from one AS to the next is called a hop. The number of hops is not determined by the physical distance between ASes, but by other factors such as routing policies, network topology, and peering agreements.

Your data doesn't take a direct flight it goes on a journey across multiple networks, **hop** from one Autonomous System to another. With the help of **BGP (Border Gateway Protocol)** the Internet's "Delivery boy" your request finds the most efficient route available. It passes through several networks around the world, sometimes thousands of them, before finally reaching YouTube's origin server (or, more likely, a local cache closer to you).

![BGP Flow](/assets/bgp.png)

- AS1 -> AS4 -> AS5 (Best route discovered by BGP)
- AS1 -> AS2 -> AS3 -> AS5

- A single AS (Autonomous System) can have multiple routers.
- Each pair of ASes establish BGP sessions between their border routers over TCP (usually on port 179).

The Internet is constantly changing. Old computers and networks go offline, while new ones pop up every day. To keep everything connected and up to date, the **Border Gateway Protocol (BGP)** plays a crucial role. It helps all the Autonomous Systems (AS) stay in sync by sharing information about which networks are reachable and how to get there.

As humans, we're curious about what could go wrong, what happens when an AS accidentally gives a wrong route to the next AS?

> One notable BGP incident occurred in **2008**, when a Pakistani ISP registered a new AS intending to block YouTube locally. However, due to a BGP misconfiguration, the route was advertised globally. As a result, many ASes saw this as the shortest path to YouTube, causing traffic from around the world to be routed through the Pakistani AS. This mistake made YouTube unreachable globally for several hours.

So the next time you’re streaming a video, scrolling social media, or searching for something online, just imagine your data taking a complex trip across the globe guided by thousands of AS, routers and networks all working together in perfect sync.

