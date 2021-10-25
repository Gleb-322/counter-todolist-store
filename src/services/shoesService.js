export default class ShoesService {

    _apiBase = 'http://localhost:3000'

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`)

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, received ${response.status}`);
        }

        const result = await response.json()
        return result
    }

    async getStoreItems() {
        return await this.getResource('/items/')
    }
}
