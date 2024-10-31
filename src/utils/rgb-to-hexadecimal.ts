function rgbToHexadecimal(rgb: number[]): string {
    const [r, g, b] = rgb

    const toHex = (value: number): string => {
        const hex = value.toString(16).toUpperCase()
        return hex.padStart(2, "0")
    }

    return `${toHex(r)}${toHex(g)}${toHex(b)}`
}

export default rgbToHexadecimal