export interface RestructuredBuyPrice {
    amount: number
    type: string
}

export interface RestructuredSellPrice {
    amount: number
    type: string
}

export interface RestructuredImageNames {
    default?: string
    android?: string
    mobile?: string
}

export interface RestructuredDragon {
    rarity: string
    basic_attack_ids: number[]
    trainable_attack_ids: number[]
    image_names?: RestructuredImageNames
    elements: string[]
    upgrade_phase_levels: number[]
    id: number
    name?: string
    speed: number
    hatching_time: number
    breeding_time: number
    xp: number
    lvl: number
    starting_coins: number
    coins_added: number
    can_breed: boolean
    breedable: boolean
    category: number
    in_store: boolean
    in_store_min_level: number
    flying_level: number
    description?: string
    seeds_to_summon: number
    hatching_time_b: number
    breeding_time_b: number
    base_attack: number
    base_life: number
    ownership_id: number
    buy_price: RestructuredBuyPrice
    sell_price: RestructuredSellPrice
    tags?: string[]
    speed_override?: number
    passive_skills?: number[]
    post_skills?: number[]
}