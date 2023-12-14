[aisbreaker-api-js - v0.1.15](../README.md) / [api/AIsError](../modules/api_AIsError.md) / AIsError

# Class: AIsError

[api/AIsError](../modules/api_AIsError.md).AIsError

Error class to be able to easily forward HTTP errors and error codes
via the (network) AIsBreaker API to the actual client.

## Hierarchy

- `Error`

  ↳ **`AIsError`**

## Implements

- [`AIsErrorData`](../interfaces/api_AIsError.AIsErrorData.md)

## Table of contents

### Constructors

- [constructor](api_AIsError.AIsError.md#constructor)

### Properties

- [message](api_AIsError.AIsError.md#message)
- [name](api_AIsError.AIsError.md#name)
- [stack](api_AIsError.AIsError.md#stack)
- [statusCode](api_AIsError.AIsError.md#statuscode)
- [statusText](api_AIsError.AIsError.md#statustext)
- [prepareStackTrace](api_AIsError.AIsError.md#preparestacktrace)
- [stackTraceLimit](api_AIsError.AIsError.md#stacktracelimit)

### Methods

- [getErrorObject](api_AIsError.AIsError.md#geterrorobject)
- [getObject](api_AIsError.AIsError.md#getobject)
- [captureStackTrace](api_AIsError.AIsError.md#capturestacktrace)
- [fromAIsErrorData](api_AIsError.AIsError.md#fromaiserrordata)
- [fromError](api_AIsError.AIsError.md#fromerror)
- [fromHTTPError](api_AIsError.AIsError.md#fromhttperror)

## Constructors

### constructor

• **new AIsError**(`message`, `statusCode`, `statusText?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `statusCode` | `number` |
| `statusText?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:38](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L38)

## Properties

### message

• **message**: `string`

#### Implementation of

[AIsErrorData](../interfaces/api_AIsError.AIsErrorData.md).[message](../interfaces/api_AIsError.AIsErrorData.md#message)

#### Inherited from

Error.message

#### Defined in

aisbreaker.org/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

aisbreaker.org/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

aisbreaker.org/node_modules/typescript/lib/lib.es5.d.ts:1069

___

### statusCode

• **statusCode**: `number`

#### Implementation of

[AIsErrorData](../interfaces/api_AIsError.AIsErrorData.md).[statusCode](../interfaces/api_AIsError.AIsErrorData.md#statuscode)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:35](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L35)

___

### statusText

• `Optional` **statusText**: `string`

#### Implementation of

[AIsErrorData](../interfaces/api_AIsError.AIsErrorData.md).[statusText](../interfaces/api_AIsError.AIsErrorData.md#statustext)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L36)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

aisbreaker-js/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

aisbreaker-js/node_modules/@types/node/globals.d.ts:13

## Methods

### getErrorObject

▸ **getErrorObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | { `message`: `string` ; `statusCode`: `number` ; `statusText?`: `string`  } |
| `error.message` | `string` |
| `error.statusCode` | `number` |
| `error.statusText?` | `string` |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:72](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L72)

___

### getObject

▸ **getObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `statusCode` | `number` |
| `statusText?` | `string` |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:64](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L64)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

aisbreaker-js/node_modules/@types/node/globals.d.ts:4

___

### fromAIsErrorData

▸ `Static` **fromAIsErrorData**(`data`): [`AIsError`](api_AIsError.AIsError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AIsErrorData`](../interfaces/api_AIsError.AIsErrorData.md) |

#### Returns

[`AIsError`](api_AIsError.AIsError.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:144](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L144)

___

### fromError

▸ `Static` **fromError**(`error`, `statusCode`, `context?`): [`AIsError`](api_AIsError.AIsError.md)

Convert existing Error into AIsError

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `Error` |  |
| `statusCode` | `number` | - |
| `context?` | `string` | optional context information/description/message prefix for error message |

#### Returns

[`AIsError`](api_AIsError.AIsError.md)

AIsError

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:139](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L139)

___

### fromHTTPError

▸ `Static` **fromHTTPError**(`httpError`, `context?`): [`AIsError`](api_AIsError.AIsError.md)

Convert existing (ky) HttpError into AIsError

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `httpError` | `HTTPError` |  |
| `context?` | `string` | optional context information/description/message prefix for error message |

#### Returns

[`AIsError`](api_AIsError.AIsError.md)

AIsError

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsError.ts:86](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsError.ts#L86)
