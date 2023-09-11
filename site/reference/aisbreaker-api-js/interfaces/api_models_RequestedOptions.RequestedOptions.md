[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/RequestedOptions](../modules/api_models_RequestedOptions.md) / RequestedOptions

# Interface: RequestedOptions

[api/models/RequestedOptions](../modules/api_models_RequestedOptions.md).RequestedOptions

General (not service specific) options for the AI service request and its response.

## Table of contents

### Properties

- [audio](api_models_RequestedOptions.RequestedOptions.md#audio)
- [image](api_models_RequestedOptions.RequestedOptions.md#image)
- [samples](api_models_RequestedOptions.RequestedOptions.md#samples)
- [text](api_models_RequestedOptions.RequestedOptions.md#text)
- [video](api_models_RequestedOptions.RequestedOptions.md#video)

## Properties

### audio

• `Optional` **audio**: `object`

Should be set if audio/s is/are expected in the response.

More details to be specified later.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts#L23)

___

### image

• `Optional` **image**: [`RequestedMediaImage`](api_models_RequestedMediaImage.RequestedMediaImage.md)

Should be set if image/s is/are expected in the response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts:16](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts#L16)

___

### samples

• `Optional` **samples**: `number`

Number of alternative responses to generate (aka `samples`).

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts:40](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts#L40)

___

### text

• `Optional` **text**: [`RequestedMediaText`](api_models_RequestedMediaText.RequestedMediaText.md)

Should be set if text/es is/are expected in the response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts:13](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts#L13)

___

### video

• `Optional` **video**: `object`

Should be set if video/s is/are expected in the response.

More details to be specified later.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedOptions.ts#L30)
