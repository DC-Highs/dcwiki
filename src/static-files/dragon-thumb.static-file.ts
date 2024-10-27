import * as jsEnv from "browser-or-node"

import StaticFileUrlPlatformPrefixies from "../enums/static-file-url-platform-prefixies.enum"

export type DragonThumbnailOptions = {
    imageName: string
    phase: number
    platformPrefix?: string
}

class DragonThumbnail {
    private readonly platformPrefix: string
    public readonly imageName: string
    public readonly phase: number

    constructor({
        imageName,
        phase,
        platformPrefix
    }: DragonThumbnailOptions) {
        this.imageName = imageName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefixies.iOS
        this.phase = phase
    }

    public get url() {
        return `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${this.imageName}_${this.phase}.png`
    }

    public async download(filePath: string) {
        if (jsEnv.isNode) {
            const { default: axios } = await import("axios")
            const fs = await import("fs")
            const response = await axios.get(this.url, { responseType: "arraybuffer" })
            await fs.promises.writeFile(filePath, response.data)
        } else if (jsEnv.isBrowser) {
            const { saveMedia } = await import("client-helper")
            await saveMedia({ source: this.url, fileName: filePath })
        }
    }
}

export default DragonThumbnail