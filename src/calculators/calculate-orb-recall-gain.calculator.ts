import validateDragonLevel from "../tools/validate-dragon-level.tool"
import validateDragonStars from "../tools/validate-dragon-stars.tool"
import orbRecallReturn from "../settings/orb-recall-return.setting"
import validateDragonLevelCompatibilityWithStars from "../tools/validate-dragon-level-compatibility-with-stars.tool"

export type CalculateOrbRecallGainOptions = {
    level: number
    stars?: number
}

function calculateOrbRecallGain({ level, stars }: CalculateOrbRecallGainOptions) {
    const adjustedStars = stars ?? 0
    const adjustedLevel = Math.min(level, 30)

    validateDragonLevelCompatibilityWithStars({
        level: level,
        stars: adjustedStars,
        throwOnError: true
    })

    let totalOrbs = 0

    for (let levelIndex = 0; levelIndex < adjustedLevel; levelIndex++) {
        const orbsPerLevel = orbRecallReturn.perLevels[levelIndex]
        totalOrbs += orbsPerLevel
    }

    for (let starIndex = 0; starIndex < adjustedStars; starIndex++) {
        const orbsPerStar = orbRecallReturn.perStars[starIndex]
        totalOrbs += orbsPerStar
    }

    return totalOrbs
}

export default calculateOrbRecallGain