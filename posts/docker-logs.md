---
title: Docker Logs Can Fill Your Disk if You Ignore This Setting
layout: content.njk
date: 2025-12-26
---

Let me explain.

Many people don’t realize that Docker’s default logging behavior can quietly consume your entire VM disk.

By default, Docker uses the `json-file` logging driver without `log rotation`. This choice exists mainly for backward compatibility with older Docker versions but it comes with risk.

If you don’t change this default, container logs will continue to grow indefinitely. Over time, this can fill your disk, cause your applications to stop, and even bring down services with “disk full” errors.

To avoid surprises, you should either

- Enable log rotation, or
- Switch to the `local` logging driver, which is more efficient and supports rotation by default.

Example: Enable log rotation globally (Linux)

Create/Update `/etc/docker/daemon.json` 

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "3"
  }
}
```

Then restart Docker:

```
sudo systemctl restart docker
```

> Restart Docker for the changes to take effect for newly created containers. Existing containers don't use the new logging configuration automatically.

Ref: https://docs.docker.com/engine/logging/configure/