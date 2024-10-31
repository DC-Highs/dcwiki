import validateElementName from "../tools/validate-element-name"
import elementsSetting from "../settings/elements"

function calculateElementsStrengths(elements: string[]) {
    elements.forEach(element => validateElementName(element, { throwOnError: true }))

    const allElementStrengths: string[] = []

    for (const element of elements) {
        const elementKey = element as keyof typeof elementsSetting
        const elementSetting = elementsSetting[elementKey]
        const elementStrengths = elementSetting.strengths
        allElementStrengths.push(...elementStrengths)
    }

    const uniqueElements = [...new Set(allElementStrengths)]
    
    return uniqueElements
}

export default calculateElementsStrengths