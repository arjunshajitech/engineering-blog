---
title: Only 13 root servers run the internet? Here’s how billions still get served!
layout: content.njk
date: 2025-09-22
---

Let me explain.

There are officially only 13 root name servers but that doesn’t mean there are just 13 physical machines. In reality, there are over 600 root server instances distributed across every populated continent.

So what does “13 root servers” really mean?

It’s about IP addresses, not physical machines. Through anycast routing, multiple servers share the same IP address, and your DNS request is automatically routed to the nearest available server.

**Anycast** = many servers, same IP, your request goes to the closest one.

Another thing, when you check your OS DNS settings, you might see `8.8.8.8`, `1.1.1.1`, etc. These are not root servers they are public recursive resolvers. They handle your query, check their cache, and only ask the root servers if needed.

**TLD (Top-Level Domain)**  
The last part of a domain name, e.g., `.com`, `.org`, `.in`.

**A Record**  
The DNS record that maps a domain to an IPv4 address, e.g., `www.example.com → 93.184.216.34`.

**Authoritative Server**  
The DNS server that actually holds the official records.

**DNS Query Flow**

1. You ask your resolver `8.8.8.8`, `1.1.1.1` etc.
2. If it knows the IP, it returns it from cache.
3. If not, it asks a root server.
4. Root server points to the TLD server.
5. Resolver asks the TLD server then authoritative server then finally gets the IP.
6. Result is returned to your device.
