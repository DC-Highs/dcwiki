import { RestructuredDragon } from "../config/types/restructured-data/items/dragon.type"
import elementsSetting from "../settings/elements.setting"
import { normalizeString } from "../utils/text.util"

export type DragonsSetCustomFilterOptions = {
    name?: string
    id?: number
    bookIndex?: number
    rarities?: string[]
    category?: number
    elements?: string[]
    description?: string
}

export type FilterResultItem = {
    item: RestructuredDragon
    score: number
}

class DragonsSet extends Array<RestructuredDragon> {
    public findById(id: number): RestructuredDragon | undefined {
        return this.find((dragon) => dragon.id === id)
    }

    public findByOwnershipId(ownershipId: number): RestructuredDragon | undefined {
        return this.find((dragon) => dragon.ownership_id === ownershipId)
    }

    public findByName(name: string): RestructuredDragon | undefined {
        return this.find((dragon) => dragon.name && dragon.name.toLowerCase() === name.toLowerCase())
    }

    public filterByRarity(rarity: string): DragonsSet {
        return new DragonsSet(...this.filter((dragon) => dragon.rarity === rarity))
    }

    public filterByCategory(category: number): DragonsSet {
        return new DragonsSet(...this.filter((dragon) => dragon.category === category))
    }

    public filterByIsBreedable(isBreedable: boolean) {
        return new DragonsSet(...this.filter((dragon) => dragon.can_breed === isBreedable))
    }

    public filterByInStore(isInStore: boolean) {
        return new DragonsSet(...this.filter((dragon) => dragon.in_store === isInStore))
    }

    public filterByTags(tags: string[]) {
        return new DragonsSet(...this.filter((dragon) => dragon.tags && dragon.tags.some((tag) => tags.includes(tag))))
    }

    public customFilter({
        id,
        name,
        bookIndex,
        rarities,
        category,
        elements,
        description,
    }: DragonsSetCustomFilterOptions) {
        const results: FilterResultItem[] = []

        for (const dragon of this) {
            let score = 0

            if (
                !id &&
                !name &&
                !bookIndex &&
                !rarities &&
                !category &&
                !elements &&
                !description
            ) {
                results.push({
                    item: dragon,
                    score: .1
                })

                continue
            }

            if (category) {
                if (dragon.category === category) {
                    score += 3
                } else continue
            } 

            if (rarities && rarities.length > 0) {
                if (rarities.includes(dragon.rarity)) {
                    score += 3
                } else continue
            }

            if (id) {
                const tempScore = Number(score)

                if (id === dragon.id) {
                    score += 3
                } else if (id && String(dragon.id).includes(
                    String(id)
                )) {
                    score += .5
                }

                if (tempScore === score) continue
            }

            if (name) {
                const tempScore = Number(score)

                if (normalizeString(name) === normalizeString(dragon.name ?? "null")) {
                    score += 3
                } else if (normalizeString(dragon.name ?? "null").includes(normalizeString(name))) {
                    score += .5
                }

                if (tempScore === score) continue
            }

            if (description) {
                const tempScore = Number(score)

                if (normalizeString(description) === normalizeString(dragon.description ?? "null")) {
                    score += 3
                } else if (description && normalizeString(dragon.description ?? "null").includes(normalizeString(description))) {
                    score += .5
                }

                if (tempScore === score) continue
            }

            if (elements && elements.length > 0) {
                const tempScore = Number(score)

                if (elements.every((element: string) => {
                    return dragon.elements.map(el => elementsSetting[el as keyof typeof elementsSetting]).includes(element as any)
                })) {
                    score += 3
                } else {
                    for (const element in elements) {
                        if (dragon.elements.map(el => elementsSetting[el as keyof typeof elementsSetting]).includes(element as any)) {
                            score += .75
                        }
                    }
                }

                if (tempScore === score) continue
            } else {
                score += .1
            }

            if (score > 0) {
                results.push({
                    item: dragon,
                    score: score
                })
            }
        }

        const filteredDragons = results
            .sort((a, b) => b.score - a.score)
            .map(result => result.item)

        return new DragonsSet(...filteredDragons)
    }
}

export default DragonsSet