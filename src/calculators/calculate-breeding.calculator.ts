import axios from "axios"

export type BreedingParentDragon = {
    id: number
    stars: number
    perks: number
}

export type CalculateBreedingOptions = {
    parents: [BreedingParentDragon, BreedingParentDragon]
}

async function calculateBreeding({ parents }: CalculateBreedingOptions) {
    const url = "https://www.ditlep.com/Breeding/CalculateNewBreeding"

    const response = await axios.get(url, {
        
    })
}

export default calculateBreeding