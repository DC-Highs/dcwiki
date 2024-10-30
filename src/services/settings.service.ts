import populateElementsSetting, { PopulatedElement } from "../helpers/populate-elements-setting.helper"
import orbRecallReturnSetting from "../settings/orb-recall-return.setting"
import feedCostsSetting from "../settings/feed-costs.setting"
import elementsSetting from "../settings/elements.setting"
import islandsSetting from "../settings/islands.setting"
import dragonsSetting from "../settings/dragons.setting"
import soundsSetting from "../settings/sounds.setting"
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