import getMusicKeyNameFromTag from "../tools/get-music-name-from-tag.tool"

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