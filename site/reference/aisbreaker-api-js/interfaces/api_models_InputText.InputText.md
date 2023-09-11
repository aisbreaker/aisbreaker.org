[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/InputText](../modules/api_models_InputText.md) / InputText

# Interface: InputText

[api/models/InputText](../modules/api_models_InputText.md).InputText

A text message sent to the AI service.

## Table of contents

### Properties

- [content](api_models_InputText.InputText.md#content)
- [role](api_models_InputText.InputText.md#role)
- [weight](api_models_InputText.InputText.md#weight)

## Properties

### content

• **content**: `string`

The text message.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputText.ts:14](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputText.ts#L14)

___

### role

• **role**: [`InputTextRoleType`](../modules/api_models_InputText.md#inputtextroletype)

Role of the (input) message creator.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputText.ts:9](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputText.ts#L9)

___

### weight

• `Optional` **weight**: `number`

1.0 means normal prompt (default), 0.0 means ignore, -1.0 means negative prompt; >1.0 or <-1.0 applifies the prompt

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/InputText.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/InputText.ts#L19)
