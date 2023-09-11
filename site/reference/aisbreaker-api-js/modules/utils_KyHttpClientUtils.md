[aisbreaker-api-js - v0.0.42](../README.md) / utils/KyHttpClientUtils

# Module: utils/KyHttpClientUtils

## Table of contents

### Functions

- [kyHooksBeforeErrorToReduceLogging](utils_KyHttpClientUtils.md#kyhooksbeforeerrortoreducelogging)
- [kyHooksToReduceLogging](utils_KyHttpClientUtils.md#kyhookstoreducelogging)
- [kyOnDownloadProgress4onMessage](utils_KyHttpClientUtils.md#kyondownloadprogress4onmessage)
- [tryToCreateAIsErrorFromKyResponse](utils_KyHttpClientUtils.md#trytocreateaiserrorfromkyresponse)

## Functions

### kyHooksBeforeErrorToReduceLogging

▸ **kyHooksBeforeErrorToReduceLogging**(`debug?`): (`error`: `HTTPError`) => `Promise`<`HTTPError`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `debug?` | `boolean` |

#### Returns

(`error`: `HTTPError`) => `Promise`<`HTTPError`\>[]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts:100](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts#L100)

___

### kyHooksToReduceLogging

▸ **kyHooksToReduceLogging**(`debug?`): `Object`

Default hook for ky.*()

Reduce logging spam by deleting some ky error details in the case of an HTTPError

#### Parameters

| Name | Type |
| :------ | :------ |
| `debug?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `beforeError` | (`error`: `HTTPError`) => `Promise`<`HTTPError`\>[] |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts:94](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts#L94)

___

### kyOnDownloadProgress4onMessage

▸ **kyOnDownloadProgress4onMessage**(`onMessage`): (`progress`: `DownloadProgress`, `chunk`: `Uint8Array`) => `void`

Mapping onMessage() event handler to onDownloadProgress().
Useful for ky.post() / onDownloadProgress

#### Parameters

| Name | Type |
| :------ | :------ |
| `onMessage` | (`message`: `EventSourceMessage`) => `void` |

#### Returns

`fn`

▸ (`progress`, `chunk`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | `DownloadProgress` |
| `chunk` | `Uint8Array` |

##### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts:60](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts#L60)

___

### tryToCreateAIsErrorFromKyResponse

▸ **tryToCreateAIsErrorFromKyResponse**(`response`): `Promise`<[`AIsError`](../classes/api_AIsError.AIsError.md) \| `undefined`\>

Throws an AIsError if the response contains an error, otherwise it just returns

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `any` | ky response, potenially with an JSON-encoded AIsError |

#### Returns

`Promise`<[`AIsError`](../classes/api_AIsError.AIsError.md) \| `undefined`\>

the AIsError if the response contains an error, otherwise undefined

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts:145](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/KyHttpClientUtils.ts#L145)
