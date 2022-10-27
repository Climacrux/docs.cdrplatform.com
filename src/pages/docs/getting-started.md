---
title: Getting started with carbon removal
description: A simple tutorial on how to connect your business to a portfolio of carbon removers via our CDR API.
---

Learn how to use our CDR Platform and start purchasing carbon dioxide removal in only a few minutes. {% .lead %}

{% quick-links %}

{% quick-link title="Open API schema" icon="plugins" href="/docs/open-api-schema" description="Access a Swagger or Redoc UI to browse our API powered by the OpenAPI specification." /%}

{% /quick-links %}

---

## Quick start

Our carbon removal platform is designed to be simple to use and get you up and running fast.

### You need an API key

To make requests to our API you will need an API key. First go to the [API key section](https://api.cdrplatform.com/org/settings/api-keys/) of your organisation settings and generate an API key. Make sure to note it down somewhere safe as we will only show you your API key once.

{% callout title="Test API keys" %}
You can mark your API key as a 'test' key. These will always be prefixed with `test_` to make them easy to identify and requests made with these keys will not be charged. Perfect for testing your implementation before going live!
{% /callout %}

{% callout type="warning" title="Never share your API key" %}
API keys are used to make requests that will result in charges to you and your organisation.
**Make sure you keep your API key secret.** Don't share it with anyone or post it publicly online.
{% /callout %}

### Installing dependencies

Our API is available over HTTP using RESTful principals.

Currently we do not offer any language-specific SDKs so we recommend using common or builtin libraries for web requests in the language of your choice.

Some possible libraries:

| Language     | Libraries or packages to make HTTP requests                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Python 3     | [`urllib.request` (builtin)](https://docs.python.org/3/library/urllib.request.html#module-urllib.request) or[`requests`](https://requests.readthedocs.io/en/latest/) |
| Go           | [`net/http` (builtin)](https://pkg.go.dev/net/http)                                                                                                                  |
| Node.js      | [`HTTP` (builtin)](https://nodejs.org/api/http.html) or [`axios`](https://axios-http.com/)or [`node-fetch`](https://github.com/node-fetch/node-fetch)                |
| Ruby         | [`net/HTTP` (builtin)](https://docs.ruby-lang.org/en/3.0/Net/HTTP.html) or [`HTTP`](https://github.com/httprb/http)                                                  |
| Java         | [`HttpClient` (builtin)](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html)                                             |
| Command line | [`curl`](https://curl.se/) or [`httpie`](https://httpie.io/)                                                                                                         |

---

## Basic usage

In our test case we want to know the price of removing 100kg of CO₂ with a combination of kelp sinking and bio-oil injection.

_We will use the command line tool [HTTPie](https://httpie.io/) in our examples below._

### How to read the commands

Our commands below are typed into a terminal and we have a special syntax that's important to note:

- Lines beginning with a `$` represent a line in the terminal. The `$` should not be typed.
- Lines beginning with `$ #` represent a comment and are there to help provide additional information.

```shell
$ # This is a comment
$ echo "This is a command"
```

### What are we building?

Below is the final request that we will be explaining:

```shell
$ http POST https://api.cdrplatform.com/v1/cdr/price/ \
    'Authorization:Api-Key {{ your_api_key }}' \
    currency=usd \
    weight_unit=kg \
    items:='[
      {"method_type": "bio-oil", "cdr_amount": 50},
      {"method_type": "kelp-sinking", "cdr_amount": 50}
    ]'
```

### Choose your endpoint

We want to make a request to find out how much it costs to purchase some CO₂ removal.

```shell
$ # Make a request to calculate the CDR price
$ http POST https://api.cdrplatform.com/v1/cdr/price/
```

More detailed information is available in our [Open API schema](/docs/open-api-schema).

### Using the API key

The API key should be present in the HTTP `Authorization` header under the `Api-Key` value. In the example below, replace `{{ your_api_key }}` with the key you created [earlier in this document](#you-need-an-api-key).

```shell
$ http POST https://api.cdrplatform.com/v1/cdr/price/ \
    'Authorization:Api-Key {{ your_api_key }}'
```

More detailed information is available in our [docs for authentication](/docs/authentication-and-security).

### Making a price request

To receive a price request we need to supply some information:

- The currency we would like the price in (in our example: `usd`).
- The unit of weight we are sending (in our example: `kg`).
- Which removal methods we would like to use and the amount of each of them.
  - 50kg of CDR via bio-oil injection.
  - 50kg of CDR via kelp sinking.

```shell
$ http POST https://api.cdrplatform.com/v1/cdr/price/ \
    'Authorization:Api-Key {{ your_api_key }}' \
    currency=usd \
    weight_unit=kg \
    items:='[
      {"method_type": "bio-oil", "cdr_amount": 50},
      {"method_type": "kelp-sinking", "cdr_amount": 50}
    ]'
```

You should receive the following response (truncated HTTP Headers for simplicity) with a `HTTP 201` status code:

```
HTTP/1.1 201 Created

{
    "cost": {
        "items": [
            {
                "cdr_amount": 50,
                "cost": 3000,
                "method_type": "bio-oil"
            },
            {
                "cdr_amount": 50,
                "cost": 1250,
                "method_type": "kelp-sinking"
            }
        ],
        "removal": 4250,
        "total": 4620,
        "variable_fees": 370
    },
    "currency": "usd",
    "weight_unit": "kg"
}
```

The costs returned are in the lowest denominator of our selected currency (in our example US dollar cents) so to understand what we have got back:

| Name                                     | Cost   |
| ---------------------------------------- | ------ |
| Cost of CDR via bio-oil injection        | $30    |
| Cost of CDR via kelp-sinking             | $12.50 |
| Fees for this request                    | $3.70  |
| Total cost of removal (excl. fees)       | $42.50 |
| Total cost for this request (incl. fees) | $46.20 |

{% callout title="An explanation on our fees" %}
We make our cost as transparent as possible. You can clearly see & understand the cost of removal (charged by our partners) and our markup (the fees). These fees cover currency conversions, the running of our business and marketing to encourage more people and businesses to purchase carbon removal.

In the case that the cost of carbon removal goes down (e.g. processes becoming more efficient or bulk-buying discounts), we pass those savings directly on to you as soon as they happen.
{% /callout %}

More detailed information is available in our [docs for pricing and billing](/docs/pricing-and-billing).

### Making a request to purchase carbon removal

Now that we know how much our selected removal is going to cost, we can go ahead and make the purchase. The information required is exactly the same, all we need to do is switch from the pricing to the purchase endpoint.

From the pricing endpoint: `https://api.cdrplatform.com/v1/cdr/price/`

To the CDR purchasing endpoint: `https://api.cdrplatform.com/v1/cdr/`

```shell
$ http POST https://api.cdrplatform.com/v1/cdr/ \
    'Authorization:Api-Key {{ your_api_key }}' \
    currency=usd \
    weight_unit=kg \
    items:='[
      {"method_type": "bio-oil", "cdr_amount": 50},
      {"method_type": "kelp-sinking", "cdr_amount": 50}
    ]'
```

Upon successfully ordering your carbon removal you will receive the following response (truncated HTTP Headers for simplicity) with a `HTTP 201` status code:

```
HTTP/1.1 201 Created

{
    "transaction_uuid": "044e60ec-3a7b-40be-b215-9d998810fafa"
}
```

The transaction UUID is unique to your removal request and can be stored in your records to query at a later date.

{% callout title="Paying for your removal" %}
You have now successfully requested to buy some carbon removal. At the end of the month, all of your removal requests will be aggregated together and you shall receive an invoice for them all.

Once we have confirmed the payment of your invoice we shall order the CO₂ removal from our partners and issue you with unique certificates for every removal request as proof of your commitment to our planet.
{% /callout %}

More detailed information is available in our [docs for removal requests](/docs/removal-request).

---

## Getting help

Things go wrong (especially in IT!) - if you're having troubles at all please reach out using one of the methods below and we will happily help you.

### Submit an issue

Our [API](https://github.com/Climacrux/api.cdrplatform.com) and our [documentation](https://github.com/Climacrux/docs.cdrplatform.com) is open-source! If you are comfortable with GitHub you can open an issue directly and help accelerate the progress of this project.

### Contact us

You can contact us with feedback, suggestions or problems at: [hello@cdrplatform.com](mailto:hello@cdrplatform.com)

We would love to hear from you!
