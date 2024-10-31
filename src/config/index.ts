import { groupBy } from "lodash"
import axios from "axios"

import { RestructuredItems } from "./types/restructured-data/items"
import objectKeysConversor from "../utils/object-keys-conversor"
import DragonRestructurer from "./restructurers/dragon"
import { CreateConfigOptions } from "./types"
import RestructuredConfig from "./restructured-config"
import { GameConfigData } from "./types/data"
import Localization from "../localization"

export type ConfigOptions = {
    rawData: GameConfigData
    endpointUrl?: string
    token?: string
    language?: string
}

class Config {
    private readonly rawData: GameConfigData
    public readonly endpointUrl?: string
    public readonly token?: string 
    public readonly language?: string

    public constructor({
        rawData,
        endpointUrl,
        token,
        language
    }: ConfigOptions) {
        this.rawData = rawData
        this.endpointUrl = endpointUrl
        this.token = token
        this.language = language
    }

    public get data() {
        return this.rawData.game_data.config
    }

    public static async create({
        endpointUrl,
        token,
        userId,
        language,
        filter,
        platform
    }: CreateConfigOptions) {
        if (token && userId) {
            const response = await axios.post(endpointUrl, null, {
                params: {
                    token: token,
                    userId: userId,
                    filter: filter?.join(","),
                    platform: platform
                }
            })

            return new Config(response.data)
        }

        const response = await axios.get(endpointUrl, {
            params: {
                filter: filter?.join(","),
                platform: platform
            }
        })

        return new Config({
            rawData: response.data,
            endpointUrl: endpointUrl,
            token: token,
            language: language
        })
    }

    public restructure(localization: Localization): RestructuredConfig {
        const config = this.rawData.game_data.config

        const translate = localization.translate.bind(localization)
        const translatedItems = config.items.map(translate)

        const preRestructuredItems = objectKeysConversor.replace({
            oldString: " ",
            newString: "_",
            object: objectKeysConversor.toPlural(
                objectKeysConversor.toLowerCase(
                    groupBy(translatedItems, "group_type")
                )
            )
        }) as RestructuredItems

        const dragonRestructurer = new DragonRestructurer()

        return new RestructuredConfig({
            items: {
                ...preRestructuredItems,
                dragons: preRestructuredItems.dragons.map(dragonRestructurer.restructure)
            }
        })
    }
}

export default Config