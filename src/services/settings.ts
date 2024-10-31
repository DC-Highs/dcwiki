import populateElementsSetting, { PopulatedElement } from "../helpers/populate-elements-setting"
import orbRecallReturnSetting from "../settings/orb-recall-return"
import feedCostsSetting from "../settings/feed-costs"
import elementsSetting from "../settings/elements"
import islandsSetting from "../settings/islands"
import dragonsSetting from "../settings/dragons"
import soundsSetting from "../settings/sounds"
import Localization from "../localization"

export type SettingsServiceOptions = {
    localization: Localization
}

class SettingsService {
    public readonly dragons = dragonsSetting
    public readonly sounds = soundsSetting
    public readonly feedCosts = feedCostsSetting
    public readonly islands = islandsSetting 
    public readonly elements: { [key in keyof typeof elementsSetting]: PopulatedElement }
    public readonly orbRecallReturn = orbRecallReturnSetting

    public constructor({ localization }: SettingsServiceOptions) {
        this.elements = populateElementsSetting({
            elementSetting: elementsSetting,
            localization: localization
        })
    }
}

export default SettingsService