
export default class Pokemon {
    private _info: Object = {}
    private _id: number = 0;
    private _requestInit: Object = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    static requestInit: Object = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    constructor(private pokemonId: number | string) {}

    async fetchInfo() {
        let pokemonFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`, this._requestInit)
        let pokemonInfo = await pokemonFetch.json()

        this._id = pokemonInfo.id
        this._info = pokemonInfo
    }

    static getSprite(pokemonId: number): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    }

    static async getList(limit: number, offset: number ) {
        let pokemonFetch = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, this.requestInit)
        let pokemonInfo = await pokemonFetch.json()

        return pokemonInfo.results
    }

    get id(): number { return this._id }
    get info(): Object { return this._info }
}