import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies.enum"
import TextureCompressionFormats from "../enums/texture-compression-formats.enum"
import BaseStaticFileDownloader from "./base-downloader.static-file"

export type DragonSpineAnimationOptions = {
    imageName: string
    phase: number
    skin?: string
    textureCompressionFormat?: string
    platformPrefix?: string
    useNewUrlFormat?: boolean
}

class DragonSpineAnimation extends BaseStaticFileDownloader {
    public readonly imageName: string
    public readonly phase: number
    public readonly skin?: string
    public readonly textureCompressionFormat: string
    public readonly platformPrefix: string
    public readonly useNewUrlFormat: boolean
    public readonly url: string

    public constructor({
        imageName,
        phase,
        skin,
        textureCompressionFormat,
        platformPrefix,
        useNewUrlFormat
    }: DragonSpineAnimationOptions) {
        super()

        this.imageName = imageName
        this.phase = phase
        this.skin = skin
        this.textureCompressionFormat = textureCompressionFormat || TextureCompressionFormats.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.Default
        this.useNewUrlFormat = useNewUrlFormat ?? true
        const adjustedSkin = this.skin ?? ""

        if (this.useNewUrlFormat) {
            this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${this.imageName}${adjustedSkin}_${this.phase}/${this.imageName}${adjustedSkin}_${this.phase}_HD_tweened_${this.textureCompressionFormat}.zip`
        } else {
            this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${this.imageName}${adjustedSkin}_${this.phase}/basic_${this.imageName}${skin}_${phase}_HD_spine-3-8-59_${this.textureCompressionFormat}.zip`
        }
    }

    public async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}

export default DragonSpineAnimation