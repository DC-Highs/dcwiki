import { writeJsonFile } from "../src/utils/file-manager.util"
import DCWiki from "../src"

import objectKeysConversor from "../src/utils/object-keys-conversor.util"
import DragonPhases from "../src/enums/dragon-phases.enum"
import StaticFileUrlPlatformPrefixies from "../src/enums/static-file-url-platform-prefixies.enum"

;(async () => {
    const dcwiki = await DCWiki.create({
        language: "br",
        apiEndpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json",
    })

    const natureDragonThumbnail = dcwiki.staticFiles.dragons.getThumbnail({
        imageName: "1000_dragon_nature",
        phase: DragonPhases.Adult,
        platformPrefix: StaticFileUrlPlatformPrefixies.Amazon
    })

    dcwiki.staticFiles.getIslandPackage({})

    dcwiki.staticFiles.dragons.getSpineAnimation({})
    dcwiki.staticFiles.getIslandPackage({})
    dcwiki.staticFiles.sounds.getMusic({})
    dcwiki.calculators.dragons.calculateBreeding({})
    dcwiki.tools.urlExtractor.dragons.extractId("")

    dcwiki.tools.urlExtractor.dragons.extractId("dadsadasd")
    dcwiki.tools.ai.dragons.elementsDetector.init()

    await natureDragonThumbnail.download("natureDragon.png")

    const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)

    // const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)
    // console.log(restructuredConfig.items)

    // await writeJsonFile({
    //     filePath: "game-config.json",
    //     data: restructuredConfig,
    //     indent: 4
    // })
})();