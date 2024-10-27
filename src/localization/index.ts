import axios from "axios"

import type {
    ComparisonResult,
    ComparisonResultDeletedField,
    ComparisonResultEditedField,
    ComparisonResultNewField,
    LocalizationArrayData,
    LocalizationData,
    LocalizationObjectData,
    QueryfyStringOptions,
    SearchKeysOptions,
    SearchValuesOptions
} from "./types.localization"

export type AnyLocalization = LocalizationData | Localization

export type LocalizationOptions = {
    data: LocalizationData
    language?: string
    endpointUrl?: string
}

class Localization {
    public readonly endpointUrl?: string
    public readonly language?: string
    private arrayData: LocalizationArrayData = []
    private objectData: LocalizationObjectData = {}

    public constructor({ data, endpointUrl, language }: LocalizationOptions) {
        this.endpointUrl = endpointUrl
        this.language = language
        this.setData(data)
    }

    public setData(data: LocalizationData) {
        if (Localization.isArrayData(data)) {
            this.arrayData = data as LocalizationArrayData
            this.objectData = Localization.arrayToObject(data as LocalizationArrayData)
        } else {
            this.arrayData = Localization.objectToArray(data as LocalizationObjectData)
            this.objectData = data as LocalizationObjectData
        }
    }

    public get object() {
        return this.objectData
    }

    public get array() {
        return this.arrayData
    }

    private static objectToArray(data: LocalizationObjectData): LocalizationArrayData {
        return Object.entries(data).map(([key, value]) => ({ [key]: value }))
    }

    private static arrayToObject(data: LocalizationArrayData): LocalizationObjectData {
        return Object.assign({}, ...data as LocalizationArrayData)
    }

    private static instanceToArray(instance: Localization) {
        return instance.arrayData
    }

    private static instanceToObject(instance: Localization): LocalizationObjectData {
        return instance.objectData
    }

    private static isArrayData(data: LocalizationData): boolean {
        return Array.isArray(data)
    }

    public static buildEndpointUrl(language: string): string {
        return `https://sp-translations.socialpointgames.com/deploy/dc/android/prod/dc_android_${language}_prod_wetd46pWuR8J5CmS.json`
    }

    public static async fetch(language: string): Promise<LocalizationData> {
        const url = Localization.buildEndpointUrl(language)
        const response = await axios.get(url)
        return response.data as LocalizationData
    }

    public static async create(language: string) {
        const data = await Localization.fetch(language)

        return new Localization({
            data: data,
            language: language,
            endpointUrl: Localization.buildEndpointUrl(language)
        })
    }

    public getValueFromKey(key: string): string | undefined {
        return this.objectData[key]
    }

    public getKeyFromValue(value: string): string | undefined {
        let key: string | undefined = undefined

        for (const [currentKey, currentValue] of Object.entries(this.objectData)) {
            if (value === currentValue) {
                key = currentKey
                break
            }
        }

        return key
    }

    public getDragonName(id: number): string | undefined {
        const key = `tid_unit_${id}_name`
        return this.getValueFromKey(key)
    }

    public getDragonDescription(id: number): string | undefined {
        const key = `tid_unit_${id}_description`
        return this.getValueFromKey(key)
    }

    public getAttackName(id: number): string | undefined {
        const key = `tid_attack_name_${id}`
        return this.getValueFromKey(key)
    }

    public getSkillName(id: number): string | undefined {
        const key = `tid_skill_name_${id}`
        return this.getValueFromKey(key)
    }

    public getSkillDescription(id: number): string | undefined {
        const key = `tid_skill_description_${id}`
        return this.getValueFromKey(key)
    }

    private queryfyString({
        text,
        lowerCase,
        normalizeLetters,
        trimSpaces
    }: QueryfyStringOptions): string {
        if (lowerCase) {
            text = text.toLowerCase()
        }

        if (normalizeLetters) {
            text = text
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
        }

        if (trimSpaces) {
            text = text.trim()
        }

        return text
    }

    public searchKeys({
        query,
        lowerCase = true,
        normalizeLetters = true,
        trimSpaces = true
    }: SearchKeysOptions): string[] {
        query = this.queryfyString({
            text: query,
            lowerCase: lowerCase,
            normalizeLetters: normalizeLetters,
            trimSpaces: trimSpaces
        })

        const keys = Object.keys(this.objectData)

        const results = keys.filter(key => {
            const parsedKey = this.queryfyString({
                text: key,
                lowerCase: lowerCase,
                normalizeLetters: normalizeLetters,
                trimSpaces: trimSpaces
            })

            return parsedKey.includes(query)
        })

        return results
    }

