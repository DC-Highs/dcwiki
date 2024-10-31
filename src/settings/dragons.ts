import DragonCategories from "../enums/dragon-categories"
import DragonRarities from "../enums/dragon-rarities"
import DragonPhases from "../enums/dragon-phases"
import DragonRanks from "../enums/dragon-ranks"

const dragonsSetting = {
    levels: {
        minimum: 1,
        maximum: 70,
        maximumWithoutEmpowerment: 40,
        minimumToEmpower: 7
    },
    ranks: {
        bronzeIII: {
            index: DragonRanks.BronzeIII,
            nameKey: "tid_rank_bronze_iii"
        },
        bronzeII: {
            index: DragonRanks.BronzeII,
            nameKey: "tid_rank_bronze_ii"
        },
        bronzeI: {
            index: DragonRanks.BronzeI,
            nameKey: "tid_rank_bronze_i"
        },
        silverIII: {
            index: DragonRanks.SilverIII,
            nameKey: "tid_rank_silver_iii"
        },
        silverII: {
            index: DragonRanks.SilverII,
            nameKey: "tid_rank_silver_ii"
        },
        silverI: {
            index: DragonRanks.SilverI,
            nameKey: "tid_rank_silver_i"
        },
        goldIII: {
            index: DragonRanks.GoldIII,
            nameKey: "tid_rank_gold_iii"
        },
        goldII: {
            index: DragonRanks.GoldII,
            nameKey: "tid_rank_gold_ii"
        },
        goldI: {
            index: DragonRanks.GoldI,
            nameKey: "tid_rank_gold_i"
        },
        platinumIII: {
            index: DragonRanks.PlatinumIII,
            nameKey: "tid_rank_platinum_iii"
        },
        platinumII: {
            index: DragonRanks.PlatinumII,
            nameKey: "tid_rank_platinum_ii"
        },
        platinumI: {
            index: DragonRanks.PlatinumI,
            nameKey: "tid_rank_platinum_i"
        },
    },
    empowerment: {
        starts: {
            minimum: 0,
            maximum: 5,
        },
        stages: [
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
            }
        ],
    },
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
    },
    attacks: {
        rankPowers: {
            1: .5,
            2: .10,
            3: .15,
            4: .20,
            5: .25,
            6: .30,
            7: .35,
            8: .40,
            9: .50,
            10: .55,
            11: .60,
            12: .70
        },
        oneStarPower: .38223,
        categoryPowers: {
            1: 3200,
            2: 3600,
            3: 4000,
            4: 4800,
            5: 5600,
            6: 5000,
            7: 4500,
            8: 3000,
            9: 6000,
            10: 7300,
            11: 9000
        },
        damageVariant: [.9, 1.1]
    }
}

export default dragonsSetting