import DragonCategories from "../enums/dragon-categories.enum"
import DragonRarities from "../enums/dragon-rarities.enum"
import DragonPhases from "../enums/dragon-phases.enum"
import DragonRanks from "../enums/dragon-ranks.enum"

const dragons = {
    levels: {
        minimum: 1,
        maximum: 70,  
    },
    ranks: {
        [DragonRanks.BronzeIII]: {
            nameKey: "tid_rank_bronze_iii"
        },
        [DragonRanks.BronzeII]: {
            nameKey: "tid_rank_bronze_ii"
        },
        [DragonRanks.BronzeI]: {
            nameKey: "tid_rank_bronze_i"
        },
        [DragonRanks.SilverIII]: {
            nameKey: "tid_rank_silver_iii"
        },
        [DragonRanks.SilverII]: {
            nameKey: "tid_rank_silver_ii"
        },
        [DragonRanks.SilverI]: {
            nameKey: "tid_rank_silver_i"
        },
        [DragonRanks.GoldIII]: {
            nameKey: "tid_rank_gold_iii"
        },
        [DragonRanks.GoldII]: {
            nameKey: "tid_rank_gold_ii"
        },
        [DragonRanks.GoldI]: {
            nameKey: "tid_rank_gold_i"
        },
        [DragonRanks.PlatinumIII]: {
            nameKey: "tid_rank_platinum_iii"
        },
        [DragonRanks.PlatinumII]: {
            nameKey: "tid_rank_platinum_ii"
        },
        [DragonRanks.PlatinumI]: {
            nameKey: "tid_rank_platinum_i"
        },
    },
    empowerment: [
        {
            requestedOrbs: 120,
            usableJokerOrbs: 25,
            dragonMaximumLevel: 45
        },
        {
            requestedOrbs: 200,
            usableJokerOrbs: 50,
            dragonMaximumLevel: 50
        },
        {
            requestedOrbs: 320,
            usableJokerOrbs: 80,
            dragonMaximumLevel: 55
        },
        {
            requestedOrbs: 560,
            usableJokerOrbs: 170,
            dragonMaximumLevel: 60
        },
        {
            requestedOrbs: 800,
            usableJokerOrbs: 240,
            dragonMaximumLevel: 70
        },
    ],
    categories: {
        basic: DragonCategories.Basic,
        proBasic: DragonCategories.ProBasic,
        preAdvanced: DragonCategories.PreAdvanced,
        advanced: DragonCategories.Advanced,
        elite: DragonCategories.Elite,
        amazing: DragonCategories.Amazing,
        charming: DragonCategories.Charming,
        graceful: DragonCategories.Graceful,
        champion: DragonCategories.Champion,
        mythical: DragonCategories.Mythical,
        heroic: DragonCategories.Heroic
    },
    rarities: {
        common: DragonRarities.Common,
        rare: DragonRarities.Rare,
        veryRare: DragonRarities.VeryRare,
        epic: DragonRarities.Epic,
        legendary: DragonRarities.Legendary,
        mythic: DragonRarities.Mythic,
        heroic: DragonRarities.Heroic
    },
    phases: {
        egg: DragonPhases.Egg,
        baby: DragonPhases.Baby,
        young: DragonPhases.Young,
        adult: DragonPhases.Adult
    }
}

export default dragons