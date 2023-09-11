[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/ResponseFinal](../modules/api_models_ResponseFinal.md) / ResponseFinal

# Interface: ResponseFinal

[api/models/ResponseFinal](../modules/api_models_ResponseFinal.md).ResponseFinal

Full/final/last response received for a request from the AI service.

## Table of contents

### Properties

- [conversationState](api_models_ResponseFinal.ResponseFinal.md#conversationstate)
- [internResponse](api_models_ResponseFinal.ResponseFinal.md#internresponse)
- [outputs](api_models_ResponseFinal.ResponseFinal.md#outputs)
- [usage](api_models_ResponseFinal.ResponseFinal.md#usage)

## Properties

### conversationState

• `Optional` **conversationState**: `string`

The value presents the conversation, i.e. the history of all (relevant) messages of the conversation. Not set for the first call of a conversation. The `conversation_state` value is returned by previous call of the same conversation. The value is opaque to the client, it could be e.g. a conversation ID or the full conversation state as base64-encoded JSON string or ...

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts:16](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts#L16)

___

### internResponse

• `Optional` **internResponse**: `any`

Service implementation specific reponse values.

Try to avoid using them because they are NOT portable!!!

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts:25](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts#L25)

___

### outputs

• **outputs**: [`Output`](api_models_Output.Output.md)[]

List of messages (prompts, media, ...) received from the AI service in the context of `conversation_state`.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts:11](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts#L11)

___

### usage

• **usage**: [`Usage`](api_models_Usage.Usage.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts:18](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts#L18)
