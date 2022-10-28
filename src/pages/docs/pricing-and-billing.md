---
title: Pricing and billing
description: After you request carbon removal, when do you receive an invoice and how much will you pay?
---

## Pricing information

Removing carbon dioxide from the atmosphere is an expensive process. To remove your requested carbon we charge a price that consists of the **carbon removal cost** and **Climacrux fees**.

The carbon removal cost consists of the sum of the cost to remove the amounts of CDR with the methods of your choice and goes to our removal partners without us taking a cut. The Climacrux fees consist of a variable and a fixed part - these cover currency conversion fees; taxes; business running costs - hosting, licenses, administration, webpage maintenance and customer support; product improvement - partner acquisition, adding and improving features; and spreading the word to make a bigger impact.

In the response of the [price request API](/docs/open-api-schema) we transparently provide the cost breakdown as well as the total cost of the CDR you requested.

{% callout title="Fees" %}
A pricing request will include the removal cost and variable fees however will **not** include the fixed fee. This is only charged upon issuance of an invoice, not per request.
{% /callout %}

### The cost of carbon removal

The removal cost per tonne differs between the [removal methods](/docs/removal-method) and may change over time (depending on bulk purchase discounts, demand and maturity) however below we provide a summary as of October 2022:

| Removal method                 | Cost per tonne |
| ------------------------------ | -------------- |
| Forestation                    | $5.52          |
| Direct air capture and storage | $1,042.71      |
| Kelp sinking                   | $250           |
| Bio-oil underground injection  | $600           |
| Olivine distribution           | $113.62        |

_Note: These costs are subject to changes due to currency conversion. Accurate prices for your specific removal request including fees are available when making a pricing request._

### Climacrux adds a service fee on top

#### Variable fee

Of the total removal cost, 8% is reserved for Climacrux service and processing fees. So if a removal request is made with a total cost of $100 this results in $92 going directly to our removal partners and $8 going to Climacrux.

#### Flat fee

For every invoice issued a flat fee of 10 USD/EUR/GBP/CHF is added.

---

## Billing

We bundle all your [removal requests](/docs/removal-request) over the month and then issue an invoice for that month in the start of the following month. On each invoice the flat fee will be added only once - not per removal request.

The invoice will be sent to the organisations billing contact and only after the invoice has been paid will we order the CDR from our partners and [issue a certificate](/docs/removal-certificate) for each removal request.

A detailed breakdown of all removal requests that are part of an invoice is available upon request.

### Minimum invoice threshold

An invoice will be only sent if a threshold of 100 USD/EUR/GBP/CHF is crossed. If that is not the case we will bundle your requests over several months until the threshold is exceeded.

This optimises effort for both you and us and means that low users of the service do not receive a lot of invoices and fixed Climacrux fees.

{% callout title="Fixed fees" %}
Climacrux fixed fees are only added per invoice. If you do not cross the billing threshold and do not receive an invoice you will not be charged the Climacrux fixed fees. Only once the billing threshold is surpassed and an invoiced is issued will the flat fees be added.
{% /callout %}

### Example - your monthly invoice surpasses the billing threshold

Your organisation makes 100 removal requests in March, removing a total of 5 tonnes of carbon dioxide with a combined cost of $3,000 including the Climacrux variable fees.

At the start of the April we would issue an invoice with the following breakdown:

| Invoice item  | Cost on invoice |
| ------------- | --------------- |
| Removal cost  | $2,760          |
| Variable fees | $240            |
| Fixed fee     | $10             |
| **Total**     | **$3,010**      |

### Example - you have low usage and do not cross the billing threshold

Your organisation makes 3 removal requests in April, removing a total of 50 kg of carbon dioxide with a combined cost of $2.50 include the Climacrux variable fees.

As this amount is under the [billing threshold](#minimum-invoice-threshold) you will not receive an invoice in the month of May and these removal requests will roll-over until you have a total that crosses the billing threshold.

### Payment via bank transfer

After receiving an invoice we provide the option to pay via bank transfer. Please pay within the payment window specified on the invoice and make sure to include the invoice ID as payment reference so we can mark your invoice as paid.

For your reference, our account information can be found below:

**Account holder:** Climacrux GmbH

| Payment currency | Account information                                                                  |
| ---------------- | ------------------------------------------------------------------------------------ |
| USD              | Routing number: `084009519` Account number: `9600001790892638`                       |
| EUR              | IBAN: `BE12 9672 4401 6192`                                                          |
| GBP              | IBAN: `GB03 TRWI 2314 7096 5565 66` Sort code: `23-14-70` Account number: `96556566` |
| CHF              | IBAN: `CH49 0483 5279 7844 3100 0`                                                   |

{% callout type="warning" title="Include the invoice ID" %}
Make sure you include the invoice ID in the reference when paying the invoice via bank transfer. If you don't do this it may delay the status of your purchase.
{% /callout %}

Payment via bank transfer in one of our supported currencies incurs no additional fees however your bank or institution may charge for any currency conversions.

### Payment via credit card

A link to our payment processor ([Stripe](https://stripe.com/)) will be included with the invoice to offer the possibility to pay your invoice via credit card.

Please note that Stripe does have an additional payment processing fee of 2.9% which will be added to your invoice.
