import sounds from "../settings/sounds.setting"

function getMusicKeyNameFromTag(tag: string) {
    const tagInLowerCase = tag.toLowerCase()
    const musicName1 = `dc_${tagInLowerCase}_island`
    const musicName2 = `_${tagInLowerCase}`

    for (const musicKeyName of sounds.musicKeyNames) {
        if (musicKeyName.includes(musicName1) || musicKeyName.endsWith(musicName2)) {
            return musicKeyName
        }
    }
}

export default getMusicKeyNameFromTag