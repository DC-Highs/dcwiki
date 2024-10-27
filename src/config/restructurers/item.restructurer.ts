import Localization from "../../localization"
import { Item } from "../types/data.type"

export type ItemRestructurerOptions = {
    localization: Localization

}

export type RestructureOptions = {
    data: Item
    outputKey: string
}

class ItemRestructurer {
    public restructure({ data, outputKey }: RestructureOptions) {
        
    }
}