    public searchValues({
        query,
        lowerCase = true,
        normalizeLetters = true,
        trimSpaces = true
    }: SearchValuesOptions): string[] {
        query = this.queryfyString({
            text: query,
            lowerCase: lowerCase,
            normalizeLetters: normalizeLetters,
            trimSpaces: trimSpaces
        })

        const values = Object.values(this.objectData)

        const results = values.filter(value => {
            const parsedValue = this.queryfyString({
                text: value,
                lowerCase: lowerCase,
                normalizeLetters: normalizeLetters,
                trimSpaces: trimSpaces
            })

            return parsedValue.includes(query)
        })

        return results
    }

    public static toObject(anyLocalization: AnyLocalization): LocalizationObjectData {
        if (anyLocalization instanceof Localization) {
            return Localization.instanceToObject(anyLocalization)
        }
    
        if (Localization.isArrayData(anyLocalization)) {
            return Localization.arrayToObject(anyLocalization as LocalizationArrayData)
        }
    
        return anyLocalization as LocalizationObjectData
    }

    public static toArray(anyLocalization: AnyLocalization): LocalizationArrayData {
        if (anyLocalization instanceof Localization) {
            return Localization.instanceToArray(anyLocalization)
        }
    
        if (!Array.isArray(anyLocalization)) {
            return Localization.objectToArray(anyLocalization)
        }
    
        return anyLocalization as LocalizationArrayData
    }

    public static toInstance(anyLocalization: AnyLocalization): Localization {
        if (anyLocalization instanceof Localization) {
            return anyLocalization
        }

        return new Localization({ data: anyLocalization })
    }

    private static compareObjects(
        newObject: LocalizationObjectData,
        oldObject: LocalizationObjectData
    ): ComparisonResult {
        const newFields: ComparisonResultNewField[] = []
        const editedFields: ComparisonResultEditedField[] = []
        const deletedFields: ComparisonResultDeletedField[] = []

        for (const key in newObject) {
            if (!(key in oldObject)) {
                newFields.push({
                    key: key,
                    value: newObject[key]
                })
            } else if (newObject[key] !== oldObject[key]) {
                editedFields.push({
                    key: key,
                    values: {
                        old: oldObject[key],
                        new: newObject[key]
                    }
                })
            }
        }

        for (const key in oldObject) {
            if (!(key in newObject)) {
                deletedFields.push({
                    key: key,
                    value: oldObject[key]
                })
            }
        }

        return { newFields, editedFields, deletedFields }
    }

    public compare(oldLocalization: AnyLocalization): ComparisonResult {
        const oldObjectData = Localization.toObject(oldLocalization)
        return Localization.compareObjects(this.objectData, oldObjectData)
    }

    public static compare(a: AnyLocalization, b: AnyLocalization): ComparisonResult {
        const aObject = Localization.toObject(a)
        const bObject = Localization.toObject(b)
        return Localization.compareObjects(bObject, aObject)
    }

    public translate<T extends Record<string, any>>(object: T): T {
        const translatedObject: Record<string, any> = {...object}

        for (const key in translatedObject) {
            if (["tid_name", "chest_name_key", "name_key", "island_title_tid"].includes(key)) {
                const name = this.getValueFromKey(object[key])

                if (name) {
                    translatedObject.name = name
                    delete translatedObject[key]
                }
            } else if (key === "type_name_key") {
                const typeName = this.getValueFromKey(object[key])

                if (typeName) {
                    translatedObject.type = typeName
                    delete translatedObject[key]
                }
            }

            if (key === "description_key") {
                const description = this.getValueFromKey(object[key])

                if (description) {
                    translatedObject.description = description
                    delete translatedObject[key]
                }
            }

            if (key === "group_type" && translatedObject.group_type === "DRAGON") {
                const dragonId = translatedObject.id as number
                translatedObject.name = this.getDragonName(dragonId)
                translatedObject.description = this.getDragonDescription(dragonId)
            }
        }

        return translatedObject as T
    }
}

export default Localization