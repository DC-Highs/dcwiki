import DCWiki from "../src"

import objectKeysConversor from "../src/utils/object-keys-conversor.util"

;(async () => {
    const dcwiki = await DCWiki.create({
        language: "br",
        apiEndpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json"
    })

    const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)

    console.log(restructuredConfig.items.dragons.map(objectKeysConversor.toCamelCase))
})();