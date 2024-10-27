const elements = {
    terra: {
        acronym: "e",
        nameKey: "TerraKey_DragonUtils",
        strongs: ["electric", "flame"],
        weaknesses: ["metal", "war"]
    },
    flame: {
        acronym: "f",
        nameKey: "FlameKey_DragonUtils",
        strongs: ["nature", "ice"],
        weaknesses: ["sea", "terra"]
    },
    sea: {
        acronym: "w",
        nameKey: "SeaKey_DragonUtils",
        strongs: ["flame", "war"],
        weaknesses: ["nature", "electric"]
    },
    nature: {
        acronym: "p",
        nameKey: "NatureKey_DragonUtils",
        strongs: ["sea", "light"],
        weaknesses: ["flame", "ice"]
    },
    electric: {
        acronym: "el",
        nameKey: "ElectricKey_DragonUtils",
        strongs: ["sea", "metal"],
        weaknesses: ["terra", "light"]
    },
    ice: {
        acronym: "i",
        nameKey: "IceKey_DragonUtils",
        strongs: ["nature", "war"],
        weaknesses: ["flame", "metal"]
    },
    metal: {
        acronym: "m",
        nameKey: "MetalKey_DragonUtils",
        strongs: ["terra", "ice"],
        weaknesses: ["electric", "dark"]
    },
    dark: {
        acronym: "d",
        nameKey: "DarkKey_DragonUtils",
        strongs: ["metal", "light"],
        weaknesses: ["war"]
    },
    light: {
        acronym: "li",
        nameKey: "LightKey_DragonUtils",
        strongs: ["electric", "dark"],
        weaknesses: ["nature"]
    },
    war: {
        acronym: "wr",
        nameKey: "WarKey_DragonUtils",
        strongs: ["terra", "dark"],
        weaknesses: ["sea", "ice"]
    },
    pure: {
        acronym: "pu",
        nameKey: "PureKey_DragonUtils",
        strongs: ["wind"],
        weaknesses: ["primal"]
    },
    legend: {
        acronym: "l",
        nameKey: "LegendKey_DragonUtils",
        strongs: ["primal"],
        weaknesses: ["pure"]
    },
    primal: {
        acronym: "pr",
        nameKey: "tid_nw_hud_element_primal",
        strongs: ["pure"],
        weaknesses: ["time"]
    },
    wind: {
        acronym: "wd",
        nameKey: "tid_nw_hud_element_wind",
        strongs: ["time"],
        weaknesses: ["legend"]
    },
    time: {
        acronym: "ti",
        nameKey: "tid_nw_hud_element_time",
        strongs: ["legend"],
        weaknesses: ["wind"]
    },
    happy: {
        acronym: "hp",
        nameKey: "tid_nw_hud_element_happiness",
        strongs: ["chaos", "magic"],
        weaknesses: []
    },
    chaos: {
        acronym: "ch",
        nameKey: "tid_nw_hud_element_chaos",
        strongs: ["magic", "soul"],
        weaknesses: []
    },
    magic: {
        acronym: "mg",
        nameKey: "tid_nw_hud_element_magic",
        strongs: ["soul", "beauty"],
        weaknesses: []
    },
    soul: {
        acronym: "so",
        nameKey: "tid_nw_hud_element_soul",
        strongs: ["dream", "beauty"],
        weaknesses: []
    },
    beauty: {
        acronym: "bt",
        nameKey: "tid_nw_hud_element_beauty",
        strongs: ["dream", "happy"],
        weaknesses: []
    },
    dream: {
        acronym: "dr",
        nameKey: "tid_nw_hud_element_dream",
        strongs: ["happy", "chaos"],
        weaknesses: []
    },
    physical: {
        acronym: "ph",
        name: "Physical",
        strongs: [],
        weaknesses: ["legend"]
    }
}

export default elements