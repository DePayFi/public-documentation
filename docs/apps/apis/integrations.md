---
sidebar_position: 3
sidebar_label: Integrations
---

# Integrations

Access user's integrations.

You app is required to have the [`integrations.read`](/docs/apps/user-authentication#integrationsread) permission from the user's account.

## Shopify

Allows apps to access users' Shopify integrations and check which shops are connected to the DePay account.

```apib
### GET https://api.depay.com/apps/integrations/shopify

  + Request (application/json)
  
  GET https://api.depay.com/apps/integrations/shopify

  + Headers

    x-api-key: {api_key}
    Authorization: Bearer {access_token}
  
  + Body
    
    [
      { shop: 'web3-payments.myshopify.com' }
    ]
```

Every shop returned is connected to the user's DePay account.
