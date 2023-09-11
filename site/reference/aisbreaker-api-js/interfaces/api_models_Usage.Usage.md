[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/Usage](../modules/api_models_Usage.md) / Usage

# Interface: Usage

[api/models/Usage](../modules/api_models_Usage.md).Usage

Details about the used AI service.

## Table of contents

### Properties

- [engine](api_models_Usage.Usage.md#engine)
- [serviceHints](api_models_Usage.Usage.md#servicehints)
- [totalMilliseconds](api_models_Usage.Usage.md#totalmilliseconds)

## Properties

### engine

• **engine**: [`Engine`](api_models_Engine.Engine.md)

The AI service/engine used for this request+response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:10](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L10)

___

### serviceHints

• `Optional` **serviceHints**: `string`[]

List of human readable free-text hints or warnings from the service to the client developer(s).
The client should display them to the user.???

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:29](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L29)

___

### totalMilliseconds

• **totalMilliseconds**: `number`

Total number of milliseconds used for this request+response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Usage.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Usage.ts#L23)
