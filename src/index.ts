import populateElementsSetting, { PopulatedElement } from "./helpers/populate-elements-setting.helper"
import feedCosts from "./settings/feed-costs.setting"
import elements from "./settings/elements.settings"
import dragons from "./settings/dragons.setting"
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
}

export type Settings = {
    dragons: typeof dragons
    feedCosts: typeof feedCosts
    elements: { [key in keyof typeof elements]: PopulatedElement }
}

class DCWiki {
    public readonly localization: Localization
    public readonly config: Config
    public readonly language: string
    public readonly settings: Settings
    public readonly isAuthenticated: boolean

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
            })
        }

        this.isAuthenticated = config.token ? true : false
    }

    public static async create({
        apiEndpointUrl,
        apiToken,
        apiUserId,
        language
    }: CreateDCWikiOptions) {
        const localization = await Localization.create(language)

        const config = await Config.create({
            endpointUrl: apiEndpointUrl,
            token: apiToken,
            userId: apiUserId
        })

        return new DCWiki({
            localization,
            config,
            language
        })
    }
}

export default DCWiki