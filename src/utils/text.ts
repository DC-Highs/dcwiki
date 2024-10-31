function normalizeString(str: string): string {
    const normalizedString = str
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
        .trim()

    return normalizedString
}

export {
    normalizeString
}