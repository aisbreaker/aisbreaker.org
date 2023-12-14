[aisbreaker-api-js - v0.1.15](../README.md) / [api/models/OutputImage](../modules/api_models_OutputImage.md) / OutputImage

# Interface: OutputImage

[api/models/OutputImage](../modules/api_models_OutputImage.md).OutputImage

An image response from the AI service.

## Table of contents

### Properties

- [base64](api_models_OutputImage.OutputImage.md#base64)
- [index](api_models_OutputImage.OutputImage.md#index)
- [isProcessing](api_models_OutputImage.OutputImage.md#isprocessing)
- [role](api_models_OutputImage.OutputImage.md#role)
- [url](api_models_OutputImage.OutputImage.md#url)

## Properties

### base64

• `Optional` **base64**: `string`

The image, base64-encoded; either url or base64 must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputImage.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputImage.ts#L20)

___

### index

• **index**: `number`

Index of the message in the request - 
relevant to distinguest multiple alternatives if request_ops.sample|number_of_alternative_responses>1.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputImage.ts:10](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputImage.ts#L10)

___

### isProcessing

• `Optional` **isProcessing**: `boolean`

If set to true, the image is still work in progress. If false, the image is the final response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputImage.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputImage.ts#L30)

___

### role

• **role**: ``"assistant"``

Role of the (output) message creator/input image.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputImage.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputImage.ts#L15)

___

### url

• `Optional` **url**: `string`

The image, url-encoded; either url or base64 must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputImage.ts:25](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputImage.ts#L25)
