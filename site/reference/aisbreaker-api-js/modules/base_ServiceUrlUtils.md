[aisbreaker-api-js - v0.1.15](../README.md) / base/ServiceUrlUtils

# Module: base/ServiceUrlUtils

## Table of contents

### Functions

- [getServiceUrl](base_ServiceUrlUtils.md#getserviceurl)

## Functions

### getServiceUrl

▸ **getServiceUrl**(`url`, `engine`, `serviceDefaults`): `string` \| `undefined`

Derive the service URL.

Details on: https://aisbreaker.org/docs/url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `undefined` \| `string` | The (base) URL specified in AIsServiceProps. |
| `engine` | `undefined` \| `string` | The engine derived form serviceId |
| `serviceDefaults` | [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md) |  |

#### Returns

`string` \| `undefined`

The URL to access the actual AI service.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/ServiceUrlUtils.ts:17](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/ServiceUrlUtils.ts#L17)
