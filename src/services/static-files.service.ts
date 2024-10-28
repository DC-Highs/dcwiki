import DragonFlashAnimation, { DragonFlashAnimationOptions } from "../static-files/dragon-flash-animation.static-file"
import DragonSpineAnimation, { DragonSpineAnimationOptions } from "../static-files/dragon-spine-animation.static-file"
import DragonThumbnail, { DragonThumbnailOptions } from "../static-files/dragon-thumb.static-file"
import IslandPackage, { IslandPackageOptions } from "../static-files/island-package.static-file"
import DragonSprite, { DragonSpriteOptions } from "../static-files/dragon-sprite.static-file"
import Music, { MusicOptions } from "../static-files/music.static-file"

const staticFilesService = {
    dragons: {
        getThumbnail: (options: DragonThumbnailOptions) => new DragonThumbnail(options),
        getSprite: (options: DragonSpriteOptions) => new DragonSprite(options),
        getFlashAnimation: (options: DragonFlashAnimationOptions) => new DragonFlashAnimation(options),
        getSpineAnimation: (options: DragonSpineAnimationOptions) => new DragonSpineAnimation(options),
    },
    getIslandPackage: (options: IslandPackageOptions) => new IslandPackage(options),
    sounds: {
        getMusic: (options: MusicOptions) => new Music(options),
    }
}

export default staticFilesService