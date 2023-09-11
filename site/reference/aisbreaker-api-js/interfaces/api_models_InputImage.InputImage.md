[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/InputImage](../modules/api_models_InputImage.md) / InputImage

# Interface: InputImage

[api/models/InputImage](../modules/api_models_InputImage.md).InputImage

An image message sent to the AI service.

## Table of contents

### Properties

- [base64](api_models_InputImage.InputImage.md#base64)
- [role](api_models_InputImage.InputImage.md#role)
- [url](api_models_InputImage.InputImage.md#url)

## Properties

### base64

• `Optional` **base64**: `string`

The image, base64-encoded; either url or base64 must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputImage.ts:14](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputImage.ts#L14)

___

### role

• **role**: [`InputImageRoleType`](../modules/api_models_InputImage.md#inputimageroletype)

Role of the (input) message creator/input image. * \"user\": The image to edit or to respond to. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask. * \"mask\": An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where image should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as image.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputImage.ts:9](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputImage.ts#L9)

___

### url

• `Optional` **url**: `string`

The image, url-encoded; either url or base64 must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputImage.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputImage.ts#L19)
