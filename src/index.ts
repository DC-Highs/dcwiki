import DragonFlashAnimation, { DragonFlashAnimationOptions } from "./static-files/dragon-flash-animation.static-file"
import DragonSpineAnimation, { DragonSpineAnimationOptions } from "./static-files/dragon-spine-animation.static-file"
import populateElementsSetting, { PopulatedElement } from "./helpers/populate-elements-setting.helper"
import DragonThumbnail, { DragonThumbnailOptions } from "./static-files/dragon-thumb.static-file"
import IslandPackage, { IslandPackageOptions } from "./static-files/island-package.static-file"
import DragonSprite, { DragonSpriteOptions } from "./static-files/dragon-sprite.static-file"
import Music, { MusicOptions } from "./static-files/music.static-file"
import orbRecallReturn from "./settings/orb-recall-return.setting"
import feedCosts from "./settings/feed-costs.setting"
import elements from "./settings/elements.setting"
import dragons from "./settings/dragons.setting"
import islands from "./settings/islands.setting"
import sounds from "./settings/sounds.setting"
import Localization from "./localization"
import Config from "./config"

export type DCWikiOptions = {
    localization: Localization
    config: Config
    language: string
}

export type CreateDCWikiOptions = {
    language: string
    apiToken?: string
    apiUserId?: string
    apiEndpointUrl: string
    apiFilter?: string[]
    apiPlatform?: string
}

export type Settings = {
    dragons: typeof dragons
    feedCosts: typeof feedCosts
    elements: { [key in keyof typeof elements]: PopulatedElement }
    orbRecallReturn: typeof orbRecallReturn
    islands: typeof islands
    sounds: typeof sounds
}

class DCWiki {
    public readonly localization: Localization
    public readonly config: Config
    public readonly language: string
    public readonly settings: Settings
    public readonly isAuthenticated: boolean

    public readonly staticFiles = {
        dragons: {
            getThumbnail: (options: DragonThumbnailOptions) => new DragonThumbnail(options),
            getSprite: (options: DragonSpriteOptions) => new DragonSprite(options),
            getFlashAnimation: (options: DragonFlashAnimationOptions) => new DragonFlashAnimation(options),
            getSpineAnimation: (options: DragonSpineAnimationOptions) => new DragonSpineAnimation(options),
        },
        getIslandPackage: (options: IslandPackageOptions) => new IslandPackage(options),
        sounds: {
            getMusic: (options: MusicOptions) => new Music(options),
        }
    }

    public readonly calculators = {
        dragons: {
            calculateFeedCost: (options: any) => {},
            calculateStatus: (options: any) => {},
            calculateBreeding: (options: any) => {},
            calculateRecallGain: (options: any) => {},
            calculateAttackDamage: (options: any) => {},
        },
        elements: {
            calculateWeaknesses: (options: any) => {},
            calculateStrengths: (options: any) => {},
        }
    }

    public readonly tools = {
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
            getMusicKeyNameFromTag: (tag: string) => {
                const tagInLowerCase = tag.toLowerCase()
                const musicName1 = `dc_${tagInLowerCase}_island`
                const musicName2 = `_${tagInLowerCase}`

                for (const musicKeyName of sounds.musicKeyNames) {
                    if (musicKeyName.includes(musicName1) || musicKeyName.endsWith(musicName2)) {
                        return musicKeyName
                    }
                }
            }
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

    public constructor({
        config,
        language,
        localization
    }: DCWikiOptions) {
        this.language = language
        this.localization = localization
        this.config = config
    
        this.settings = {
            dragons: dragons,
            feedCosts: feedCosts,
            elements: populateElementsSetting({
                elementSetting: elements,
                localization: localization
            }),
            orbRecallReturn: orbRecallReturn,
            islands: islands,
            sounds: sounds
        }

        this.isAuthenticated = config.token ? true : false
    }

    public static async create({
        apiEndpointUrl,
        apiToken,
        apiUserId,
        apiFilter,
        apiPlatform,
        language
    }: CreateDCWikiOptions) {
        const localization = await Localization.create(language)

        const config = await Config.create({
            endpointUrl: apiEndpointUrl,
            token: apiToken,
            userId: apiUserId,
            language: language,
            filter: apiFilter,
            platform: apiPlatform
        })

        return new DCWiki({
            localization,
            config,
            language
        })
    }
}

export default DCWiki