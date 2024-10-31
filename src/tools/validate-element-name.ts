import elementsSetting from "../settings/elements"

export type ValidateElementOptions = {
    throwOnError?: boolean
}

function validateElementName(
    elementName: string,
    { throwOnError = false }: ValidateElementOptions = { throwOnError: false }
): boolean {
    const elementNames = Object.keys(elementsSetting)

    if (!elementNames.includes(elementName)) {
        if (throwOnError) {
            throw new Error(`Invalid element name: ${elementName}. Expected values: ${elementNames.join(", ")}`)
        }

        return false
    }

    return true
}

export default validateElementName