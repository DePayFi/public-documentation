---
sidebar_position: 1
sidebar_label: Payments
---

# Link Payments

Accesses payments received with payment links via API

## GET

```
GET https://api.depay.com/v2/links/:link_id/payments
```

### Required Parameters

`link_id` - (string) Link id. Get your link id from https://app.depay.com.

### Optional Parameters

`after` - (string, ISO 8601) Used to paginate payments by time. Paginates payments that have been confirmed after the given time.

### Example Request

```
GET https://api.depay.com/v2/links/4cZQFsap1QbLIlnVC5hscB/payments
```

### Example Response

```javascript
[
  {
    "status": "success",
    "failed_reason": null,
    "blockchain": "ethereum",
    "transaction": "0x289fb6a1bb311b58025347e69e28acc6e486ace08b11a26912659f01fce12d62",
    "sender": "0x98baab7e67d65973d8958b53f4e825455aaa2a10",
    "receiver": "0x66911F870bD34c7a3967473B84d8C88e85e3F901",
    "token": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "amount": "1039",
    "payload": "{}",
    "confirmed_at": "2023-04-21T15:52:34.937960Z",
  }
]
```

### Pagination

This endpoint has a limit of 10 payments that are responded per request. Use `after` of the last received payment per response to paginate through the result set:

```
GET https://api.depay.com/v2/links/4cZQFsap1QbLIlnVC5hscB/payments?after=2023-04-21T15:52:34.937960Z
```
