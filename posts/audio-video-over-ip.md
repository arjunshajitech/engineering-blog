---
title: Audio over IP ≠ Video over IP
layout: content.njk
date: 2025-10-09
---


We all use communication platforms like `VConsol`, `Google Meet`, `Zoom`, and even `WhatsApp` for video and audio calls.

But have you ever wondered how your video and audio actually travel from your phone, tablet, or browser to someone else's device on the other end?

While many protocols are used to set up and manage a call, the actual media audio and video is usually carried over `RTP (Real-time Transport Protocol)`, which is one of the most common protocols for real-time communication.

Each RTP packet carries a piece of data.

RTP is widely used to carry audio and video data, ensuring it reaches the other end in a way that can be played back.

When we say a packet is `decodable`, it means that the RTP packet can be decoded back into an audio sample or video frame so that it can be played on the recipient's device.

Audio packets are `independently decodable` each packet contains enough information to be played on the other side without needing previous packets.

- If audio packets are lost, the audio won’t freeze or stop; the player simply continues with whatever data is available in the subsequent packets.

Video packets, on the other hand, are `interdependent`.

- A single frame of video might be split across multiple RTP packets (for example, 5 packets = 1 frame)
- The first frame (often called a `keyframe` or `I-frame`) contains all the information needed to start decoding
- If that keyframe or any essential packets are lost, the video may freeze, stutter, or fail to play even if later packets arrive correctly

In rare cases, if a video packet is small enough to fit within a single MTU (Maximum Transmission Unit), it can be independently decodable, similar to audio but this is uncommon in most real-world video streams.

`There's a lot more to explore here, but this fundamental difference is essential to understanding how real-time communication works over IP networks.`