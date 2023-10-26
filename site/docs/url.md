---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Service URL
===========

... is the URL of the actual AI service API.

The service URL can be specified as part of the [Service Properties](./service-properties). If it's not specified then the service specific default is used.

The final service URL will then be caculated by replacing the `${engine}` placeholder (if used in the URL) with the actual engine name.

The default URLs (and more) can be found in the [Services](./services) list.

Examples
--------

See [Service Properties (Examples)](service-properties#examples)
