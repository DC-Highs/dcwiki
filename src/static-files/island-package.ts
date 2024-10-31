import IslandTypes from "../enums/island-types"
import BaseStaticFileDownloader from "./base-downloader"

export type IslandPackageOptions = {
    islandType?: string
    fileName?: string
    path?: string
}

class IslandPackage extends BaseStaticFileDownloader {
    public readonly url: string

    public constructor({
        fileName,
        path,
        islandType
    }: IslandPackageOptions) {
        super()


        if (!path && !islandType && !fileName) {
            throw new Error("Either path, islandType or fileName must be provided.")
        }

        if (path) {
            const items = path.split("/")
            islandType = items[3]
            fileName = items[4]   
        }
        
        if (islandType === IslandTypes.GridIslands && !fileName!.endsWith("_optim.zip")) {
            fileName = fileName!.replace(".zip", "_optim.zip")
        }

        this.url = `https://www.socialpointgames.com/static/dragoncity/mobile/ui/${islandType}/HD/dxt5/${fileName}`
    }

    public async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}

export default IslandPackage