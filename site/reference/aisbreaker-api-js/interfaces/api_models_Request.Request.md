[aisbreaker-api-js - v0.0.42](../README.md) / [api/models/Request](../modules/api_models_Request.md) / Request

# Interface: Request

[api/models/Request](../modules/api_models_Request.md).Request

Send a message to the AI service and get the response.

## Table of contents

### Properties

- [abortSignal](api_models_Request.Request.md#abortsignal)
- [clientUser](api_models_Request.Request.md#clientuser)
- [conversationState](api_models_Request.Request.md#conversationstate)
- [inputs](api_models_Request.Request.md#inputs)
- [internOptions](api_models_Request.Request.md#internoptions)
- [requested](api_models_Request.Request.md#requested)
- [streamProgressFunction](api_models_Request.Request.md#streamprogressfunction)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignal`

If set, the request will be aborted when the signal is aborted.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L42)

___

### clientUser

• `Optional` **clientUser**: `string`

A unique identifier representing the end-user, which can help the AI service to monitor and detect abuse. ( e.g. https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids ) the value is opaque to the API. Do not use emails or other personally identifiable information (PII); instead use temporary identifies or hashed or encrypted values. ALternatively, this field can also be used for tracing and debugging purposes.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L31)

___

### conversationState

• `Optional` **conversationState**: `string`

The value presents the conversation, e.g. the history of all (relevant) messages of the conversation. Not set for the first call of a conversation. The `conversation_state` value is returned by previous call of the same conversation. The value is opaque to the client, it could be e.g. a conversation ID or the full conversation state as base64-encoded JSON string or ...

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:17](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L17)

___

### inputs

• **inputs**: [`Input`](api_models_Input.Input.md)[]

List of messages (prompts, media, ...) to send to the AI service for the conversation specified in `conversation_state`.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:12](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L12)

___

### internOptions

• `Optional` **internOptions**: `any`

Service implementation specific opts.

Try to avoid using them because they are NOT portable!!!

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:26](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L26)

___

### requested

• `Optional` **requested**: [`RequestedOptions`](api_models_RequestedOptions.RequestedOptions.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L19)

___

### streamProgressFunction

• `Optional` **streamProgressFunction**: [`StreamProgressFunction`](../modules/api_models_Request.md#streamprogressfunction)

If set to true, partial message deltas will be sent, like in ChatGPT.
Tokens will be sent as events as they become available.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/models/Request.ts:37](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts#L37)
