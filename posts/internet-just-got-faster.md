---
title: Your Internet just got faster, How BBR Powers Google, YouTube, Spotify, Netflix...
layout: content.njk
date: 2025-10-13
---

Let me explain.

The one of the most important differences between TCP and UDP, where most people only think about guaranteed packet delivery, is that **TCP also provides flow control** which is equally important.

Flow control is critical for the Internet to work properly. Without it, the entire Internet could become unstable or even collapse.

### What is Congestion Control?

The way to avoid overloading the Internet when sending data.

Think of the Internet like a **Highway** and Data like **Cars**. If too many cars try to use the same road at once, traffic jams happen that's network congestion.

Different algorithms (like BBR, CUBIC, etc.) decide when to speed up or slow down the data flow based on how busy the network is.

For example, when we are watching a YouTube video or streaming music from Spotify, we might notice that the video quality automatically increases (say, up to 720p or higher) or decreases (down to 320p) depending on the network condition. The same thing happens with music quality.

**How does this happen, and who controls it?**

That's where congestion control plays its real role.

In later sections, we'll discuss different algorithms used for congestion control two of the most common ones are **CUBIC** and **BBR**. For simplicity, let's consider just these two.

## CUBIC

In the past, **CUBIC** was widely used.

CUBIC controls congestion by reacting to packet loss when a packet is lost, it assumes the network is congested and immediately slows down the data rate.

But in some cases, there's no real congestion, and packets are lost due to other reasons like network fluctuations. Even then, CUBIC reacts by slowing down unnecessarily.

## BBR (Bottleneck Bandwidth and Round-trip Propagation Time)

To overcome this limitation, Google introduced **BBR**, which brought a major improvement in congestion control.

In BBR, when a packet loss occurs, BBR doesn't immediately slow down. Instead, it continues operating at full potential.

BBR works by calculating:

- **Bottleneck Bandwidth**: The maximum data rate that the slowest part of the network can handle.
- **Round-Trip Propagation Time (RTT)**: The minimum time for a packet to travel round-trip without queuing delays.

## Sender → Router → Receiver → BBR calculation

![TCP Flow Control](/assets/bdd.png)

- Suppose the sender tries to send 10 MB in 1 second.
- The network bottleneck (slowest link) can only handle 1 MB/s, so initially all is fine.
- After 1 second, the receiver sends ACKs.
- The sender sees that only 1 MB was delivered successfully this confirms the Bottleneck Bandwidth = 1 MB/s.
- Sender measures round-trip time, 100 ms (minimum RTT) which is 0.100 s.

Bottleneck Bandwidth = 1 MB/s
Minimum RTT = 100 ms = 0.100 s

BDP (bytes) = Bandwidth × RTT = 1MB/s × 0.100s = 0.1MB = 100KB

- This means the sender should keep only 100 KB in the network at a time.
- Sending more than this (e.g., the full 1 MB) will fill the network queue higher latency.
- Sending less than this the network is underutilized slower throughput.

BBR uses a method called **probing**, which means it analyzes packet responses to estimate network conditions. Unlike some older algorithms that send empty or useless packets for measurement, BBR uses real data packets to probe and analyze performance.

BBR also doesn't cause **bufferbloat**.

Think of it like this if there are 100 slots available in a box, CUBIC tries to send data as fast as possible, fills up all the space, and causes overflow (bloating). BBR, on the other hand, controls the flow carefully and keeps the system stable without overflowing.

**Jason Cohen, Founder and CTO of WP Engine**, explains it best:

> "BBR allows the 500,000 WordPress sites on our digital experience platform to load at lightning speed. According to Google's tests, BBR's throughput can reach as much as 2,700× higher than today's best loss-based congestion control; queueing delays can be 25× lower. Network innovations like BBR are just one of the many reasons we partner with GCP."