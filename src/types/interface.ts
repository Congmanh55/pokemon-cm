export interface IPokemons {
    name: string;
    url: string;
}
export interface IPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: any;
    abilities:  {
        ability: {name: string, url: string}
    };
}
