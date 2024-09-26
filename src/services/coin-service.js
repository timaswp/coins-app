export default class CoinService {
    _apiBase = 'http://localhost:3001/api/coin';

    async getResource(url = '') {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getCategories() {
        return await this.getResource();
    }

    async getAdvancedOptions() {
        return await this.getResource('/filter');
    }

    async getCoinsList(search) {
        return await this.getResource(`/list${search}`);
    }

    async getCoinById(id) {
        return await this.getResource(`/${id}`);
    }
}