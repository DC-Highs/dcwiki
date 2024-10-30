export type LocalizationObjectData = Record<string, string>

export type LocalizationArrayData = Record<string, string>[]

export type LocalizationData = LocalizationObjectData | LocalizationArrayData

export type ComparisonResultNewField = {
    key: string
    value: string
}

export type ComparisonResultEditedFieldValues = {
    old: string
    new: string
}

export type ComparisonResultEditedField = {
    key: string
    values: ComparisonResultEditedFieldValues
}

export type ComparisonResultDeletedField = {
    key: string
    value: string
}

export type ComparisonResult = {
    newFields: ComparisonResultNewField[]
    editedFields: ComparisonResultEditedField[]
    deletedFields: ComparisonResultDeletedField[]
}

export type QueryfyStringOptions = {
    text: string
    lowerCase?: boolean
    normalizeLetters?: boolean
    trimSpaces?: boolean
}

export type SearchKeysOptions = {
    query: string
} & Omit<QueryfyStringOptions, "text">

export type SearchValuesOptions = {
    query: string
} & Omit<QueryfyStringOptions, "text">
