import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies"
import BaseStaticFileDownloader from "./base-downloader"

export type DragonThumbnailOptions = {
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

class DragonThumbnail extends BaseStaticFileDownloader {
    public readonly platformPrefix: string
    public readonly imageName: string
    public readonly phase: number
    public readonly skin?: string
    public readonly url: string

    constructor({
        imageName,
        phase,
        skin,
        platformPrefix
    }: DragonThumbnailOptions) {
        super()
        
        this.imageName = imageName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.Default
        this.phase = phase
        this.skin = skin
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${this.imageName}_${this.phase}${adjustedSkin}.png`
    }

    public async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}

export default DragonThumbnail