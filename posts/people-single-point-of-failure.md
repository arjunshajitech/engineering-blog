---
title: When a Person Becomes the Single Point of Failure
layout: content.njk
date: 2026-11-21
---

## A common problem

In engineering, a **single point of failure** is one part that, if it stops, stops everything. We work hard to remove these from our systems. We add backup servers, extra disks and second network links.

But many teams have single points of failure that are not machines. They are people.

It is a common pattern in many teams. Some people hold certain work only to themselves. They do not hand it over to anyone. Nobody else knows how it works. When that person is busy, on leave or sick, the work stops completely. And there is a quiet fear in the team: "What will happen if this person is not here?"

I have always wondered why someone would do this. So I read what researchers and other engineers have written about it. Here is what I found.

## It has a name

People in software call this the **bus factor**. It means: how many people would need to suddenly leave before a project stops? If the answer is one, the project is in danger.

Researchers who study workplaces call the behavior **knowledge hiding**. This is when a person is asked for knowledge and they hold it back on purpose. It is different from simply not sharing. Sometimes people do not share because they do not know. Knowledge hiding is a choice.

## Why do people do this?

From what I read, there is usually not one reason. It is often a mix of these.

### 1. Fear of losing their job

This is the most common reason. The thought is simple: "If only I know this, they cannot replace me." When people feel their job is not safe, they keep knowledge as a kind of protection.

### 2. Power and importance

When everyone has to come to you, you feel important. Your phone rings. People wait for you. Managers know your name. For some people, this feeling is pleasant, and they do not want to lose it. Being needed starts to feel like being valuable.

So yes, I think for some people it does feel good to be "the only one who knows." But being needed and being valuable are not the same thing.

### 3. The company rewards it

This one surprised me. Often the organization itself creates this behavior. The person who fixes the outage at 2 AM gets praised. The person who wrote clear documents so that the outage never happened gets no attention. Over time, people learn that being the hero is rewarded, and making yourself replaceable is not.

Studies also found that when there is **no reward for sharing** and there is **strong competition** inside the team, people hide knowledge more.

### 4. Not trusting colleagues

Research links distrust of colleagues to knowledge hiding. If a person thinks, "Others will break it" or "Someone else will take credit for my work," they will hold on to it.

### 5. No time, or it feels like too much effort

Not every case is bad intent. Teaching someone takes time. Writing documentation takes time. When a person is already overloaded, it feels faster to just do it themselves. This makes sense in the short term, but it keeps them overloaded forever.

### 6. "This is mine"

Some people feel they built the system, so it belongs to them. Researchers call one version of this **psychological entitlement**: "I worked hard for this knowledge, why should I give it away for free?"

## Why others copy it

This part made sense once I thought about it. People learn by watching the people around them. If they see that the person who holds everything is the one who gets respect, attention and job safety, they copy that. Nobody tells them to do it. They just learn that this is "how things work here."

So the behavior spreads. One single point of failure slowly becomes many.

> A good engineer removes single points of failure from systems. A great engineer also removes themselves as one.

## I want to hear from you

I wrote this because I honestly want to understand it better.

- **If you are a person who holds work to yourself:** What is your reason? Is it fear, habit, pride, no time, or something else? I am not asking to blame anyone. I want to understand the other side.
- **If you have seen this in your team:** What happened? Did it change? What worked?
- **If you started copying this from someone else:** What made you do it?

Please share your experience. I would like to learn from it.

## Sources

- [Wikipedia: Bus factor](https://en.wikipedia.org/wiki/Bus_factor)
- [Why and When Do Employees Hide Their Knowledge? (NCBI)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8869676/)
- [Antecedents of Knowledge Hiding and Their Impact on Organizational Performance (NCBI)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8722472/)
- [Kill Heroes, Build Systems and Processes (HackerNoon)](https://hackernoon.com/kill-heroes-build-systems-and-processes)
- [Bus Factor: When One Engineer Becomes the System (Reintech)](https://reintech.io/hiring/bus-factor-dominant-centre)
