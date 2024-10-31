import axios from "axios"

export type CalculateDragonBreedingResult = CalculateDragonBreedingResultItem[]

export type CalculateDragonBreedingResultItem = {
    dragon: CalculateDragonBreedingResultItemDragon
    empPower: number
    odd: number
    enable: boolean
}

export type CalculateDragonBreedingResultItemDragon = {
    attackSkills: any[]
    hasSKill: boolean
    trainableAttackSkills: any
    attackSkillsRaw: number[]
    trainableAttackSkillsRaw: number[]
    dragonAttribute: string[]
    level: number
    isStuck: boolean
    isTraining: boolean
    isBreeding: boolean
    isInTower: boolean
    rarity: string
    elements: string[]
    kill: number
    hp: number
    damage: number
    maxHp: number
    maxDamage: number
    funModeDragonId: number
    amount: number
    description: any
    urlName: string
    priceSell: number
    priceGold: number
    priceGem: number
    hatchingTime: number
    breedingTime: number
    category: number
    inStore: boolean
    breedable: boolean
    releaseDate: any
    rank: CalculateDragonBreedingResultItemRank
    originalTypeId: number
    maxSpeed: number
    baseSpeed: number
    weaknessElements: string[]
    strongElements: string[]
    skills: any[]
    passiveSkills: any[]
    skillType: number
    familyName: any
    familyIcon: any
    seedsToSummon: number
    skins: string[]
    habitatId: number
    workId: number
    xp: any
    workingSecondsLeft: number
    grade: number
    id: number
    groupType: string
    type: number
    typeId: number
    image: string
    customName: any
    name: string
}

export interface CalculateDragonBreedingResultItemRank {
    globalRank: number
    rarityRank: number
    categoryRank: number
    speedRank: number
}

export type BreedingParentDragon = {
    id: number
    stars?: number
    perks?: number
}

export type calculateDragonBreedingOptions = {
    parents: [BreedingParentDragon, BreedingParentDragon]
}

async function calculateDragonBreeding({ parents }: calculateDragonBreedingOptions): Promise<CalculateDragonBreedingResult> {
    const url = "https://www.ditlep.com/Breeding/CalculateNewBreeding"

    const parentOneParams = {
        parent1Id: parents[0].id,
        parent1Perk: parents[0].perks ?? 0,
        parent1Grade: parents[0].stars ?? 0,
    }

    const parentTwoParams = {
        parent2Id: parents[1].id,
        parent2Perk: parents[1].perks ?? 0,
        parent2Grade: parents[1].stars ?? 0,
    }

    const response = await axios.get(url, {
        params: {
            ...parentOneParams,
            ...parentTwoParams,
        }
    })

    if (response.status !== 200) {
        throw new Error(`Failed to calculate dragon breeding: ${response.statusText}`)
    }

    return response.data
}

export default calculateDragonBreeding