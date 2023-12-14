[aisbreaker-api-js - v0.1.15](../README.md) / [api/models/OutputText](../modules/api_models_OutputText.md) / OutputText

# Interface: OutputText

[api/models/OutputText](../modules/api_models_OutputText.md).OutputText

A text message response from the AI service.

## Table of contents

### Properties

- [content](api_models_OutputText.OutputText.md#content)
- [index](api_models_OutputText.OutputText.md#index)
- [isDelta](api_models_OutputText.OutputText.md#isdelta)
- [isProcessing](api_models_OutputText.OutputText.md#isprocessing)
- [role](api_models_OutputText.OutputText.md#role)

## Properties

### content

• **content**: `string`

The actual text message.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputText.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputText.ts#L20)

___

### index

• **index**: `number`

Index of the message in the request -
relevant to distinguest multiple alternatives if request_ops.sample|number_of_alternative_responses>1.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputText.ts:10](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputText.ts#L10)

___

### isDelta

• `Optional` **isDelta**: `boolean`

If set to true, the message is a delta (and to append) to the previous message, usually used while streaming the reponse. If false, it\'s a full message.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputText.ts:25](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputText.ts#L25)

___

### isProcessing

• `Optional` **isProcessing**: `boolean`

If set to true, the message is still work in progress. If false, the message is the final response.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputText.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputText.ts#L30)

___

### role

• **role**: ``"assistant"``

Role of the (input) message creator.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/OutputText.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/OutputText.ts#L15)
