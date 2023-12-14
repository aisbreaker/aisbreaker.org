[aisbreaker-api-js - v0.1.15](../README.md) / [api/models/Usage](../modules/api_models_Usage.md) / Usage

# Interface: Usage

[api/models/Usage](../modules/api_models_Usage.md).Usage

Details about the used AI service.

## Table of contents

### Properties

- [service](api_models_Usage.Usage.md#service)
- [totalMilliseconds](api_models_Usage.Usage.md#totalmilliseconds)
- [warnings](api_models_Usage.Usage.md#warnings)

## Properties

### service

• **service**: [`Service`](api_models_Service.Service.md)

The AI service/engine used for this request+response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:10](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L10)

___

### totalMilliseconds

• **totalMilliseconds**: `number`

Total number of milliseconds used for this request+response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L23)

___

### warnings

• `Optional` **warnings**: `string`[]

List of human readable free-text hints or warnings from the service to the client developer(s).
The client should display them to only to app developers, not to app users.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:29](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L29)
