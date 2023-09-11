[aisbreaker-api-js - v0.0.42](../README.md) / utils/logger

# Module: utils/logger

## Table of contents

### Variables

- [LogLevels](utils_logger.md#loglevels)
- [logger](utils_logger.md#logger)

### Functions

- [log](utils_logger.md#log)

## Variables

### LogLevels

• `Const` **LogLevels**: `LogLevelsType`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/logger.ts:11](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/logger.ts#L11)

___

### logger

• `Const` **logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `error` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `info` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `log` | (`level`: `number`, `message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `silly` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `verbose` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `warn` | (`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/logger.ts:60](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/logger.ts#L60)

## Functions

### log

▸ **log**(`level`, `message?`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/logger.ts:37](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/logger.ts#L37)
