---
title: The Hidden Costs of Concurrency in RDBMS
layout: content.njk
date: 2026-01-29
---

First, let’s step back and think about this:

Have you ever wondered how a database manages concurrency when multiple transactions are reading and writing the same tuples at the same time?

For example, if one transaction is updating a tuple while another transaction is reading it, what actually happens?

What kinds of problems can occur in this situation, and how are they handled?

> T2 reads data written by T1 before T1 commits.
If T1 later rolls back, T2 has read data that never officially existed.

> Two transactions update the same row, and one update overwrites the other without knowing it.

...

The classic solution is locks, writers blocks readers and readers blocks wirters

- Suffer concurrency
- Throughput drops
- Deadlocks becomes common

# Multi-Version Concurrency Control

To overcome these issues, most modern RDBMS rely on a version-based concurrency approach.

Instead of locking rows during reads, the database maintains multiple versions of the same row and returns the version that matches a transaction’s snapshot.

For example, assume a row has a value of 100. A read transaction starts and sees this value. While it is still running, another transaction updates the value to 150. Instead of modifying the row in place, the database creates a new version of the same tuple, which technically means a duplicate tuple with different version metadata.

At this point, two versions of the tuple exist:
the older version with value 100 and the newer version with value 150.

When a read operation occurs, the database first reads the original tuple and then follows the version chain, checking each newer version one by one. This continues until it finds the latest version that is visible to the current transaction.

One of the main drawbacks of MVCC is that every update creates a new tuple version, which consumes additional storage. These old versions cannot be removed immediately because active transactions may still need to see them. As a result, the database must later clean up obsolete tuple versions to reclaim space.

In PostgreSQL, this cleanup is handled by a background process called VACUUM.

Because of this design, MVCC generally favors read-heavy workloads. Reads are fast and non-blocking, but writes are more expensive due to tuple duplication, metadata management, and delayed cleanup.

Related blogs:

OpenAI: Scaling PostgreSQL
https://openai.com/index/scaling-postgresql/

The Part of PostgreSQL We Hate the Most
https://www.cs.cmu.edu/~pavlo/blog/2023/04/the-part-of-postgresql-we-hate-the-most.html

Uber Engineering: Why We Migrated from PostgreSQL to MySQL
https://www.uber.com/en-IN/blog/postgres-to-mysql-migration/