---
title: ‘S’ in HTTPS doesn’t mean the site is safe/secure!
layout: content.njk
date: 2025-10-16
---

Let me explain.

When someone asks what the "S" in HTTPS stands for, most people instantly say, "It means secure."

That's partially true, but also misleading.

In reality, the "S" only means that the website has a valid TLS certificate and uses encryption to secure the data transmitted between your device and the website. This ensures that no third party can intercept or read the data while it's being transferred.

However, this does not mean the site itself is trustworthy, legitimate, or safe to use.

> "A secure connection does not mean a secure site."

There are plenty of phishing websites that use HTTPS. Anyone can easily obtain a free TLS certificate (for example, through Let's Encrypt) as long as they have a valid domain name. So, just seeing the lock icon or HTTPS in the address bar of browser doesn't guarantee that the site isn't malicious.

On the other hand, websites using plain HTTP are not necessarily unsafe. When browsers like Google Chrome label HTTP sites as "Not Secure," it simply means that the data sent between your browser and the server is not encrypted, it's transmitted as plain text.

So, next time someone asks what the "S" in HTTPS stands for, don't just say "secure."

Instead, say:

> "It means the site has a valid certificate and encrypted data transfer but that doesn't guarantee the site itself is safe."

## To truly verify if a site is safe, always check both:

- That it uses HTTPS, and
- That the domain name is familiar and correct.

Take a moment to think before clicking any link a second that can save you from a phishing attack.