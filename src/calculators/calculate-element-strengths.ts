import validateElementName from "../tools/validate-element-name"
import elementsSetting from "../settings/elements"

function calculateElementStrengths(element: string) {
    validateElementName(element, { throwOnError: true })
    const elementKey = element as keyof typeof elementsSetting
    const elementSetting = elementsSetting[elementKey]
    const elementStrengths = elementSetting.strengths
    return elementStrengths
}

export default calculateElementStrengths