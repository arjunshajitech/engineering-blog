---
title: Why google.com and www.google.com aren’t exactly the same
layout: content.njk
date: 2025-10-24
---

Let me explain.

Before the `www`, the Internet already existed for many purposes, such as email, file transfers, DNS lookups, and more.

So why was `www` introduced and what was its purpose?

The prefix `www` (World Wide Web) is actually just a subdomain similar to `gemini.google.com` or `meet.google.com.`

Back in the early days of the Internet (1990s and early 2000s), a single company or organization might have different servers for different services, because no single server was capable of handling all services at once.

- `ftp.example.com` handled file transfers (FTP)
- `mail.example.com` handled emails (SMTP)

So “www” was a naming convention that told people and systems, “this is the web server.”

- `www.example.com` served web pages (HTTP/HTTPS)

But Today, modern servers can handle all these services at once, making `www.` technically unnecessary. 

However, most people still type `www.` so domains are usually configured with a `www` alias pointing to the same page as the main domain. 

That’s why whether you type google.com or www.google.com, you end up on the same page.