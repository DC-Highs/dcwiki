import StaticFileUrlPlatformPrefixies from "../src/enums/static-file-url-platform-prefixies.enum"
import DragonSpriteQuality from "../src/enums/dragon-sprite-quality.enum"
import DragonPhases from "../src/enums/dragon-phases.enum"
import DCWiki from "../src"

;(async () => {
    const dcwiki = await DCWiki.create({
        language: "br",
        api: {
            endpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json"
        },
    })

    // dcwiki.localization.searchKeys({ query: "batata" })

    // await dcwiki.staticFiles.dragons.getThumbnail({
    //     imageName: "1000_dragon_nature",
    //     phase: DragonPhases.Adult,
    //     platformPrefix: StaticFileUrlPlatformPrefixies.Amazon
    // }).download("testdata/bosta_thumb.png")
    
    // await dcwiki.staticFiles.dragons.getSprite({
    //     imageName: "1000_dragon_nature",
    //     phase: DragonPhases.Adult,
    //     platformPrefix: StaticFileUrlPlatformPrefixies.iOS,
    //     imageQuality: DragonSpriteQuality.Large,
    //     skin: "_skin1"
    // }).download("testdata/bosta_sprite.png")

    // await dcwiki.staticFiles.dragons.getFlashAnimation({
    //     imageName: "1000_dragon_nature",
    //     phase: DragonPhases.Adult,
    //     platformPrefix: StaticFileUrlPlatformPrefixies.Amazon,
    //     skin: "_skin1"
    // }).download("testdata/bosta.swf")

    // await dcwiki.staticFiles.dragons.getSpineAnimation({
    //     imageName: "1000_dragon_nature",
    //     phase: DragonPhases.Adult,
    //     platformPrefix: StaticFileUrlPlatformPrefixies.Amazon,
    //     skin: "_skin1",
    // }).download("testdata/bosta.zip")

    // await dcwiki.staticFiles.getIslandPackage({
    //     fileName: "gi_oceanarchy.zip",
    //     islandType: "grid_islands"
    // }).download("testdata/island_package.zip")

    // const musicKeyName = dcwiki.tools.sounds.getMusicKeyNameFromTag("HEAVEN")

    // await dcwiki.staticFiles.sounds.getMusic({
    //     keyName: musicKeyName!
    // }).download("testdata/heaven.mp3")

    // dcwiki.staticFiles.dragons.getSpineAnimation({})
    // dcwiki.staticFiles.getIslandPackage({})
    // dcwiki.staticFiles.sounds.getMusic({})
    // dcwiki.calculators.dragons.calculateBreeding({})
    // dcwiki.tools.urlExtractor.dragons.extractId("")

    // dcwiki.tools.urlExtractor.dragons.extractId("dadsadasd")
    // dcwiki.tools.ai.dragons.elementsDetector.init()

    // await natureDragonThumbnail.download("natureDragon.png")

    const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)

    // const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)
    // console.log(restructuredConfig.items)

    // await writeJsonFile({
    //     filePath: "game-config.json",
    //     data: restructuredConfig,
    //     indent: 4
    // })
})();