import { RestructuredConfigData } from "./types/restructured-data/index.type"
import DragonsSet from "../helpers/dragons-set.helper"
import DataCompiler from "./data-compiler"



class RestructuredConfig {
    public constructor(public readonly data: RestructuredConfigData) { }

    public readonly dragons = new DragonsSet(...this.data.items.dragons)

    public readonly dataCompiler = new DataCompiler({
        acceptedPrefixes: [
            "basic_",
            "trainable_",
            "top_",
            "middle_",
            "bottom_",
            "1_",
            "2_",
            "3_",
            "4_"
        ],
        idsSuffix: "_ids",
        idSuffix: "_id"
    })
}

export default RestructuredConfig