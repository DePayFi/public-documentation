---
sidebar_position: 2
---

# Authentication

Authenticate as an App towards DePay's APIs.

To authenticate towards DePay's APIs as an App you need an [API Key](/docs/apis/authentication) and a valid [Access Token](#access-token).

## API Key

Make sure you have an Api Key before accessing DePay APIs.

Check [Basic API Authentication](/docs/apis/authentication).

## Access Token

Make sure you have the [User Authentication Flow](/docs/apps/user-authentication) implemented and your app is able to [retrieve and refresh access tokens](/docs/apps/user-authentication#retrieve-access-token).

## Authorization Header

In order to make requests as an app retrieving user data you need to pass the `access_token` via the `Authorization` header with a `Bearer` prefix:

```
Authorization: Bearer {access_token}
```
