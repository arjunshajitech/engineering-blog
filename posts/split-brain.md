---
title: Split Brain - When Servers Forget to Talk
layout: content.njk
date: 2025-10-11
---

### What is a Distributed System?

In a distributed system, you have multiple servers that work together but appear as one system. To manage tasks efficiently, these servers often select one server as the leader, while the others act as followers.

### What Causes Split-Brain?

Let's imagine 5 servers: 1 leader and 4 followers.

The followers don't accept writes directly, unless using special configurations. They mainly copy the leader's data to stay in sync.

Let's assume a network break or delay happens.

- The leader thinks, "I'm still the leader."
- The followers lose connection with the leader and assume it is dead. So, they hold an election among themselves and choose a new leader. Let's say Server 2 is selected as the new leader.

At this point, we technically have two leaders (1 and 2), but split-brain hasn't occurred yet. Split-brain only happens when both leaders start accepting changes independently, causing conflicting data.

Imagine a wallet system where users can add money for charity.

- Server 1 is the leader.
- Servers 2, 3, 4, and 5 are followers.
- User A adds $100.
- Server 1 updates the wallet balance to $100, and the followers replicate this update to their own copies.

Everything is fine so far. Suddenly, the network breaks.

- Server 1 can't talk to Servers 2, 3, 4, and 5, and the followers can't talk to the leader, so they think the leader is dead.
- They elect Server 2 as the new leader.

Now we have two leaders: Server 1 and Server 2.

Users continue adding money.

**Case 1:**
- In sink old balance is $100
- User B connects to Server 1, the old leader, and adds $50.
- The wallet on Server 1 becomes $150.
- But it can't replicate to Servers 2–5 because the connection is broken.

**Case 2:**
- In sink old balance is $100
- User C connects to Server 2, the new leader, and adds $20.
- The wallet on Server 2 becomes $120.
- Servers 3–5 replicate this update.

Some time later, the network is restored.

- Server 1 says the wallet balance is $150.
- Servers 2–5 say the wallet balance is $120.

`This conflicting state is the real split-brain problem`.

### How to Solve Split-Brain

One common solution is quorum-based majority.

> Only the majority side is allowed to accept writes.

- Server 1 is 1 out of 5, which is too small, so it stops accepting writes.
- Server 2 is 4 out of 5, which is the majority, so it can continue.

With this rule, only one leader can make changes, preventing split-brain.

