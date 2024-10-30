import validateDragonLevelCompatibilityWithStars from "../tools/validate-dragon-level-compatibility-with-stars.tool"
import validateDragonCategory from "../tools/validate-dragon-category.tool"
import validateDragonLevel from "../tools/validate-dragon-level.tool"
import validateDragonStars from "../tools/validate-dragon-stars.tool"
import validateDragonRank from "../tools/validate-dragon-rank.tool"

const validationService = {
    validateDragonLevel: validateDragonLevel,
    validateDragonStars: validateDragonStars,
    validateDragonLevelCompatibilityWithStars: validateDragonLevelCompatibilityWithStars,
    validateDragonCategory: validateDragonCategory,
    validateDragonRank: validateDragonRank
}

export default validationService