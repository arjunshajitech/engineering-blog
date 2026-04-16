---
title: The Secret Life of API Keys
layout: content.njk
date: 2026-04-16
---

![API Key](/assets/api-key.png)

Modern platforms like GitHub and Razorpay ... use API tokens to securely identify and authenticate users or applications. At first glance, these tokens look like random strings but they often follow a simple internal structure.

Let’s break it down using an example:

This token can be understood in three parts:


## 1. Prefix (Slug)

The prefix tells the system what type of token it is.

* `ghp_` → Personal access token (GitHub)
* `rzp_` → Used in Razorpay keys

This part is not secret. It simply helps the backend quickly identify how to process the token.


## 2. Random Hex

This is the most important part of the token.

* Generated using secure random bytes
* High entropy (hard to guess)
* Acts as the unique identifier

This randomness is what makes the token secure.


## 3. Checksum (CRC32)

A checksum like CRC32 is used to:

* Detect typing mistakes
* Quickly reject invalid tokens
* Reduce unnecessary database calls

Important: This is **not for security**, only for validation.

When a token is received, the system first recalculates the CRC32 from the random data and compares it with the checksum at the end.

If the checksum does not match, the token is immediately rejected without checking the database. This helps reduce database calls for obviously invalid or corrupted tokens.


## How It Works Internally

1. Token is generated and shown once to the user
2. The system stores a **hash** of the token (not the token itself)
3. When a request comes in:

   * Token is hashed again
   * Compared with stored hash
   * If matched access granted

## Bonus: What Developers Often Miss About API Keys (From HN)

> Hello bob! the checksum is for secret scanning offline and also for rejecting api keys which might have a typo (niche case)  

> I think they are saying passwords are salted and we use multiple rounds of hashing to prevent rainbow tables and slow down brute-forcing the password (in case of db leak). We don't need to do that for randomized long strings (like api keys), no one is guessing 32 character random string, so no salt is needed and we don't need multiple rounds of hashing.

> Side note: the slug prefix is not primarily intended for the end-user / developer to figure out which kind of key it is, but for security scanners to detect when they are committed to code / leaked and invalidate them.

