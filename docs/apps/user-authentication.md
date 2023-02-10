---
sidebar_position: 2
sidebar_label: User Authentication
---

# User Authentication

Receive authorization from users by asking for the required permissions.


## Step by step

### Create an App

First you need to create an app on [app.depay.com](https://app.depay.com).

Go to **Apps** > **New App** and provide all the information required.

### Enable User Authentication

Right after creating your app or after navigating your app on [app.depay.com](https://app.depay.com) **Apps** > **Your App** click "**Enable**" within the "**User Authentication**" section.

### Required Permissions

Now select the permissions your app requires.

#### payments.read

Allows your app to access all payment data connected to the user's account.

#### integrations.read

Allows your app to access all integration data connected to the user's account.

### Redirect URL

Now set the redirect URL where users should be send to after they have granted your app permissions.

### Authentication URL

Make sure you copy the "**Authentication URL**".

This is the URL you need to send users to in order to start a user authentication flow.

### Prepare User Authentication

Right before sending users to DePay to grant your app an authorization, create a random 32 bytes value called `code_verifier` and persist it as part of the authorization attempt.

After you have stored your `code_verifier`, generate `code_challenge` as a BASE64URL-safe-encoded SHA-256 hash of `code_verifier` + `app_secret` (string concatenation).

Attach `code_challenge` to the app authorization url: `https://app.depay.com/authorize/:app_id?code_challenge=<VALUE>`.

### User Redirect

Once the user granted authorization on the authorization page, the user will be sent to the configured `redirect_url` of the app.

The redirect to the configured `redirect_url` will contain two additional parameters: `code_challenge` and `authorization_code`.

When users return to your `redirect_url` you need to validate that the value for `code_challenge` is indeed the BASE64URL-safe-encoded SHA-256 hash of your stored `code_verifier` + `app_secret` (string concatenation).

Use the `authorization_code` + `code_verifier` parameter to exchange it for an `access_token` before starting making requests to the API.

### Retrieve Access Token

The `access_token` needs to be present in order to perform API requests on behalf of the user.

If your app has no `access_token` persisted for a given user it needs to retrieve the access_token for the given user by providing the `authorization_code` and `code_verifier`.

A single `authorization_code` can only be used once to retrieve an `access_token`.

```apib
### POST https://api.depay.com/apps/access_token

Retrieves latest access_token.

+ Request (application/json)
  
  POST https://api.depay.com/apps/access_token

  + Body
  
    {
      "app_id": "<YOUR APP ID>",
      "code_verifier": "<VALUE>",
      "authorization_code": "<VALUE>"
    }


+ Response 200 (application/json)
  
  + Body
  
    {
      "access_token": "332407c4-368a-42bc-bfd6-e6f5ca96d893",
      "refresh_token": "123e5f13-406e-4c6a-ab21-c7e01d168f97",
      "expires_at": "2022-11-10T14:30:00.436Z"
    }
```

This can only be done once for a single `authorization_code` as a given `authorization_code` will be invalidated once used.

You will need to restart the authentication flow if a `authorization_code` has been invalidated.

### Refresh Access Token

An `access_token` has an `expires_at` set. The `access_token` needs to be refreshed after it expired (e.g. `if expires_at > DateTime.now`).

The App API will start responding with the following once an `access_token` expired:

```apib

+ Response 401 (application/json)
  
  + Body
  
    { "error_code": "ACCESS_TOKEN_EXPIRED" }

```

In order to refresh the `access_token`, prepare a `refresh_challenge` as a BASE64URL-safe-encoded SHA-256 hash of your stored `refresh_token` + `app_secret` (string concatenation).

```apib
### POST https://api.depay.com/apps/access_token/refresh

Retrieves latest access_token.

+ Request (application/json)
  
  POST https://api.depay.com/apps/access_token/refresh

  + Body
  
    {
      "app_id": "<YOUR APP ID>",
      "access_token": "<YOUR STORED ACCESS TOKEN>",
      "refresh_challenge": "<YOUR PREPARED CHALLENGE>",
      "refresh_token": "<YOUR STORED REFRESH TOKEN>"
    }

+ Response 200 (application/json)
  
  + Body
  
    {
      "access_token": "332407c4-368a-42bc-bfd6-e6f5ca96d893",
      "refresh_token": "123e5f13-406e-4c6a-ab21-c7e01d168f97",
      "expires_at": "2022-11-10T14:30:00.436Z"
    }
```

This can only be done once for a single `refresh_token`.

You will need to restart the authentication flow if a `refresh_token` has been invalidated and you didn't manage to persist the next `refresh_token`.
