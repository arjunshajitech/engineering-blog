---
title: What is HSTS? Is the first visit insecure?
layout: content.njk
date: 2025-10-06
---

Let me explain.

When you type a domain like `bucketbin.in` in Chrome (or any browser), if you don't explicitly type `https://bucketbin.in`:

1. Browser sends `GET /` request to `http://bucketbin.in` on port 80 (insecure, plain HTTP)
2. The server (e.g. Nginx) responds with a 301/302 redirect to the HTTPS version
3. Browser now connects to `https://bucketbin.in` on port 443
4. Then it performs the TCP + TLS handshake (certificate validation, encryption setup)
5. Then it sends the secure `GET /` request over HTTPS

**So on the first visit, the browser makes an insecure HTTP request before upgrading to HTTPS.**

## What Happens on the Second Visit?

On the second request, the browser skips HTTP entirely and goes directly to HTTPS.

This is where **HSTS (HTTP Strict Transport Security)** comes in.

HSTS tells the browser:
> "Always use HTTPS for this site, and never attempt HTTP again"

## How Does HSTS Work?

When a site is served over HTTPS, the server can include a special response header:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Header Directives

- **`max-age=31536000`** - Enforce HTTPS for at least 1 year
- **`includeSubDomains`** - Apply the rule to all subdomains
- **`preload`** - Request must be added in browser preload lists

Once the browser sees this header, it remembers the rule for the given `max-age`.

From then on, every future request to that domain is automatically upgraded to HTTPS **inside the browser** before any network call happens.

## The First Visit Problem

A browser cannot know a site's HSTS policy until the user visits it at least once.

### Solution: HSTS Preload List

To fix this, major browsers maintain a built-in **"HSTS Preload List"** - a list of domains that must always use HTTPS, even on the first visit.

For example, Google, Facebook, etc. are on the preload list.

This means they skip HTTP entirely:
- ✅ No redirect
- ✅ No insecure first request
- ✅ Always straight to HTTPS