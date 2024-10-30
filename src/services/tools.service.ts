import urlExtractorService from "./url-extractor.service"
import validationService from "./validation.service"
import soundsService from "./sounds.service"

const toolsService = {
    urlExtractor: urlExtractorService,
    validation: validationService,
    sounds: soundsService,
}

export default toolsService