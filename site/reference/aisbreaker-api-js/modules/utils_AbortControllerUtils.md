[aisbreaker-api-js - v0.0.42](../README.md) / utils/AbortControllerUtils

# Module: utils/AbortControllerUtils

## Table of contents

### Functions

- [createSecondAbortControllerFromAbortController](utils_AbortControllerUtils.md#createsecondabortcontrollerfromabortcontroller)

## Functions

### createSecondAbortControllerFromAbortController

▸ **createSecondAbortControllerFromAbortController**(`firstAbortSignal?`): `AbortController`

Create a second Abortcontroller, if a seconds party wants to be able to abort

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstAbortSignal?` | `AbortSignal` |

#### Returns

`AbortController`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/AbortControllerUtils.ts:8](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/AbortControllerUtils.ts#L8)
