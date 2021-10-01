export default class ShoesService {

    _apiBase = 'http://localhost:3000'

    async getResource(url) {
        const responce = await fetch(`${this._apiBase}${url}`)

        if (!responce.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, received ${responce.status}`);
        }

        const result = await responce.join()
        return result
    }

    async getStoreItems() {
        return await this.getResource('/items/')
    }
}