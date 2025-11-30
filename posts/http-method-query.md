---
title: New HTTP request method named QUERY
layout: content.njk
date: 2025-11-30
---

Let me explain.

For years, developers have used GET and POST to handle almost every kind of client–server interaction. But as APIs evolved, one problem became obvious:

> We don't have a safe, read-only method that supports a request body.

This is exactly why the new HTTP method QUERY was proposed. Let's break down the reasoning step by step.

## The Problem With Existing HTTP Methods

### GET and PUT are idempotent

Idempotent methods produce the same result no matter how many times you repeat them.

- GET → Only fetches data. Calling it 100 times changes nothing.
- PUT → Replaces a resource. Doing it twice is identical to doing it once.

### POST is not idempotent

- POST → If you POST /orders three times, you may end up with three orders.

## Why Developers Misuse POST for Read-Only Queries

In modern APIs, clients often send complex search filters or analytical queries that don't fit inside a URL query string.

Even if this is a read-only operation, and idempotent
```
POST /api/v1/search
{
   "category": "books",
   "price": { "lt": 500 }
}
```

But the clients, caches, and proxies must assume it's unsafe and not idempotent because

The protocol must assume the worst:

- POST may create resources 
- POST may perform actions 
- POST may change state 
- POST may be unsafe to repeat 
- POST responses shouldn't be cached

Your implementation may be safe, but the method POST is not.

## The proposed QUERY method solves all these issues.

According to the draft (expires 22 May 2026):
https://www.ietf.org/archive/id/draft-ietf-httpbis-safe-method-w-body-14.html

> GET + request body + well-defined safe semantics

QUERY is the correct way to send complex read-only queries that don't fit in a URL.

## The result?

Cleaner API design, better caching, clearer semantics, and safer network behavior.

