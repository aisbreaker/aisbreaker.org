[aisbreaker-api-js - v0.1.15](../README.md) / [api/models/Input](../modules/api_models_Input.md) / Input

# Interface: Input

[api/models/Input](../modules/api_models_Input.md).Input

A message sent to the AI service. 

Hint: This is usually NOT a response to a previous request/reponse of the same conversation,
      because previous messages are stored in the conversationState.

## Table of contents

### Properties

- [audio](api_models_Input.Input.md#audio)
- [image](api_models_Input.Input.md#image)
- [text](api_models_Input.Input.md#text)
- [video](api_models_Input.Input.md#video)

## Properties

### audio

• `Optional` **audio**: `any`

An input message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Input.ts:25](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Input.ts#L25)

___

### image

• `Optional` **image**: [`InputImage`](api_models_InputImage.InputImage.md)

An input message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Input.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Input.ts#L20)

___

### text

• `Optional` **text**: [`InputText`](api_models_InputText.InputText.md)

An input message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Input.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Input.ts#L15)

___

### video

• `Optional` **video**: `any`

An input message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Input.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Input.ts#L30)
