import * as jsEnv from "browser-or-node"

class BaseStaticFileDownloader {
    public async download(url: string, filePath: string) {
        if (jsEnv.isNode) {
            const { default: axios } = await import("axios")
            const fs = await import("fs")
            const response = await axios.get(url, { responseType: "arraybuffer" })
            await fs.promises.writeFile(filePath, response.data)
        } else if (jsEnv.isBrowser) {
            const { saveMedia } = await import("client-helper")
            await saveMedia({ source: url, fileName: filePath })
        }
    }
}

export default BaseStaticFileDownloader