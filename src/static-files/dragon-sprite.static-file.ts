import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies.enum"
import DragonSpriteQuality from "../enums/dragon-sprite-quality.enum"
import BaseStaticFileDownloader from "./base-downloader.static-file"

export type DragonSpriteOptions = {
    imageQuality?: string
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

class DragonSprite extends BaseStaticFileDownloader {
    public readonly platformPrefix: string
    public readonly imageQuality: string
    public readonly imageName: string
    public readonly phase: number
    public readonly skin?: string
    public readonly url: string

    constructor({
        imageQuality,
        imageName,
        phase,
        skin,
        platformPrefix,
    }: DragonSpriteOptions) {
        super()
        
        this.imageName = imageName
        this.imageQuality = imageQuality ?? DragonSpriteQuality.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.Default
        this.phase = phase
        this.skin = skin
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_${this.imageName}${adjustedSkin}_${this.phase}${this.imageQuality}.png`
    }

    public async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}

export default DragonSprite