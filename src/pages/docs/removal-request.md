---
title: Requesting CO₂ removal
description: Use the CDR Platform API to purchase carbon dioxide removal from a variety of removal partners. Starting at one gram.
---

## Purchasing carbon removal with an API

To order CDR from us you can make removal requests with the [CDR Platform API](/docs/open-api-schema). All the removal requests you make during the month will be bundled in a single invoice, which you will receive after the end of that month. We will purchase the CDR from our partners once you have paid your outstanding invoices and send you the corresponding certificates and confirmation as soon as the CDR is kicked off.

{% callout type="warning" title="Committing to buy" %}
Each removal request is an order and a commitment to purchase and pay. These removal requests will be invoiced to your organisation. If you just want to know the price of a removal request then use the CDR Pricing endpoint.
{% /callout %}

Complete information on the required and optional fields of all endpoints is available from the [API specification](/docs/open-api-schema).

---

## Summary of the API endpoint

| Field         | Required? | Description                                                                                                  |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `weight_unit` | REQUIRED  | What weight are you ordering in? Grams (`g`), Kilograms (`kg`) or Tonnes (`t`)                               |
| `currency`    | REQUIRED  | What currency are you ordering in? `usd`, `eur`, `gbp`, `chf` are supported.                                 |
| `items`       | REQUIRED  | A list of at least 1 objects containing a removal `method_type` and the `cdr_amount` (in the `weight_unit`). |

In the request body you can choose a combination of methods and request a different amount for each of them. The amount can go to as low as 1 gram. You can't list the same removal method twice and also you have to provide 1 removal method minimum.

A unique transaction ID will be returned for your records and can be used to lookup specific removal requests in the future.

### Example of purchasing carbon removal

Remove 100kg of carbon removal. 80kg via kelp-sinking and 20kg via bio-oil injection. Pay in USD.

```json
{
  "weight_unit": "kg",
  "currency": "usd",
  "items": [
    { "method_type": "kelp-sinking", "cdr_amount": 80 },
    { "method_type": "bio-oil", "cdr_amount": 20 }
  ]
}
```

Expected response (note, your transaction ID will be different):

```json
{
  "transaction_uuid": "57c0f2c3-d010-4962-9471-88cdfeea4ac8"
}
```

---

## Connect a removal request to your customer information

You can optionally link a removal request to your customer information, enabling your customers to independently verify their removal purchase and status. This is achieved by using the following optional fields:

| Field                      | Required? | Description                                                                                                                     |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `client_reference_id`      | OPTIONAL  | An unique ID provided by you to link a removal request to your customer (e.g. a customer ID or order ID).                       |
| `certificate_display_name` | OPTIONAL  | The name that should be displayed on the [removal certificate](/docs/removal-certificate) that will be issued for this request. |

### Example of linking a removal request to a customer

Extending our example [from earlier](#example-of-purchasing-carbon-removal), now we are purchasing on behalf of our customer "Jane Doe" who purchased carbon removal from us to remove the footprint of their shipping in order number "3923200221752".

We want to make sure our customer has a certificate issued to them and enable them to look up the removal request for their order:

```json
{
  "weight_unit": "kg",
  "currency": "usd",
  "items": [
    { "method_type": "kelp-sinking", "cdr_amount": 80 },
    { "method_type": "bio-oil", "cdr_amount": 20 }
  ],
  "client_reference_id": "3923200221752",
  "certificate_display_name": "Jane Doe"
}
```

Expected response (note, your transaction ID will be different):

```json
{
  "transaction_uuid": "57c0f2c3-d010-4962-9471-88cdfeea4ac8"
}
```
