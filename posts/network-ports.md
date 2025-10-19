---
title: Why Network Ports can only use values from 1–65535, Why Not 9999999 or a Random Number?
layout: content.njk
date: 2025-10-19
---

Let me explain.

A port is like a numbered door on your computer. It’s the entry and exit point for specific types of messages that travel to and from the internet. Each port number ensures that data reaches the right application or service.

We’re all familiar with some default ports:

80  - HTTP
443 - HTTPS
22  - SSH
25  - SMTP
…and many more.

But have you ever wondered why port numbers are limited to 65535 and not something larger like 999999 or just a random number?

While exchanging data, they use protocols such as TCP, UDP, SCTP, etc. If you check the RFC (Request for Comments) standards for these protocols, you’ll notice a common pattern: all these protocols use 16 bits to store port numbers.

TCP Header Format

![TCP Header Format](/assets/tcp-header.png)

16 bits means 2 bytes, and the maximum value a 16-bit number can hold is 65535. That’s exactly why port numbers are limited to this range.

So what if we tried to use a port number like 999999? It simply cannot fit in the 16-bit field defined in the TCP, UDP, or any other standard protocol header. 

To use such large numbers, the protocol itself would need to be redesigned, and every system on the internet would have to adopt the change which is not practical.