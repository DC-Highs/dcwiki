import validateDragonLevelCompatibilityWithStars from "../tools/validate-dragon-level-compatibility-with-stars.tool"
import getMusicKeyNameFromTag from "../tools/get-music-name-from-tag.tool"
import validateDragonLevel from "../tools/validate-dragon-level.tool"
import validateDragonStars from "../tools/validate-dragon-stars.tool"

const toolsService = {
    urlExtractor: {
        dragons: {
            extractImageName: (url: string) => {},
            extractId: (url: string) => {},
            extractPhase: (url: string) => {},
            extractSkin: (url: string) => {},
            extractImageQuality: (url: string) => {},
            extractAllFromSprite: (url: string) => {},
            extractAllFromThumbnail: (url: string) => {},
            extractAllFromFlashAnimation: (url: string) => {},
            extractAllFromSpineAnimation: (url: string) => {},
        }
    },
    validation: {
        validateDragonLevel: validateDragonLevel,
        validateDragonStars: validateDragonStars,
        validateDragonLevelCompatibilityWithStars: validateDragonLevelCompatibilityWithStars
    },
    sounds: {
        getMusicKeyNameFromTag: getMusicKeyNameFromTag
    },
    ai: {
        dragons: {
            phaseDetector: {
                init: () => {},
                predict: () => {},
            },
            elementsDetector: {
                init: () => {},
                predict: () => {},
            }
        }
    }
}

export default toolsService