export function checkSlugRegex(str) {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str)
}