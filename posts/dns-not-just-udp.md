---
title: DNS Not Just UDP
layout: content.njk
date: 2025-09-01
---

Let me explain.

UDP on port 53 is the default, Simple, fast, lightweight.

## Why Simple, fast, lightweight?

Needs only 2 packets :
- 1 packet for query
- 1 packet for response

## TCP on port 53

Needs 7 packets :
- 3 packets for the handshake
- 2 packets for the query/response
- 2 packets for connection teardown

## When TCP comes into play

- UDP packets can't be greater than 512 bytes. If a response is bigger, the query switches to TCP.
- Zone transfers need reliability and completeness, so they use TCP.
- If UDP traffic is blocked (e.g., by an ISP), DNS falls back to TCP.