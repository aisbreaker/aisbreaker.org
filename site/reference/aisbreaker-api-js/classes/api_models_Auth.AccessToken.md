[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/Auth](../modules/api_models_Auth.md) / AccessToken

# Class: AccessToken

[api/models/Auth](../modules/api_models_Auth.md).AccessToken

Authentication data to use a specific AI service.

Shoud not be logged for security reasons.

## Implements

- [`Auth`](../interfaces/api_models_Auth.Auth.md)

## Table of contents

### Constructors

- [constructor](api_models_Auth.AccessToken.md#constructor)

### Properties

- [secret](api_models_Auth.AccessToken.md#secret)

## Constructors

### constructor

• **new AccessToken**(`secret`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Auth.ts:17](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Auth.ts#L17)

## Properties

### secret

• **secret**: `string`

If the service needs an access token/auth token/API key/access key it must be set here.

#### Implementation of

[Auth](../interfaces/api_models_Auth.Auth.md).[secret](../interfaces/api_models_Auth.Auth.md#secret)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Auth.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Auth.ts#L15)
