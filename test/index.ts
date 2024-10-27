import { writeJsonFile } from "../src/utils/file-manager.util"
import DCWiki from "../src"

import objectKeysConversor from "../src/utils/object-keys-conversor.util"

;import Config from "../src/config";
import ConfigPlatform from "../src/config/enums/config-platform.enum";
(async () => {
    const dcwiki = await DCWiki.create({
        language: "br",
        apiEndpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json"
    })

    Config.create({
        endpointUrl: "",
    })

    // const restructuredConfig = dcwiki.config.restructure(dcwiki.localization)
    // console.log(restructuredConfig.items)

    // await writeJsonFile({
    //     filePath: "game-config.json",
    //     data: restructuredConfig,
    //     indent: 4
    // })
})();