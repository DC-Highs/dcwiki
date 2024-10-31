import { RestructuredBuyPrice, RestructuredSellPrice, RestructuredImageNames, RestructuredDragon } from "../types/restructured-data/items/dragon"
import restructureObject from "../../utils/restructure-object"
import numberToBoolean from "../../utils/number-to-boolean"
import { Item } from "../types/data"

export type DragonRestructurerOptions = {}

class DragonRestructurer {
    public restructure(data: Item): RestructuredDragon {
        const buyPrice: Partial<RestructuredBuyPrice> = {}
        const sellPrice: Partial<RestructuredSellPrice> = {}

        if (data.costs.length > 1 || data.sell_price.length > 1) {
            throw new Error(`The cost of buying or selling the dragon received a completely unexpected amount: ${data.costs}; ${data.sell_price}`)
        }

        const rawBuyPrice = Array.isArray(data.costs) ? data.costs[0] : data.costs
        const rawSellPrice = Array.isArray(data.sell_price[0]) ? data.sell_price[0] : data.sell_price
        const buyPriceKeys = Object.keys(rawBuyPrice)
        const sellPriceKeys = Object.keys(rawSellPrice)
        const fieldsToAdd: [string, any][] = []

        if (buyPriceKeys.includes("g")) {
            buyPrice.amount = rawBuyPrice.g
            buyPrice.type = "gold"
        } else if (buyPriceKeys.includes("c")) {
            buyPrice.amount = rawBuyPrice.c
            buyPrice.type = "gem"
        } else {
            const key = Object.keys(rawBuyPrice)[0]
            buyPrice.amount = rawBuyPrice[key]
            buyPrice.type = key
        }

        if (sellPriceKeys.includes("g")) {
            sellPrice.amount = rawSellPrice.g
            sellPrice.type = "gold"
        } else if (sellPriceKeys.includes("c")) {
            sellPrice.amount = rawSellPrice.c
            sellPrice.type = "gem"
        } else {
            const key = Object.keys(rawSellPrice)[0]
            sellPrice.amount = rawSellPrice[key]
            sellPrice.type = key
        }

        const imageNames: RestructuredImageNames = {
            android: data.img_name_android,
            default: data.img_name,
            mobile: data.img_name_mobile
        }

        fieldsToAdd.push(
            ["image_names", imageNames],
            ["buy_price", buyPrice],
            ["sell_price", sellPrice]
        )

        return restructureObject({
            rawDict: data,
            fieldsToAdd: fieldsToAdd,
            keysToRemove: ["group_type", "mobile_version", "android_version", "display_order", "difficulty", "rarity", "background_vfx", "foreground_vfx", "img_name", "img_name_android", "img_name_mobile", "giftable", "gift_level", "swim", "new_item", "deity_breeding", "costs", "sell_price"],
            fieldsToConvertValue: [
                ["can_breed", numberToBoolean],
                ["breedable", numberToBoolean],
                ["in_store", numberToBoolean]
            ],
            keysToRename: [
                ["dragon_rarity", "rarity"],
                ["attacks", "basic_attack_ids"],
                ["trainable_attacks", "trainable_attack_ids"],
                ["img_name_mobile", "img_name"],
                ["attributes", "elements"],
                ["upgrade_levels", "upgrade_phase_levels"],
                ["dragon_ownership_id", "ownership_id"]
            ]
        })
    }
}

export default DragonRestructurer