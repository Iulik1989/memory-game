
export const getCatsItems = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    return await res.json()
}
