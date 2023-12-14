[aisbreaker-api-js - v0.1.15](../README.md) / [utils/ConversationStateUtils](../modules/utils_ConversationStateUtils.md) / DefaultConversationState

# Class: DefaultConversationState

[utils/ConversationStateUtils](../modules/utils_ConversationStateUtils.md).DefaultConversationState

Helper class to store and retrieve messages of a conversation,

The messages are stored in memory and can be imported from/exported to
a JSON string or a base64-encoded JSON string of a ConversationState object.

## Implements

- [`ConversationState`](../interfaces/utils_ConversationStateUtils.ConversationState.md)

## Table of contents

### Constructors

- [constructor](utils_ConversationStateUtils.DefaultConversationState.md#constructor)

### Properties

- [messages](utils_ConversationStateUtils.DefaultConversationState.md#messages)

### Methods

- [addInputs](utils_ConversationStateUtils.DefaultConversationState.md#addinputs)
- [addMessage](utils_ConversationStateUtils.DefaultConversationState.md#addmessage)
- [addOutputs](utils_ConversationStateUtils.DefaultConversationState.md#addoutputs)
- [getMessages](utils_ConversationStateUtils.DefaultConversationState.md#getmessages)
- [toBase64](utils_ConversationStateUtils.DefaultConversationState.md#tobase64)
- [toJSON](utils_ConversationStateUtils.DefaultConversationState.md#tojson)
- [empty](utils_ConversationStateUtils.DefaultConversationState.md#empty)
- [fromBase64](utils_ConversationStateUtils.DefaultConversationState.md#frombase64)
- [fromJSON](utils_ConversationStateUtils.DefaultConversationState.md#fromjson)

## Constructors

### constructor

• **new DefaultConversationState**(`converstationState`)

Construct from a base64 string which contains a ConversationState

#### Parameters

| Name | Type |
| :------ | :------ |
| `converstationState` | [`ConversationState`](../interfaces/utils_ConversationStateUtils.ConversationState.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:22](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L22)

## Properties

### messages

• **messages**: [`Message`](../interfaces/api_models_Message.Message.md)[]

#### Implementation of

[ConversationState](../interfaces/utils_ConversationStateUtils.ConversationState.md).[messages](../interfaces/utils_ConversationStateUtils.ConversationState.md#messages)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L19)

## Methods

### addInputs

▸ **addInputs**(`inputs`): `void`

Add content to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`Input`](../interfaces/api_models_Input.Input.md)[] |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:100](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L100)

___

### addMessage

▸ **addMessage**(`message`): `void`

Add content to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/api_models_Message.Message.md) |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:93](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L93)

___

### addOutputs

▸ **addOutputs**(`outputs`): `void`

Add content to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputs` | [`Output`](../interfaces/api_models_Output.Output.md)[] |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:108](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L108)

___

### getMessages

▸ **getMessages**(): [`Message`](../interfaces/api_models_Message.Message.md)[]

Get content from the conversaton.

#### Returns

[`Message`](../interfaces/api_models_Message.Message.md)[]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:88](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L88)

___

### toBase64

▸ **toBase64**(): `string`

Export to JSON string of a ConversationState object

#### Returns

`string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:77](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L77)

___

### toJSON

▸ **toJSON**(): `string`

Export to JSON string of a ConversationState object

#### Returns

`string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:69](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L69)

___

### empty

▸ `Static` **empty**(): [`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

Create a new/empty ConversationState

#### Returns

[`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:27](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L27)

___

### fromBase64

▸ `Static` **fromBase64**(`base64?`): [`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

Import from base64-encode JSON string of a ConversationState object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64?` | `string` |

#### Returns

[`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:53](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L53)

___

### fromJSON

▸ `Static` **fromJSON**(`json?`): [`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

Import from JSON string of a ConversationState object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `json?` | `string` |

#### Returns

[`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts:34](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ConversationStateUtils.ts#L34)
