import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies.enum"
import BaseStaticFileDownloader from "./base-downloader.static-file"

export type DragonFlashAnimationOptions = {
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

class DragonFlashAnimation extends BaseStaticFileDownloader {
    public readonly imageName: string
    public readonly phase: number
    public readonly skin?: string
    public readonly platformPrefix?: string
    public readonly url: string

    public constructor({
        imageName,
        phase,
        skin,
        platformPrefix,
    }: DragonFlashAnimationOptions) {
        super()
        
        this.imageName = imageName
        this.phase = phase
        this.skin = skin
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.Default
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/assets/sprites/${this.imageName}${adjustedSkin}_${this.phase}.swf`
    }

    public async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
} 

export default DragonFlashAnimation