import validateDragonLevelCompatibilityWithStars from "../tools/validate-dragon-level-compatibility-with-stars"
import validateDragonCategory from "../tools/validate-dragon-category"
import validateDragonLevel from "../tools/validate-dragon-level"
import validateDragonStars from "../tools/validate-dragon-stars"
import validateDragonRank from "../tools/validate-dragon-rank"

const validationService = {
    validateDragonLevel: validateDragonLevel,
    validateDragonStars: validateDragonStars,
    validateDragonLevelCompatibilityWithStars: validateDragonLevelCompatibilityWithStars,
    validateDragonCategory: validateDragonCategory,
    validateDragonRank: validateDragonRank
}

export default validationService