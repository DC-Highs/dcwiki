import calculateOrbRecallGain from "../calculators/calculate-orb-recall-gain"
import calculateAttackDamage from "../calculators/calculate-attack-damage"
import calculateFeedCost from "../calculators/calculate-feed-cost"

const calculatorsService = {
    dragons: {
        calculateFeedCost: calculateFeedCost,
        calculateStatus: (options: any) => {},
        calculateBreeding: (options: any) => {},
        calculateRecallGain: calculateOrbRecallGain,
        calculateAttackDamage: calculateAttackDamage,
    },
    elements: {
        calculateWeaknesses: (options: any) => {},
        calculateStrengths: (options: any) => {},
    }
}

export default calculatorsService