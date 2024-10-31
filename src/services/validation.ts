import {
    validateDragonLevelCompatibilityWithStars,
    validateDragonCategory,
    validateDragonRarity,
    validateDragonStars,
    validateElementName,
    validateDragonLevel,
    validateDragonRank,
} from "../tools"

const validationService = {
    dragons: {
        validateLevel: validateDragonLevel,
        validateStars: validateDragonStars,
        validateLevelCompatibilityWithStars: validateDragonLevelCompatibilityWithStars,
        validateCategory: validateDragonCategory,
        validateRank: validateDragonRank,
        validateRarity: validateDragonRarity
    },
    elements: {
        validateName: validateElementName
    }
}

export default validationService