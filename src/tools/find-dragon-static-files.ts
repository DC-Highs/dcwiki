import axios from "axios"
import { StaticFileUrlPlatformPrefixies } from "../enums"
import { DragonFlashAnimation, DragonSpineAnimation, DragonSprite, DragonThumbnail } from "../static-files"

type DragonStaticFile = {
    url: string
    platformPrefix: string
    phase: number
    skin?: string
}

function createSpriteFiles(
    imageName: string,
    qualities: number[],
    phases: number[],
    skins: string[]
): DragonStaticFile[] {
    const files: DragonStaticFile[] = []

    qualities.forEach(quality => {
        phases.forEach(phase => {
            const adjustedQuality = quality === 2 ? "@2x" : undefined

            const dragonSprite = new DragonSprite({
                imageName: imageName,
                phase: phase,
                platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
                imageQuality: adjustedQuality,
            })

            files.push({
                phase: dragonSprite.phase,
                skin: dragonSprite.skin,
                platformPrefix: dragonSprite.platformPrefix,
                url: dragonSprite.url,
            })
        })

        skins.forEach(skin => {
            const adjustedQuality = quality === 2 ? "@2x" : undefined
            const phase = 3 

            const dragonSprite = new DragonSprite({
                imageName: imageName,
                phase: phase,
                platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
                imageQuality: adjustedQuality,
                skin: skin
            })

            files.push({
                phase: dragonSprite.phase,
                skin: dragonSprite.skin,
                platformPrefix: dragonSprite.platformPrefix,
                url: dragonSprite.url,
            })
        })
    })

    return files
}

function createThumbFiles(imageName: string, phases: number[], skins: string[]): DragonStaticFile[] {
    const files: DragonStaticFile[] = []

    phases.forEach(phase => {
        const dragonThumbnail = new DragonThumbnail({  
            imageName: imageName,
            phase: phase,
            platformPrefix: StaticFileUrlPlatformPrefixies.iOS
        })

        files.push({
            phase: dragonThumbnail.phase,
            skin: dragonThumbnail.skin,
            platformPrefix: dragonThumbnail.platformPrefix,
            url: dragonThumbnail.url,
        })
    })

    skins.forEach(skin => {
        const phase = 3

        const dragonThumbnail = new DragonThumbnail({  
            imageName: imageName,
            phase: phase,
            platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
            skin: skin
        })

        files.push({
            phase: dragonThumbnail.phase,
            skin: dragonThumbnail.skin,
            platformPrefix: dragonThumbnail.platformPrefix,
            url: dragonThumbnail.url,
        })
    })

    return files
}

function createAnimationFiles(imageName: string, phases: number[], skins: string[], animationType: string): DragonStaticFile[] {
    const files: DragonStaticFile[] = []

    phases.forEach(phase => {
        const dragonAnimation = animationType === "flash" 
            ? new DragonFlashAnimation({
                imageName: imageName,
                phase: phase
            })
            : new DragonSpineAnimation({
                imageName: imageName,
                phase: phase,
                platformPrefix: StaticFileUrlPlatformPrefixies.iOS
            })

        files.push({
            phase: dragonAnimation.phase,
            skin: dragonAnimation.skin,
            platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
            url: dragonAnimation.url,
        })
    })

    skins.forEach(skin => {
        const phase = 3

        const dragonAnimation = animationType === "flash" 
            ? new DragonFlashAnimation({
                imageName: imageName,
                phase: phase,
                skin: skin
            })
            : new DragonSpineAnimation({
                imageName: imageName,
                phase: phase,
                platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
                skin: skin
            })

        files.push({
            phase: dragonAnimation.phase,
            skin: dragonAnimation.skin,
            platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
            url: dragonAnimation.url,
        })
    })

    return files
}

async function findDragonStaticFiles(imageName: string): Promise<DragonStaticFile[]> {
    const qualities = [1, 2]
    const phases = [0, 1, 2, 3]
    const skins = ["skin_1", "skin_2", "skin_3", "skin_4"]

    const spriteFiles = createSpriteFiles(imageName, qualities, phases, skins)
    const thumbFiles = createThumbFiles(imageName, phases, skins)
    const flashAnimationFiles = createAnimationFiles(imageName, phases, skins, "flash")
    const spineAnimationFiles = createAnimationFiles(imageName, phases, skins, "spine")

    const allStaicFileUrls = [
        ...spriteFiles,
        ...thumbFiles,
        ...flashAnimationFiles,
        ...spineAnimationFiles
    ]
    
    const filteredStaticFiles: DragonStaticFile[] = []
    
    for (const staticFile of allStaicFileUrls) {
        try {
            const response = await axios.get(staticFile.url)

            if (response.status === 200) {
                filteredStaticFiles.push(staticFile)
            }
        } catch(error) {}
    }

    return filteredStaticFiles
}

export default findDragonStaticFiles