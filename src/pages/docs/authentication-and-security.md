---
title: Authenticating with the CDR Platform
description: The CDR Platform uses API keys to authenticate. Find out how to generate and revoke them here.
---

## API keys for authentication

To access the API you need to have a valid (not revoked or expired) API key that is associated to an [organisation](/docs/organisation). These API keys must be added with every request and serve two purposes:

1. They ensure only authenticated users can access the API.
1. When making a CDR purchase request they associate the request with the organisation that owns the API key.

---

## Getting an API key

API keys can be generated and revoked from the [API key section](https://api.cdrplatform.com/org/settings/api-keys/) of your organisation.

API keys have the following attributes:

| Name        | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| name        | A human readable name to help identify the API key in the future.         |
| revoked     | Whether the API key is revoked is not.                                    |
| prefix      | A visible part of the API key used to help identify keys from each other. |
| expiry date | A date in the future that the API will not work after.                    |

{% callout title="You should know!" %}
You will only see your API key once at the time of creation so make sure you save it somewhere safe (we use [Bitwarden](https://bitwarden.com/)).
{% /callout %}

### Limits

Every organisation can have a maximum of 5 API keys.

### Test API keys

To enable development without incurring any costs we provide the option to generate a test API key.

Test API keys are all prefixed with `test_` and will behave the same as production API keys except any usage made with them will not result in charges on the invoice.

---

## Using the API key

API keys must be sent in the HTTP `Authorization` header of every request under the type `Api-Key`.

Example HTTP header:

```
Authorization: Api-Key {{ your_api_key }}
```

---

## Security

{% callout type="warning" title="Never share your API key" %}
Your API key is used to make binding purchase requests. Make sure you keep the API secret. Don't share it with anyone or post it publicly online.
{% /callout %}

### Storing your API key

Your API key will only be shown to you once upon generation. We do not keep the raw API key, instead storing a hashed version so it is impossible for you to see your API again in the portal or for us to send it to you if you lose it. Please store it somewhere secure.

{% callout title="Hashing" %}
We take security very seriously so your API keys are stored using the [Argon2id](https://en.wikipedia.org/wiki/Argon2) password hashing method so it is resistant to cracking and side-channel attacks in the worst case that our database is compromised.
{% /callout %}

### Rate limiting

By default every API key is rate limited to 5000 requests per hour, calculated across all endpoints. If you require a higher limit to this please reach out to us explaining your use case at [hello@cdrplatform.com](mailto:hello@cdrplatform.com).

### Encryption in transit

Our API uses TLS encryption for HTTP connections (HTTPS) with certificates provided by [LetsEncrypt](https://letsencrypt.org/).

---

## FAQ

### What happens if I lose my API key?

Due to our security practices we do not keep a copy of your API key anywhere and we cannot look this up for you. If you lose or forget your API key please revoke it and generate a replacement key in your [organisation settings](https://api.cdrplatform.com/org/settings/api-keys/).

### What happens if my API key goes public?

If your API key is compromised or goes public you must instantly revoke it from the [organisation settings](https://api.cdrplatform.com/org/settings/api-keys/) page.

There is a chance that a malicious actor has used your API to purchase carbon removal on your behalf. Please immediately contact us at [hello@cdrplatform.com](mailto:hello@cdrplatform.com) with details of your situation and we will work with you to minimise any damage done to you and your organisation.

### Can my organisation have multiple API keys?

Yes, your organisation can create and use several API keys, which will all be linked to it.
