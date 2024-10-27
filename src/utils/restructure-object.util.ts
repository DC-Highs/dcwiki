export type ConvertValueFunction = (value: any) => any

export type RestructureObjectOptions = {
    rawDict: any,
    keysToRemove?: string[],
    keysToRename?: [string, string][],
    fieldsToAdd?: [string, any][],
    fieldsToConvertValue?: [string, ConvertValueFunction][]
}

function restructureObject({
    rawDict,
    keysToRemove = [],
    keysToRename = [],
    fieldsToAdd = [],
    fieldsToConvertValue = []
}: RestructureObjectOptions): any {
    const restructuredDict = { ...rawDict }

    for (const key of keysToRemove) {
        delete restructuredDict[key]
    }

    for (const [oldKey, newKey] of keysToRename) {
        if (oldKey in restructuredDict) {
            restructuredDict[newKey] = restructuredDict[oldKey]
            delete restructuredDict[oldKey];
        }
    }

    for (const [key, value] of fieldsToAdd) {
        restructuredDict[key] = value
    }

    for (const [key, converter] of fieldsToConvertValue) {
        if (key in restructuredDict) {
            restructuredDict[key] = converter(restructuredDict[key])
        }
    }

    return restructuredDict
}

export default restructureObject