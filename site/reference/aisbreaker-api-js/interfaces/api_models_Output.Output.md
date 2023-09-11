[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/Output](../modules/api_models_Output.md) / Output

# Interface: Output

[api/models/Output](../modules/api_models_Output.md).Output

A message sent to the AI service. 

Hint: This is usually NOT a response to a previous request/reponse of the same conversation,
      because previous messages are stored in the conversation_state.

## Table of contents

### Properties

- [audio](api_models_Output.Output.md#audio)
- [image](api_models_Output.Output.md#image)
- [text](api_models_Output.Output.md#text)
- [video](api_models_Output.Output.md#video)

## Properties

### audio

• `Optional` **audio**: `any`

An Output message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Output.ts:25](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Output.ts#L25)

___

### image

• `Optional` **image**: [`OutputImage`](api_models_OutputImage.OutputImage.md)

An Output message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Output.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Output.ts#L20)

___

### text

• `Optional` **text**: [`OutputText`](api_models_OutputText.OutputText.md)

An Output message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Output.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Output.ts#L15)

___

### video

• `Optional` **video**: `any`

An Output message; either text or image or audio or video must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Output.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Output.ts#L30)
