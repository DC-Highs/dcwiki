import ConfigFilterItems from "../src/enums/config-filter-items"
import ConfigPlatforms from "../src/enums/config-platforms"
import { writeJsonFile } from "../src/utils/file-manager"
import DcWiki from "../src"

;(async () => {
    const dcwiki = await DcWiki.create({
        language: "br",
        api: {
            endpointUrl: "https://github.com/1Marcuth/Ei5qQZjQJ3V4S9jzpKbuhDTFR6StFepAeBKK8kbGyyC4rMBg1WM81317rvoUTquY/raw/main/data.json"
        },
    })

    
})();