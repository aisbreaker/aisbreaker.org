[aisbreaker-api-js - v0.1.15](../README.md) / [api/models/RequestedMediaImage](../modules/api_models_RequestedMediaImage.md) / RequestedMediaImage

# Interface: RequestedMediaImage

[api/models/RequestedMediaImage](../modules/api_models_RequestedMediaImage.md).RequestedMediaImage

An image response is requested. Here we specify the favored image result.

## Table of contents

### Properties

- [delivery](api_models_RequestedMediaImage.RequestedMediaImage.md#delivery)
- [format](api_models_RequestedMediaImage.RequestedMediaImage.md#format)
- [height](api_models_RequestedMediaImage.RequestedMediaImage.md#height)
- [width](api_models_RequestedMediaImage.RequestedMediaImage.md#width)

## Properties

### delivery

• `Optional` **delivery**: [`RequestedMediaImageDeliveryType`](../modules/api_models_RequestedMediaImage.md#requestedmediaimagedeliverytype)

favored delivery format. It\'s not guaranteed that the service uses it.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts:17](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts#L17)

___

### format

• `Optional` **format**: [`RequestedMediaImageFormatType`](../modules/api_models_RequestedMediaImage.md#requestedmediaimageformattype)

favored image format. It\'s not guaranteed that the service uses it.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts:21](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts#L21)

___

### height

• `Optional` **height**: `number`

favored height of output image. Respect of limits of your service and engine. It\'s not guaranteed that the result fits into it.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts:13](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts#L13)

___

### width

• `Optional` **width**: `number`

favored width of output image. Respect of limits of your service and engine. It\'s not guaranteed that the result fits into it.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts:9](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/RequestedMediaImage.ts#L9)
