export function convertToSlug(str) {
    return str.replaceAll(" ","-").toLowerCase()
}