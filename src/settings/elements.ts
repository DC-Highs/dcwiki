import DragonElements from "../enums/dragon-elements"

const elementsSetting = {
    [DragonElements.Terra]: {
        acronym: "e",
        nameKey: "TerraKey_DragonUtils",
        strongs: ["electric", "flame"],
        weaknesses: ["metal", "war"]
    },
    [DragonElements.Flame]: {
        acronym: "f",
        nameKey: "FlameKey_DragonUtils",
        strongs: ["nature", "ice"],
        weaknesses: ["sea", "terra"]
    },
    [DragonElements.Sea]: {
        acronym: "w",
        nameKey: "SeaKey_DragonUtils",
        strongs: ["flame", "war"],
        weaknesses: ["nature", "electric"]
    },
    [DragonElements.Nature]: {
        acronym: "p",
        nameKey: "NatureKey_DragonUtils",
        strongs: ["sea", "light"],
        weaknesses: ["flame", "ice"]
    },
    [DragonElements.Electric]: {
        acronym: "el",
        nameKey: "ElectricKey_DragonUtils",
        strongs: ["sea", "metal"],
        weaknesses: ["terra", "light"]
    },
    [DragonElements.Ice]: {
        acronym: "i",
        nameKey: "IceKey_DragonUtils",
        strongs: ["nature", "war"],
        weaknesses: ["flame", "metal"]
    },
    [DragonElements.Metal]: {
        acronym: "m",
        nameKey: "MetalKey_DragonUtils",
        strongs: ["terra", "ice"],
        weaknesses: ["electric", "dark"]
    },
    [DragonElements.Dark]: {
        acronym: "d",
        nameKey: "DarkKey_DragonUtils",
        strongs: ["metal", "light"],
        weaknesses: ["war"]
    },
    [DragonElements.Light]: {
        acronym: "li",
        nameKey: "LightKey_DragonUtils",
        strongs: ["electric", "dark"],
        weaknesses: ["nature"]
    },
    [DragonElements.War]: {
        acronym: "wr",
        nameKey: "WarKey_DragonUtils",
        strongs: ["terra", "dark"],
        weaknesses: ["sea", "ice"]
    },
    [DragonElements.Pure]: {
        acronym: "pu",
        nameKey: "PureKey_DragonUtils",
        strongs: ["wind"],
        weaknesses: ["primal"]
    },
    [DragonElements.Legend]: {
        acronym: "l",
        nameKey: "LegendKey_DragonUtils",
        strongs: ["primal"],
        weaknesses: ["pure"]
    },
    [DragonElements.Primal]: {
        acronym: "pr",
        nameKey: "tid_nw_hud_element_primal",
        strongs: ["pure"],
        weaknesses: ["time"]
    },
    [DragonElements.Wind]: {
        acronym: "wd",
        nameKey: "tid_nw_hud_element_wind",
        strongs: ["time"],
        weaknesses: ["legend"]
    },
    [DragonElements.Time]: {
        acronym: "ti",
        nameKey: "tid_nw_hud_element_time",
        strongs: ["legend"],
        weaknesses: ["wind"]
    },
    [DragonElements.Happy]: {
        acronym: "hp",
        nameKey: "tid_nw_hud_element_happiness",
        strongs: ["chaos", "magic"],
        weaknesses: []
    },
    [DragonElements.Chaos]: {
        acronym: "ch",
        nameKey: "tid_nw_hud_element_chaos",
        strongs: ["magic", "soul"],
        weaknesses: []
    },
    [DragonElements.Magic]: {
        acronym: "mg",
        nameKey: "tid_nw_hud_element_magic",
        strongs: ["soul", "beauty"],
        weaknesses: []
    },
    [DragonElements.Soul]: {
        acronym: "so",
        nameKey: "tid_nw_hud_element_soul",
        strongs: ["dream", "beauty"],
        weaknesses: []
    },
    [DragonElements.Beauty]: {
        acronym: "bt",
        nameKey: "tid_nw_hud_element_beauty",
        strongs: ["dream", "happy"],
        weaknesses: []
    },
    [DragonElements.Dream]: {
        acronym: "dr",
        nameKey: "tid_nw_hud_element_dream",
        strongs: ["happy", "chaos"],
        weaknesses: []
    },
    [DragonElements.Physical]: {
        acronym: "ph",
        name: "Physical",
        strongs: [],
        weaknesses: ["legend"]
    }
}

export default elementsSetting