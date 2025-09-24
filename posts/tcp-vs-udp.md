---
title: TCP vs UDP - What Most People Don’t Know
layout: content.njk
date: 2025-09-24
---

You’ve probably heard things like:  
- TCP is reliable, UDP isn’t  
- TCP needs a connection, UDP doesn’t  


## UDP Lets You Broadcast, TCP Doesn’t
Broadcasting means sending one message to all devices on a network at the same time.  
With UDP, a device can do exactly that.  
TCP needs a separate connection for each device, so true broadcasting isn’t possible.


## TCP Eats More Bandwidth, UDP Doesn’t
UDP has a fixed **8-byte header**, keeping it light and fast.  
TCP’s header starts at **20 bytes** and can go up to **60 bytes** with extra options.  

Fun fact: For very tiny messages, TCP’s header can be bigger than the actual data, eating bandwidth.

## TCP Recovers, UDP Moves On
TCP does this using retransmission — acknowledgments and sequence numbers.

- **Retransmission** resending lost data so nothing gets lost  
- **Sequence number** each piece of data is numbered so the receiver knows the order  
- **Acknowledgment (ACK)** receiver tells the sender, “I got this packet #3!”  

### Example
1. You send packets #1, #2, #3, #4  
2. Packet #2 gets lost  
3. Receiver sends ACKs: Got #1, #2 missing, Got #3, Got #4  
4. Sender retransmits #2  
5. Receiver now has all packets in order  

In UDP, if packet #2 is lost,
there’s no retransmission (means no built-in) it’s gone.
