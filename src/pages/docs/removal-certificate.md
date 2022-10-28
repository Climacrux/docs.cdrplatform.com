---
title: We issue removal certificates as proof of your commitment to help the planet
description: Climacrux removal certificates are unique and issued for every removal request so you can prove or verify a CDR purchase.
---

For each request you make and pay for, a unique certificate will be issued by us. The certificate will show the requested CDR amount, breakdown and date. Each certificate will have an unique ID that can be used to look it up online and confirm it.

Optionally a custom display name can be shown on the certificate otherwise the organisation name will be displayed.

Certificates are available for viewing online allowing people to verify the quantity and removal methods used in a CDR purchase.

{% callout type="warning" title="You should know!" %}
Certificates will only be issued for a removal request after the corresponding invoice is paid. If [billing thresholds](/docs/pricing-and-billing#minimum-invoice-threshold) for a month are not met and no invoice is issued it may take some time before the billing threshold is crossed, the invoice is paid and a certificate is available.
{% /callout %}

## Your customers can have their own certificates

If you are enabling your customers to purchase carbon removal, it is important they can verify that you have purchased what you claimed to have purchased and discover what stage their removal is in.

That is why when making a removal request you have the possibility of submitting some extra (optional) fields:

| Field                    | Purpose                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Client reference ID      | A unique string generated and sent by you that can be used to look up the request in the future. e.g. a customer ID or order ID. |
| Certificate display name | A custom name that will appear on the generated certificate. e.g. your customer who purchased the carbon removal.                |

More information is available in the [API reference](/docs/open-api-schema) under the CDR Purchase endpoint.

{% callout title="Future features" %}
It is not possible to currently query requests based on your provided reference ID however we recommend doing it as early as possible to make the connection between your customers and the removal purchases.

You can also save the returned transaction UUID with your records and use this to query in the future.
{% /callout %}
