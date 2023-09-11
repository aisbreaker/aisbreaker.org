[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/Request](../modules/api_models_Request.md) / ClientRequest

# Interface: ClientRequest

[api/models/Request](../modules/api_models_Request.md).ClientRequest

Same as `Request` but with more optional fields.

## Table of contents

### Properties

- [clientUser](api_models_Request.ClientRequest.md#clientuser)
- [conversationState](api_models_Request.ClientRequest.md#conversationstate)
- [inputs](api_models_Request.ClientRequest.md#inputs)
- [internOptions](api_models_Request.ClientRequest.md#internoptions)
- [requested](api_models_Request.ClientRequest.md#requested)
- [streamProgressFunction](api_models_Request.ClientRequest.md#streamprogressfunction)
- [text](api_models_Request.ClientRequest.md#text)

## Properties

### clientUser

• `Optional` **clientUser**: `string`

A unique identifier representing the end-user, which can help the AI service to monitor and detect abuse. ( e.g. https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids ) the value is opaque to the API. Do not use emails or other personally identifiable information (PII); instead use temporary identifies or hashed or encrypted values. ALternatively, this field can also be used for tracing and debugging purposes.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:82](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L82)

___

### conversationState

• `Optional` **conversationState**: `string`

The value presents the conversation, e.g. the history of all (relevant) messages of the conversation. Not set for the first call of a conversation. The `conversation_state` value is returned by previous call of the same conversation. The value is opaque to the client, it could be e.g. a conversation ID or the full conversation state as base64-encoded JSON string or ...

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:68](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L68)

___

### inputs

• `Optional` **inputs**: [`Input`](api_models_Input.Input.md)[]

List of messages (prompts, media, ...) to send to the AI service for the conversation specified in `conversation_state`.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:52](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L52)

___

### internOptions

• `Optional` **internOptions**: `any`

Service implementation specific opts.

Try to avoid using them because they are NOT portable!!!

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:77](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L77)

___

### requested

• `Optional` **requested**: [`RequestedOptions`](api_models_RequestedOptions.RequestedOptions.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:70](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L70)

___

### streamProgressFunction

• `Optional` **streamProgressFunction**: [`StreamProgressFunction`](../modules/api_models_Request.md#streamprogressfunction)

If set to true, partial message deltas will be sent, like in ChatGPT.  Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:87](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L87)

___

### text

• `Optional` **text**: `string`

Convenience field for sending a single text message to the AI service.
It is equivalent to `inputs: [{text: {role: 'user', content: text}}]`.

Exactly one of either `text` or `inputs` must be set.

In a _normalized_ request, the `text` field is never set, 
i.e. normal service implementation can ignore this field.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:63](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L63)
