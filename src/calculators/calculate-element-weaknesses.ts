import validateElementName from "../tools/validate-element-name"
import elementsSetting from "../settings/elements"

function calculateElementWeaknesses(element: string) {
    validateElementName(element, { throwOnError: true })
    const elementKey = element as keyof typeof elementsSetting
    const elementSetting = elementsSetting[elementKey]
    const elementWeaknesses = elementSetting.weaknesses
    return elementWeaknesses
}

export default calculateElementWeaknesses