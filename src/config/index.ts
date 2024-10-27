import { groupBy } from "lodash"
import axios from "axios"

import { RestructuredItems } from "./types/restructured-data/index.type"
import objectKeysConversor from "../utils/object-keys-conversor.util"
import { CreateConfigOptions } from "./types/index.type"
import { GameConfigData } from "./types/data.type"
import Localization from "../localization"

class Config {
    public constructor(public readonly data: GameConfigData) {}

    public static async create({
        endpointUrl,
        token,
        userId
    }: CreateConfigOptions) {
        if (token && userId) {
            const response = await axios.post(endpointUrl, null, {
                params: {
                    token: token,
                    userId: userId
                }
            })

            return new Config(response.data)
        }

        const response = await axios.get(endpointUrl)

        return new Config(response.data)
    }

    public restructure(localization: Localization) {
        const config = this.data.game_data.config

        const translate = localization.translate.bind(localization)
        const translatedItems = config.items.map(translate)

        const preRestructuredItems = objectKeysConversor.replace({
            oldString: " ",
            newString: "_",
            object: objectKeysConversor.toCamelCase(
                objectKeysConversor.toPlural(
                    objectKeysConversor.toLowerCase(
                        groupBy(translatedItems, "group_type")
                    )
                )
            )
        }) as RestructuredItems
        
        return {
            items: preRestructuredItems
        }
    }
}

export default Config