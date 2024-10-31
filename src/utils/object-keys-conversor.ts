

import { camelCase } from "lodash"
import pluralize from "pluralize"

export type ObjectKeysConversorReplaceOptions = {
    oldString: string
    newString: string,
    object: Record<string, any>
}

const objectKeysConversor = {
    toLowerCase(object: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [key.toLowerCase(), value])
        )
    },    
    toPlural(object: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [pluralize(key), value])
        )
    },
    replace({
        newString,
        oldString,
        object
    }: ObjectKeysConversorReplaceOptions): Record<string, any> {
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [key.replace(oldString, newString), value])
        )
    },
    toCamelCase(object: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => {
                const camelCaseKey = camelCase(key)
                return [camelCaseKey, value]
            })
        )
    }
}

export default objectKeysConversor