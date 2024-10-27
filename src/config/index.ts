import { groupBy } from "lodash"
import axios from "axios"

import { RestructuredItems } from "./types/restructured-data/index.type"
import objectKeysConversor from "../utils/object-keys-conversor.util"
import DragonRestructurer from "./restructurers/dragon.restructurer"
import { CreateConfigOptions } from "./types/index.type"
import { GameConfigData } from "./types/data.type"
import Localization from "../localization"

export type ConfigOptions = {
    rawData: GameConfigData
    endpointUrl?: string
    token?: string
}

class Config {
    private readonly rawData: GameConfigData
    public readonly endpointUrl?: string
    public readonly token?: string 

    public constructor({
        rawData,
        endpointUrl,
        token
    }: ConfigOptions) {
        this.rawData = rawData
        this.endpointUrl = endpointUrl
        this.token = token
    }

    public get data() {
        return this.rawData.game_data.config
    }

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

        return new Config({
            rawData: response.data,
            endpointUrl: endpointUrl,
            token: token
        })
    }

    public restructure(localization: Localization) {
        const config = this.rawData.game_data.config

        const translate = localization.translate.bind(localization)
        const translatedItems = config.items.map(translate)

        const preRestructuredItems = objectKeysConversor.replace({
            oldString: " ",
            newString: "_",
            object:  objectKeysConversor.toPlural(
                objectKeysConversor.toLowerCase(
                    groupBy(translatedItems, "group_type")
                )
            )
        }) as RestructuredItems

        const dragonRestructurer = new DragonRestructurer()

        return {
            items: {
                ...preRestructuredItems,
                dragons: preRestructuredItems.dragons.map(dragonRestructurer.restructure)
            }
        }
    }
}

export default Config