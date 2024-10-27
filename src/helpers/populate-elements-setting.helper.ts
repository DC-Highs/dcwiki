import elements from "../settings/elements.setting"
import Localization from "../localization"

export type PopulatedElement = {
    acronym: string
    name: string
    nameKey?: string
    strongs: string[]
    weaknesses: string[]
}

export type PopulateElementsSettingOptions = {
    elementSetting: typeof elements
    localization: Localization
}

function populateElementsSetting({ elementSetting, localization }: PopulateElementsSettingOptions) {
    const populatedElements: { [key in keyof typeof elements]: PopulatedElement } = Object
        .entries(elementSetting)
        .reduce((acc, [key, data]) => {
            let elementName: string | undefined
            
            if ("nameKey" in data) {
                elementName = localization.getValueFromKey(data.nameKey)
            }

            const populatedElement: PopulatedElement = {
                acronym: data.acronym,
                name: "name" in data ? data.name : (elementName || "Unknown"),
                nameKey: "nameKey" in data ? data.nameKey : undefined,
                strongs: data.strongs.map(strong => strong.toLowerCase()),
                weaknesses: data.weaknesses.map(weakness => weakness.toLowerCase())
            }

            acc[key as keyof typeof elements] = populatedElement

            return acc
        }, {} as { [key in keyof typeof elements]: PopulatedElement })

    return populatedElements
}

export default populateElementsSetting