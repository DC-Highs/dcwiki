import DragonElements from "../enums/dragon-elements"

const elementsSetting = {
    [DragonElements.Terra]: {
        acronym: "e",
        nameKey: "TerraKey_DragonUtils",
        strengths: ["electric", "flame"],
        weaknesses: ["metal", "war"]
    },
    [DragonElements.Flame]: {
        acronym: "f",
        nameKey: "FlameKey_DragonUtils",
        strengths: ["nature", "ice"],
        weaknesses: ["sea", "terra"]
    },
    [DragonElements.Sea]: {
        acronym: "w",
        nameKey: "SeaKey_DragonUtils",
        strengths: ["flame", "war"],
        weaknesses: ["nature", "electric"]
    },
    [DragonElements.Nature]: {
        acronym: "p",
        nameKey: "NatureKey_DragonUtils",
        strengths: ["sea", "light"],
        weaknesses: ["flame", "ice"]
    },
    [DragonElements.Electric]: {
        acronym: "el",
        nameKey: "ElectricKey_DragonUtils",
        strengths: ["sea", "metal"],
        weaknesses: ["terra", "light"]
    },
    [DragonElements.Ice]: {
        acronym: "i",
        nameKey: "IceKey_DragonUtils",
        strengths: ["nature", "war"],
        weaknesses: ["flame", "metal"]
    },
    [DragonElements.Metal]: {
        acronym: "m",
        nameKey: "MetalKey_DragonUtils",
        strengths: ["terra", "ice"],
        weaknesses: ["electric", "dark"]
    },
    [DragonElements.Dark]: {
        acronym: "d",
        nameKey: "DarkKey_DragonUtils",
        strengths: ["metal", "light"],
        weaknesses: ["war"]
    },
    [DragonElements.Light]: {
        acronym: "li",
        nameKey: "LightKey_DragonUtils",
        strengths: ["electric", "dark"],
        weaknesses: ["nature"]
    },
    [DragonElements.War]: {
        acronym: "wr",
        nameKey: "WarKey_DragonUtils",
        strengths: ["terra", "dark"],
        weaknesses: ["sea", "ice"]
    },
    [DragonElements.Pure]: {
        acronym: "pu",
        nameKey: "PureKey_DragonUtils",
        strengths: ["wind"],
        weaknesses: ["primal"]
    },
    [DragonElements.Legend]: {
        acronym: "l",
        nameKey: "LegendKey_DragonUtils",
        strengths: ["primal"],
        weaknesses: ["pure"]
    },
    [DragonElements.Primal]: {
        acronym: "pr",
        nameKey: "tid_nw_hud_element_primal",
        strengths: ["pure"],
        weaknesses: ["time"]
    },
    [DragonElements.Wind]: {
        acronym: "wd",
        nameKey: "tid_nw_hud_element_wind",
        strengths: ["time"],
        weaknesses: ["legend"]
    },
    [DragonElements.Time]: {
        acronym: "ti",
        nameKey: "tid_nw_hud_element_time",
        strengths: ["legend"],
        weaknesses: ["wind"]
    },
    [DragonElements.Happy]: {
        acronym: "hp",
        nameKey: "tid_nw_hud_element_happiness",
        strengths: ["chaos", "magic"],
        weaknesses: []
    },
    [DragonElements.Chaos]: {
        acronym: "ch",
        nameKey: "tid_nw_hud_element_chaos",
        strengths: ["magic", "soul"],
        weaknesses: []
    },
    [DragonElements.Magic]: {
        acronym: "mg",
        nameKey: "tid_nw_hud_element_magic",
        strengths: ["soul", "beauty"],
        weaknesses: []
    },
    [DragonElements.Soul]: {
        acronym: "so",
        nameKey: "tid_nw_hud_element_soul",
        strengths: ["dream", "beauty"],
        weaknesses: []
    },
    [DragonElements.Beauty]: {
        acronym: "bt",
        nameKey: "tid_nw_hud_element_beauty",
        strengths: ["dream", "happy"],
        weaknesses: []
    },
    [DragonElements.Dream]: {
        acronym: "dr",
        nameKey: "tid_nw_hud_element_dream",
        strengths: ["happy", "chaos"],
        weaknesses: []
    },
    [DragonElements.Physical]: {
        acronym: "ph",
        name: "Physical",
        strengths: [],
        weaknesses: ["legend"]
    }
}

export default elementsSetting