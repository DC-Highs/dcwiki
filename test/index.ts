import StaticFileUrlPlatformPrefixies from "../src/enums/static-file-url-platform-prefixies.enum"
import dragonsSettingpriteQuality from "../src/enums/dragon-sprite-quality.enum"
import DragonPhases from "../src/enums/dragon-phases.enum"
import DCWiki from "../src"

;(async () => {
    const dcwiki = await DCWiki.create({
        language: "br",
        api: {
            endpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json",
        },
    })

    

    // dcwiki.calculators.dragons.calculateBreeding({ parents: [
    //     {
    //         id: 1000,
    //         stars: 5,
    //         perks: 0
    //     },
    //     {
    //         id: 1000,
    //         stars: 5,
    //         perks: 0
    //     },
    // ] })
})();