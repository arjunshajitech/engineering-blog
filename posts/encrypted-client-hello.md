---
title: TLS Encrypted Client Hello (ECH)
layout: content.njk
date: 2026-03-10
---

HTTPS protects the data exchanged between a client and a server by encrypting it with TLS. However, before encrypted communication begins, a TLS handshake must occur. During the first step of this handshake, the client sends a `ClientHello` message to the server.

## Background

The `ClientHello` contains several pieces of information needed to establish the secure connection. One important field is the **Server Name Indication (SNI)**, which specifies the target domain the client wants to connect to (eg: example.com). It may also include extensions such as:

- Supported ALPN protocols (e.g. `HTTP/1.1`, `HTTP/2`, or `HTTP/3`)
- Cryptographic parameters like key shares used for key exchange

### The Problem

The `ClientHello` is sent in **plaintext**. This means that network observers such as ISPs, network administrators, or middleboxes can see metadata like the requested domain name (SNI) even though the actual HTTPS content is encrypted.

## How ECH Works

Encrypted Client Hello (ECH) addresses this limitation. With ECH, the client sends two `ClientHello` messages:


**Outer ClientHello** - Visible on the network, minimal or placeholder information 
**Inner ClientHello** - Encrypted, real connection details (actual SNI, extensions, etc.) 


The inner `ClientHello` is encrypted using a **public key obtained through DNS records** (HTTPS or SVCB records). When the client performs a DNS lookup for the target domain, it also receives the ECH configuration, which includes the public key required to encrypt the inner `ClientHello`.

```
Client                          DNS                        Server/CDN Edge
  |                              |                               |
  |--- DNS lookup (HTTPS/SVCB) ->|                               |
  |<-- ECH config + public key --|                               |
  |                              |                               |
  |--- Outer ClientHello (plaintext) ---------------------------->|
  |--- Inner ClientHello (encrypted with server's public key) --->|
  |                              |         (decrypts inner CH)   |
  |<------------ TLS Handshake continues normally ---------------|
```

When the request reaches the server or CDN edge, the server uses its **private key** to decrypt the inner `ClientHello`. Once decrypted, the server obtains the real destination information and continues the TLS handshake normally.

## Benefits

Because the sensitive parts of the `ClientHello` are encrypted, network observers can no longer see which specific domain the client is connecting to. This provides:

- **Improved privacy** — the target hostname is hidden from passive observers
- **Prevention of network-level inspection** of the destination domain
- **Protection against SNI-based filtering or censorship**

## References

- [RFC 9849 – Encrypted Client Hello](https://datatracker.ietf.org/doc/rfc9849/)