---
title: Removal request
description:
---

To order CDR from us you can make removal requests with the [CDR Platform API](/schema/redoc/#tag/CO-Removal/operation/Purchase%20CDR). All the removal requests you make during the month will be bundled in a single invoice, which you will receive after the end of that month. We will purchase the CDR from our partners once you paid your invoice and send you the corresponding certificates and confirmation as soon as the CDR is kicked off.

{% callout type="warning" title="Oh no! Something bad happened!" %}
Each removal request is a order and will appear on your invoice at the start of the next month. If you just want to know the price, then make a price request instead.
{% /callout %}

In the request body you can choose a combination of methods and request a different amount for each of them. The amount can go to as low as 1 gram. You can't list the same removal method twice and also you have to list minimum 1 method.

You can also include a customer id in the request, so that later your customers can easily find the certificate related to their purchase.

A transaction id will be returend for your records.
