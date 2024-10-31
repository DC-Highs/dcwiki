import dragonsSetting from "../settings/dragons"

export type ValidateDragonStarsOptions = {
    throwOnError?: boolean
}

function validateDragonStars(
    stars: number,
    { throwOnError = false }: ValidateDragonStarsOptions = { throwOnError: false }
): boolean {
    if (stars < dragonsSetting.empowerment.starts.minimum) {
        if (throwOnError) {
            throw new Error(`Dragon stars must be at least ${dragonsSetting.empowerment.starts.minimum}!`)
        }

        return false
    }

    if (stars > dragonsSetting.empowerment.starts.maximum) {
        if (throwOnError) {
            throw new Error(`Dragon stars cannot exceed ${dragonsSetting.empowerment.starts.maximum}!`)
        }

        return false
    }

    return true
}

export default validateDragonStars