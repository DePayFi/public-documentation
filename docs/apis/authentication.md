---
sidebar_position: 3
---

# Authentication

In order to authenticate towards DePay's APIs you need an API key.

## Header

In order to authenticate towards DePay's APIs, you need to pass your API Key via the `x-api-key header`:

```
x-api-key: M5dZeHFfIp3J7h9H9fs4i4wmkUo1HjAF3EmMy32c
```

## Test Key

For testing purposes, DePay provides a public API key which is not recommended for any systems in production, as it's shared with the public and heavily rate-limited.
We also rotate the public api key on a recurring basis.

```
M5dZeHFfIp3J7h9H9fs4i4wmkUo1HjAF3EmMy32c
```

## Issue an API Key

Once you're ready to move your integration to production, you will need to issue your own API key.

Go to **[DePay App](https://app.depay.com)** > **API** > **Issue Api Key**.

You will need to have an active DePay PRO subscription in order to issue and maintain an active API key.

## Limitations

Every API Key is limited to max. 10 requests/second (10 requests burst) and 14'400 requests/day.
