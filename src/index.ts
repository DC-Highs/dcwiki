import populateElementsSetting, { PopulatedElement } from "./helpers/populate-elements-setting.helper"
import orbRecallReturn from "./settings/orb-recall-return.setting"
import staticFilesService from "./services/static-files.service"
import calculatorsService from "./services/calculators.service"
import feedCosts from "./settings/feed-costs.setting"
import toolsService from "./services/tools.service"
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

export type CreateDCWikiApiOption = {
    token?: string
    endpointUrl: string
    userId?: string
    filter?: string[]
    platform?: string
}

export type CreateDCWikiOptions = {
    language: string
    api: CreateDCWikiApiOption
}

export type SettingsService = {
    dragons: typeof dragons
    feedCosts: typeof feedCosts
    elements: { [key in keyof typeof elements]: PopulatedElement }
    orbRecallReturn: typeof orbRecallReturn
    islands: typeof islands
    sounds: typeof sounds
}

export type StaticFilesService = typeof staticFilesService
export type CalculatorsService = typeof calculatorsService
export type ToolsService = typeof toolsService

class DCWiki {
    public readonly localization: Localization
    public readonly config: Config
    public readonly language: string
    public readonly settings: SettingsService
    public readonly isAuthenticated: boolean
    public readonly staticFiles = staticFilesService
    public readonly calculators = calculatorsService
    public readonly tools = toolsService

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
        language,
        api
    }: CreateDCWikiOptions) {
        const localization = await Localization.create(language)

        const config = await Config.create({
            endpointUrl: api.endpointUrl,
            token: api.token,
            userId: api.userId,
            language: language,
            filter: api.filter,
            platform: api.platform
        })

        return new DCWiki({
            localization,
            config,
            language
        })
    }
}

export default DCWiki