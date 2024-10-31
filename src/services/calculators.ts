import {
    calculateOrbRecallGain,
    calculateAttackDamage,
    calculateDragonFeedCost,
    calculateDragonBreeding,
    calculateElementsStrengths,
    calculateElementWeaknesses,
    calculateElementStrengths
} from "../calculators"

const calculatorsService = {
    dragons: {
        calculateFeedCost: calculateDragonFeedCost,
        calculateStatus: (options: any) => {},
        calculateBreeding: calculateDragonBreeding,
        calculateRecallGain: calculateOrbRecallGain,
        calculateAttackDamage: calculateAttackDamage,
    },
    elements: {
        calculateWeaknesses: calculateElementWeaknesses,
        calculateStrengths: calculateElementStrengths,
        calculateStrengthsOfMany: calculateElementsStrengths
    }
}

export default calculatorsService