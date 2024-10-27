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

class DCWiki {
    public readonly localization: Localization
    public readonly config: Config
    public readonly language: string

    public constructor({
        config,
        language,
        localization
    }: DCWikiOptions) {
        this.language = language
        this.localization = localization
        this.config = config
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