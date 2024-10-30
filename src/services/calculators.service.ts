import calculateOrbRecallGain from "../calculators/calculate-orb-recall-gain.calculator"
import calculateAttackDamage from "../calculators/calculate-attack-damage.calculator"
import calculateFeedCost from "../calculators/calculate-feed-cost.caclulator"

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