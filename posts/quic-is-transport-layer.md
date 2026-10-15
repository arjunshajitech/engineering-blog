---
title: Why QUIC Is a Transport Layer Protocol (Even Though It Runs on UDP)
layout: content.njk
date: 2026-10-15
---

## The question I had

One day, a colleague suddenly asked me: "QUIC runs on top of UDP, and UDP is a transport layer protocol. So how can QUIC also be called a transport layer protocol?" I didn't know the answer. So I looked into it. Here is what I found.

## Why TCP and UDP are transport protocols

TCP and UDP move data between applications on two machines, using port numbers. That is the transport layer's job.

- **TCP** gives reliable, ordered delivery. It resends lost data and controls speed.
- **UDP** just sends packets with port numbers. No guarantees.

Both sit directly on IP, so IANA gives each an official protocol number: TCP is **6**, UDP is **17**.

## Where QUIC is different

QUIC does not sit directly on IP. It travels inside UDP packets, and it has no IANA number. At first, this made me think QUIC was just an application protocol, like DNS.

## Why QUIC is still transport

The answer is simple: **a layer is about the job a protocol does, not what it is wrapped in.**

- **QUIC does TCP's job.** Reliable delivery, ordering, flow control and congestion control all happen inside QUIC. UDP only gives it port numbers.
- **UDP was chosen so QUIC could actually be used.** Many routers and firewalls only allow TCP and UDP. A brand new protocol on IP would be blocked in many places. Riding on UDP gets around this.
- **The official spec agrees.** RFC 9000 describes QUIC as a transport protocol.

```
HTTP/3   <- application
QUIC     <- transport
UDP      <- just a carrier
IP
```

## What I learned

> QUIC is a transport protocol that uses UDP as its vehicle. Some people still call it an application protocol, and I can see why. But I now think the job a protocol does matters more than where it sits in the packet.

## Sources

- [RFC 9000: QUIC](https://datatracker.ietf.org/doc/html/rfc9000)
- [IANA Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
- [Wikipedia: Talk:QUIC](https://en.wikipedia.org/wiki/Talk:QUIC)
