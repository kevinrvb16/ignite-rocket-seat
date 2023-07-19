export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
    console.log(pathWithParams)
    const pathregex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)
    return pathregex
}