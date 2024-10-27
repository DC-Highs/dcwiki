import { RestructuredConfigData } from "./types/restructured-data/index.type"
import DragonsSet from "../helpers/dragons-set.helper"

class RestructuredConfig {
    public constructor(public readonly data: RestructuredConfigData) {}

    public readonly dragons = new DragonsSet(...this.data.items.dragons)

    
}

export default RestructuredConfig