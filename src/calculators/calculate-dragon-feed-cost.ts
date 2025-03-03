import validateDragonLevel from "../tools/validate-dragon-level"
import feedCosts from "../settings/feed-costs"

export type calculateDragonFeedCostOptions = {
    initialLevel: number
    finalLevel: number
}

function calculateDragonFeedCost({ initialLevel, finalLevel }: calculateDragonFeedCostOptions) {
    validateDragonLevel(initialLevel, { throwOnError: true })
    validateDragonLevel(finalLevel, { throwOnError: true })

    if (initialLevel > finalLevel) {
        throw new Error("Initial dragon level cannot be higher than final dragon level.")
    }

    if (initialLevel === finalLevel) {
        return 0
    }

    let cost = 0

    for (let i = 0; i < finalLevel; i++) {
        const costPerLevel = feedCosts[i].total
        cost += costPerLevel
    }

    return cost
}

export default calculateDragonFeedCost