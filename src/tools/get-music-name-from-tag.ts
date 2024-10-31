import soundsSetting from "../settings/sounds"

function getMusicKeyNameFromTag(tag: string) {
    const tagInLowerCase = tag.toLowerCase()
    const musicName1 = `dc_${tagInLowerCase}_island`
    const musicName2 = `_${tagInLowerCase}`

    for (const musicKeyName of soundsSetting.musicKeyNames) {
        if (musicKeyName.includes(musicName1) || musicKeyName.endsWith(musicName2)) {
            return musicKeyName
        }
    }
}

export default getMusicKeyNameFromTag