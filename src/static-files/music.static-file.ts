import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies.enum"
import BaseStaticFileDownloader from "./base-downloader.static-file"

export type MusicOptions = {
    platformPrefix?: string
    keyName: string 
}

class Music extends BaseStaticFileDownloader {
    private readonly platformPrefix: string
    private readonly keyName: string
    private readonly url: string

    public constructor({
        platformPrefix,
        keyName
    }: MusicOptions) {
        super()

        this.keyName = keyName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.Default

        this.url = `http://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/sounds/music/${this.keyName}.mp3`
    }

    public download(filePath: string) {
        return super.download(this.url, filePath)
    }
}

export default Music