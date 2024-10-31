import dragonsSetting from "../settings/dragons"

export type ValidateDragonRarityOptions = {
    throwOnError?: boolean
    useLowerCase?: boolean
}

function validateDragonRarity(
    rarity: string,
    {
        throwOnError = false,
        useLowerCase
    }: ValidateDragonRarityOptions = { throwOnError: false }
): boolean {
    let dragonRarities: string[] = Object.values(dragonsSetting.rarities)

    if (useLowerCase) {
        rarity = rarity.toLowerCase()
        dragonRarities = dragonRarities.map(rarity => rarity.toLowerCase())
    }

    if (!dragonRarities.includes(rarity)) {
        if (throwOnError) {
            throw new Error(`Invalid dragon rarity: ${rarity}. Available rarities: ${dragonRarities.join(", ")}`)
        }

        return false
    }

    return true
}

export default validateDragonRarity