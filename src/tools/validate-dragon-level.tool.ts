import dragonsSetting from "../settings/dragons.setting"

export type ValidateDragonLevelOptions = {
    throwOnError: boolean
}

function validateDragonLevel(
    level: number, 
    { throwOnError = false }: ValidateDragonLevelOptions = { throwOnError: false }
): boolean {
    if (level < dragonsSetting.levels.minimum) {
        if (throwOnError) {
            throw new Error(`The dragon cannot have a level lower than ${dragonsSetting.levels.minimum}!`)
        }

        return false
    }

    if (level > dragonsSetting.levels.maximum) {
        if (throwOnError) {
            throw new Error(`The dragon cannot have a level higher than ${dragonsSetting.levels.maximum}!`)
        }

        return false
    }

    return true
}

export default validateDragonLevel