[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/ResponseEvent](../modules/api_models_ResponseEvent.md) / ResponseEvent

# Interface: ResponseEvent

[api/models/ResponseEvent](../modules/api_models_ResponseEvent.md).ResponseEvent

Response received from the AI service. Can also be a partial response in the case of streaming/HTTP Server Side Events.

## Table of contents

### Properties

- [internResponse](api_models_ResponseEvent.ResponseEvent.md#internresponse)
- [outputs](api_models_ResponseEvent.ResponseEvent.md#outputs)

## Properties

### internResponse

• `Optional` **internResponse**: `any`

Service implementation specific reponse values.

Try to avoid using them because they are NOT portable!!!

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseEvent.ts:18](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseEvent.ts#L18)

___

### outputs

• **outputs**: [`Output`](api_models_Output.Output.md)[]

List of messages (prompts, media, ...) received from the AI service
in the context of the provided `conversation_state`.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/ResponseEvent.ts:11](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseEvent.ts#L11)
