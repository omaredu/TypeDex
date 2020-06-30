
enum Contrast {
    Light = "#fff",
    Dark = "#212121",
}

enum Colors {
  Bug = "#A3BC00",
  Dark = "#835544",
  Dragon = "#7C63F3",
  Electric = "#FCD303",
  Fairy = "#F7AAF5",
  Fighting = "#D6523F",
  Fire = "#FE4214",
  Flying = "#419AFF",
  Ghost = "#6663BD",
  Grass = "#20D046",
  Ground = "#EABA4B", 
  Ice = "#01DCFF",
  Normal = "#B9B9AD",
  Poison = "#BE559B",
  Psychic = "#F5479D",
  Rock = "#C2AB64",
  Steel = "#ABADBC",
  Water = "#009AFE"
}

let Types = Object.freeze({
  Bug: {
    name: "bug",
    color: Colors.Bug,
    contrast: Contrast.Light,
  },
  Dark: {
    name: "dark",
    color: Colors.Dark,
    contrast: Contrast.Light,
  },
  Dragon: {
    name: "dragon",
    color: Colors.Dragon,
    contrast: Contrast.Light,
  },
  Electric: {
    name: "electric",
    color: Colors.Electric,
    contrast: Contrast.Light,
  },
  Fairy: {
    name: "fairy",
    color: Colors.Fairy,
    contrast: Contrast.Light,
  },
  Fighting: {
    name: "fighting",
    color: Colors.Fighting,
    contrast: Contrast.Light,
  },
  Fire: {
    name: "fire",
    color: Colors.Fire,
    contrast: Contrast.Light,
  },
  Flying: {
    name: "flying",
    color: Colors.Flying,
    contrast: Contrast.Light,
  },
  Ghost: {
    name: "ghost",
    color: Colors.Ghost,
    contrast: Contrast.Light,
  },
  Grass: {
    name: "grass",
    color: Colors.Grass,
    contrast: Contrast.Light,
  },
  Ground: {
    name: "ground",
    color: Colors.Ground,
    contrast: Contrast.Light,
  },
  Ice: {
    name: "ice",
    color: Colors.Ice,
    contrast: Contrast.Light,
  },
  Normal: {
    name: "normal",
    color: Colors.Normal,
    contrast: Contrast.Light,
  },
  Poison: {
    name: "poison",
    color: Colors.Poison,
    contrast: Contrast.Light,
  },
  Psychic: {
    name: "psychic",
    color: Colors.Psychic,
    contrast: Contrast.Light,
  },
  Rock: {
    name: "rock",
    color: Colors.Rock,
    contrast: Contrast.Light,
  },
  Steel: {
    name: "steel",
    color: Colors.Steel,
    contrast: Contrast.Light,
  },
  Water: {
    name: "water",
    color: Colors.Water,
    contrast: Contrast.Light,
  },
});

export default Types