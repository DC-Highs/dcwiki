function numberToBoolean(number: number): boolean {
    if (number === 0) return false
    if (number === 1) return true
    throw new Error("Invalid number. Expected 0 or 1.")
}

export default numberToBoolean