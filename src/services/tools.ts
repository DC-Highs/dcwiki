import urlExtractorService from "./url-extractor"
import { findDragonStaticFiles } from "../tools"
import validationService from "./validation"
import soundsService from "./sounds"

const toolsService = {
    urlExtractor: urlExtractorService,
    validation: validationService,
    sounds: soundsService,
    findDragonStaticFiles: findDragonStaticFiles
}

export default toolsService