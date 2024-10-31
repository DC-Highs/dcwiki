import dragonsSetting from "../settings/dragons"

export type ValidateDragonLevelOptions = {
    throwOnError?: boolean
}

function validateDragonCategory(
    category: number,
    { throwOnError = false }: ValidateDragonLevelOptions = { throwOnError: false }
): boolean {
    const dragonCategories = Object.values(dragonsSetting.categories)

    if (!dragonCategories.includes(category)) {
        if (throwOnError) {
            throw new Error(`Invalid dragon category: ${category}. Expected values: ${dragonCategories.join(", ")}`)
        }

        return false
    }

    return true
}

export default validateDragonCategory