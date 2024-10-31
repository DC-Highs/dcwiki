import staticFilesService from "./services/static-files"
import calculatorsService from "./services/calculators"
import SettingsService from "./services/settings"
import toolsService from "./services/tools"
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
        this.settings = new SettingsService({ localization: localization })
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
            localization: localization,
            config: config,
            language: language
        })
    }
}

export default DCWiki