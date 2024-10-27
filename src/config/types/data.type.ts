export interface GameConfigData {
    game_data: GameData
}

export interface GameData {
    config: Config
}

export interface Config {
    chests: Chests
    items: Item[]
    levels: Level[]
    breed_oposite: BreedOposite[]
    treasure_items: TreasureItems
    sanctuary_breeding: SanctuaryBreeding
    help_views: HelpView[]
    deity_world_dragons: DeityWorldDragons
    progressive_island: any[]
    news: News
    dragonarium: Dragonarium
    grid_island: GridIsland
    dragon_book: DragonBook
    dragon_tournaments: DragonTournaments
    fog_island: FogIsland
    heroic_races: HeroicRaces
    special_breeding: SpecialBreeding
    maze_island: MazeIsland
    tower_island: TowerIsland
    dragon_collections: DragonCollections
    event_island: EventIsland
    skills: Skills
    tree_of_life: TreeOfLife
    tree_of_life_recall: TreeOfLifeRecall
    tree_of_life_powerup: TreeOfLifePowerup
    habitat_tokens: HabitatTokens
    max_dragon_levels: MaxDragonLevels
    collectibles: Collectibles
    puzzle_island: PuzzleIsland
    vip_pass: VipPass
    dragon_skins: DragonSkins
    dragon_wars: DragonWars
    farm_crops: FarmCrops
    breeding: Breeding
    liveops_challenges: LiveopsChallenges
    asset_versioning: AssetVersioning
    battle_pass: BattlePass
    dragon_mastery: DragonMastery
    runner_island: RunnerIsland
    perks: Perks
}

export interface Chests {
    chests: Chest[]
    rewards: Reward[]
}

export interface Chest {
    id: number
    type: string
    rewards: number[]
    img_name: string
    chest_name_key: string
    type_name_key: string
    level_tiers: number[]
    description_key?: string
    default_reward: number
    pool_size: number
    gatcha_ids?: number[]
    instant: any
}

export interface Reward {
    id: number
    reward: Reward2
    tier_multi: number
    weight: number
}

export interface Reward2 {
    resource?: Resource
    buildings?: number[]
    eggs?: number[]
    seeds?: Seed[]
    moves?: number
    rarity_seeds?: RaritySeed[]
    skin?: number[]
    battleground_keys?: BattlegroundKey[]
}

export interface Resource {
    p_token?: number
    f?: number
    l_token?: number
    g?: number
    d_token?: number
    c?: number
    i_token?: number
    pr_token?: number
    pu_token?: number
    wr_token?: number
    e_token?: number
    f_token?: number
    w_token?: number
    el_token?: number
    m_token?: number
    li_token?: number
    ep?: number
    x?: number
}

export interface Seed {
    id: number
    amount: number
}

export interface RaritySeed {
    rarity: string
    amount: number
}

export interface BattlegroundKey {
    battleground_id: number
    key_id: number
    amount: number
}

export interface Item {
    id: number
    name: string
    group_type: string
    animated?: number
    build_time?: number
    mobile_version: number
    android_version: number
    show_on_mobile?: number
    type?: string
    element_type?: string
    xp: number
    min_level?: number
    costs: any
    display_order: number
    boost_modifier: any
    gift_level: number
    giftable: number
    cost_unit_cash?: number
    collect?: number
    collect_xp?: number
    category_id?: number
    subcategory_id?: number
    building_limit_same_id?: number
    in_store: number
    width?: number
    height?: number
    new_item: number
    img_name?: string
    img_name_mobile?: string
    img_name_android?: string
    activation?: number
    upgrades_to?: number
    collect_type: any
    velocity?: number
    description?: string
    properties?: Properties
    building_ownership_id?: number
    sell_price: any
    deco_seg_id?: number
    inventory_ids?: number
    elements?: string[]
    multiple_costs?: MultipleCost[]
    costs_array?: CostsArray[]
    sell_price_array?: SellPriceArray[]
    multiple_sell_prices?: MultipleSellPrice[]
    scale?: number
    speed?: number
    hatching_time?: number
    breeding_time?: number
    lvl?: number
    starting_coins?: number
    coins_added?: number
    can_breed?: number
    breedable?: number
    deity_breeding?: number
    difficulty?: number
    category?: number
    rarity?: number
    dragon_rarity?: string
    attacks?: number[]
    attributes?: string[]
    trainable_attacks?: number[]
    upgrade_levels?: number[]
    background_vfx?: number[]
    foreground_vfx?: number[]
    in_store_min_level?: number
    flying_level?: number
    swim?: number
    seeds_to_summon?: number
    hatching_time_b?: number
    breeding_time_b?: number
    base_attack?: number
    base_life?: number
    dragon_ownership_id?: number
    tags?: string[]
    speed_override?: number
    passive_skills?: number[]
    post_skills?: number[]
}

export interface Properties {
    habitat?: number
    capacity?: number
    bulldozable?: number
    friend_assistable?: number
    upgrade_from?: number
    max_gold?: number
    floating?: number
    crosspromotion?: number
    fixed_position?: number[]
    range?: number
    incubator?: number
    is_fixed?: number
    workingBuilding?: number
    lost_item?: number
    max_dragon_level?: number
    habitat_pure?: number
    required_items?: number[]
    breeding?: number
    breeding_factor?: number
    ft_flying?: number
    demolishable?: number
    multiCollectable?: number
}

export interface MultipleCost {
    g?: number
    c?: number
    d_token?: number
    pu_token?: number
}

export interface CostsArray {
    c: number
}

export interface SellPriceArray {
    g: number
}

export interface MultipleSellPrice {
    g: number
}

export interface Level {
    id: number
    level: number
    name: string
    xp_required: number
    reward: Reward3
    xp_needed: number
    offer_item: OfferItem
}

export interface Reward3 {
    c: number
}

export interface OfferItem {
    id: number
    cost: Cost
}

export interface Cost {
    c: number
}

export interface BreedOposite {
    elements: string
    oposite: string
    elements_name: string
    oposite_name: string
}

export interface TreasureItems {
    "1": N1
    "2": N2
    "3": N3
    "4": N4
    "5": N5
    "6": N6
    "7": N7
    "8": N8
    "9": N9
    "11": N11
    "17": N17
    "18": N18
    "19": N19
    "20": N20
    "21": N21
    "22": N22
    "23": N23
    "24": N24
    "25": N25
    "26": N26
    "27": N27
    "34": N34
    "35": N35
    "36": N36
}

export interface N1 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms
    amount: number
}

export interface ActivePlatforms {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N2 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms2
    amount: number
}

export interface ActivePlatforms2 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N3 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms3
    badgeText: string
    amount: number
}

export interface ActivePlatforms3 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N4 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms4
    badgeText: string
    amount: number
}

export interface ActivePlatforms4 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N5 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms5
    amount: number
}

export interface ActivePlatforms5 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N6 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms6
    badgeText: string
    amount: number
}

export interface ActivePlatforms6 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N7 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms7
    amount: number
}

export interface ActivePlatforms7 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N8 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms8
    amount: number
}

export interface ActivePlatforms8 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N9 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms9
    amount: number
}

export interface ActivePlatforms9 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N11 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms10
    badgeText: string
    amount: number
}

export interface ActivePlatforms10 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N17 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms11
    amount: number
}

export interface ActivePlatforms11 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N18 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms12
    amount: number
}

export interface ActivePlatforms12 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N19 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms13
    amount: number
}

export interface ActivePlatforms13 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N20 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms14
    badgeText: string
    amount: number
}

export interface ActivePlatforms14 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N21 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms15
    amount: number
}

export interface ActivePlatforms15 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N22 {
    id: number
    name: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms16
    badgeText: string
    amount: number
}

export interface ActivePlatforms16 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N23 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms17
    amount: number
}

export interface ActivePlatforms17 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N24 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms18
    amount: number
}

export interface ActivePlatforms18 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N25 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms19
    badgeText: string
    amount: number
}

export interface ActivePlatforms19 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N26 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms20
    amount: number
}

export interface ActivePlatforms20 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N27 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms21
    badgeText: string
    amount: number
}

export interface ActivePlatforms21 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N34 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms22
    amount: number
}

export interface ActivePlatforms22 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N35 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms23
    amount: number
}

export interface ActivePlatforms23 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface N36 {
    id: number
    name: string
    name_key: string
    image: string
    price: number
    type: string
    display_order: number
    badge: number
    use_formula: number
    active_platforms: ActivePlatforms24
    amount: number
}

export interface ActivePlatforms24 {
    canvas: number[]
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface SanctuaryBreeding {
    upgrades_config: UpgradesConfig[]
    general_config: GeneralConfig
}

export interface UpgradesConfig {
    id: number
    item_id: number
    dragons_unlocked: number[]
    rebuild_cost: number
    breeding_chances: number[]
    num_steps: number
    multiplier: number
}

export interface GeneralConfig {
    SHOW_AT_LEVEL: number
    ACTIVATE_AT_LEVEL: number
    PERCENT_OF_ACCUMULATED_GOLD: number
    GOLD_FACTOR_LEVEL: number
    GOLD_EXPONENT: number
    GOLD_MULTIPLIER: number
    GOLD_COEFICIENT: number
    GOLD_DIVISOR: number
    INACTIVE_BUILDING: number
    ANIMATED_BACKGROUND: string
    ACTIVATE_HINT_SYSTEM: number
    SHOW_TOOLTIP: number
    VISUAL_FLARES_MAP_ASSET: string
    VISUAL_FLARES_BUILDING_ASSET: string
}

export interface HelpView {
    id: number
    assets_name?: string
    popup_type: string
    size: string
    title_localized_key: string
    slides: Slide[]
}

export interface Slide {
    header_localized_key?: string
    content_localized_key?: string
    image_url?: string
    custom_title_localized_key?: string
    slide_type: string
    image_path?: string
    custom_title_localized_tidkey?: string
    animatedAssetName?: string
    animationName?: string
}

export interface DeityWorldDragons {
    dragons: Dragon[]
}

export interface Dragon {
    id: number
    name: string
    first_name: string
    second_name: string
    group_type: string
    order: number
    level: number
    attributes: string[]
    production_per_hour: ProductionPerHour
    summon_enabled: number
    summon_min_level: number
    summon_crystal_cost: SummonCrystalCost
    summon_period: number
    fusion_dragon_cost: FusionDragonCost
    fusion_dragon_gem_conversion: FusionDragonGemConversion
    fusion_crystal_cost: FusionCrystalCost
    fusion_xp_gain: number
    fusion_next_id: number
    breeding_base_chance: number
    breeding_added_chance: number
    store_price: number
    img_name: string
    img_name_mobile: string
    img_name_android: string
    summon_asset: string
    summon_canvas_asset: string
    fly: number
    in_store: number
    description: string
}

export interface ProductionPerHour {
    p: number
}

export interface SummonCrystalCost {
    "31"?: number
    "32"?: number
    "41"?: number
    "42"?: number
    "43"?: number
    "33"?: number
    "51"?: number
    "52"?: number
    "53"?: number
    "12"?: number
    "13"?: number
    "34"?: number
    "44"?: number
    "54"?: number
    "35"?: number
    "14"?: number
    "22"?: number
    "23"?: number
    "15"?: number
    "24"?: number
    "45"?: number
    "55"?: number
    "4"?: number
    "5"?: number
    "36"?: number
    "25"?: number
    "46"?: number
    "56"?: number
}

export interface FusionDragonCost {
    "1234": number
    "2412": number
}

export interface FusionDragonGemConversion {
    "1234": number
    "2412": number
}

export interface FusionCrystalCost {
    "31"?: number
    "32"?: number
    "41"?: number
    "42"?: number
    "33"?: number
    "43"?: number
    "52"?: number
    "34"?: number
    "44"?: number
    "53"?: number
    "13"?: number
    "12"?: number
    "54"?: number
    "14"?: number
    "35"?: number
    "45"?: number
    "23"?: number
    "24"?: number
    "36"?: number
    "55"?: number
    "15"?: number
    "46"?: number
    "3"?: number
    "16"?: number
    "25"?: number
    "56"?: number
    "4"?: number
    "5"?: number
    "26"?: number
    "37"?: number
    "47"?: number
    "6"?: number
    "57"?: number
    "17"?: number
}

export interface News {
    news: any[]
}

export interface Dragonarium {
    config: Config2[]
    prices: Price[]
}

export interface Config2 {
    free_slots: number
    max_slots: number
}

export interface Price {
    slot: number
    price: Price2
}

export interface Price2 {
    c: number
}

export interface GridIsland {
    islands: Island[]
    episodes: Episode[]
    squares: Square[]
    decorations: Decoration[]
    encounters: Encounter[]
    enemies: Enemy[]
    currencies: Currency[]
    actions: Action[]
    parameters: Parameter[]
}

export interface Island {
    id: number
    analytics_id: string
    tid_name: string
    tutorial_id: number
    tutorial_claimable_cell_id: number
    pool_points: number
    pool_time: number
    initial_points: number
    start_ts: number
    end_ts: number
    currency_id: number
    min_level: number
    building_id: number
    building_position: number[]
    zip_file: string
    sound_tag: string
    canvas_assets_url: string
    ui_configuration: UiConfiguration
    active_platforms: ActivePlatforms25
    episodes: number[]
    board_size: number[]
    initial_square_id: number
    backgrounds: number[]
    background_plist: string
    foregrounds: any[]
    foregrounds_plists: any[]
}

export interface UiConfiguration {
    cell_contents_config: CellContentsConfig
    cell_highlight_asset: string
    cell_highlight_index: number
    cell_size: number[]
    cells_label_config: CellsLabelConfig
    dragon_evolution: number
    grey_scale_blocked_cells: boolean
    island_title_config: IslandTitleConfig
    layers_z_indexes: LayersZIndexes
    origin_offset: number[]
    tutorial_scroll_duration: number
    tutorial_scroll_duration_base: number
    tutorial_scroll_duration_factor: number
}

export interface CellContentsConfig {
    blocked_dragon_position_offset: number[]
    blocked_opacity: number
    claimable_dragon_position_offset: number[]
    default_dragon_scale: number[]
    dragon_scale: number[]
    dragon_scale_by_id: DragonScaleById
    icon_position_offset: number[]
    label_position_offset: number[]
}

export interface DragonScaleById {
    "1291": number[]
    "1301": number[]
    "1308": number[]
    "1515": number[]
    "1637": number[]
}

export interface CellsLabelConfig {
    claimable: Claimable
    unclaimable: Unclaimable
}

export interface Claimable {
    color: number[]
    size: number
    stroke_color: number[]
    stroke_width: number
}

export interface Unclaimable {
    color: number[]
    size: number
    stroke_color: number[]
    stroke_width: number
}

export interface IslandTitleConfig {
    down_color: number[]
    size: number
    small_stroke_color: number[]
    small_stroke_width: number
    upper_color: number[]
}

export interface LayersZIndexes {
    additional_layer: number
    cell_backgrounds: number
    cell_contents: number
    decorations: number
    player_token: number
    walls: number
}

export interface ActivePlatforms25 {
    ios: number
    canvas: string
    android: number
    amazon: number
    windows: number
}

export interface Episode {
    id: number
    island_id: number
    board_size: number[]
    initial_square_id: number
    final_square_id: number
    tid_title: string
    mobile_begin_tutorial_id: number
    mobile_end_tutorial_id: number
    canvas_background: string
    backgrounds: string[]
    background_plist: string
    foregrounds: any[]
    foregrounds_plists: any[]
    squares: number[]
}

export interface Square {
    id: number
    type: string
    type_id?: number
    highlight: number
    x: number
    y: number
    island_id: number
    episode_id: number
    claim_cost: number
    wall?: string
    wall_suffix?: string
}

export interface Decoration {
    id: number
    file: string
    x: number
    y: number
    island_id: number
    episode_id: number
}

export interface Encounter {
    id: number
    enemies: number[]
    speed_up_price_per_hour: number
    fight_background: string
    fight_background_id: string
}

export interface Enemy {
    id: number
    dragon_ids: number[]
    handicaps: number[]
    view_type: string
    elements_view_type: any[]
    cooldown: number
}

export interface Currency {
    id: number
    tid_name: string
    actions: number[]
}

export interface Action {
    id: number
    type: string
    tid_name: string
    image: string
    pool_percent: number
    max_points: number
    extra_parameters?: ExtraParameters
}

export interface ExtraParameters {
    max_time?: number
    cooldown?: number
    max_control_level?: number
    max_production?: number
    max_level?: number
}

export interface Parameter {
    id: number
    name: string
    value: any
}

export interface DragonBook {
    collection_numbers: CollectionNumber[]
    badges_config: BadgesConfig[]
}

export interface CollectionNumber {
    id: number
    number: number
    dragon_id: number
    available_at: number
    breedable_badge?: number
    shop_badge?: number
    card_badge?: number
    breeding_sanctuary_badge?: number
    quests_badge?: number
    events_badge?: number
    dragonbook_collection_badge?: number
    warrior_chest_badge?: number
    pvp_arena_win_badge?: number
    breeding_ancient_world_badge?: number
    pvp_arena_promotion_badge?: number
    alliance_chest_badge?: number
    orb_shop_badge?: number
}

export interface BadgesConfig {
    id: number
    name: string
    value: number
}

export interface DragonTournaments {
    tournaments: Tournament[]
    matches: Match[]
    parameters: Parameter2[]
    difficulties: Difficulty[]
    categories: Category[]
    rewards: Reward5[]
    rewards_config: RewardsConfig[]
    rewards_tiers: RewardsTier[]
}

export interface Tournament {
    id: number
    name_key: string
    matches: number[]
    difficulty: string
    order: number
    mobile_background: string
    canvas_background?: string
    allow_island_tutorial?: number
    show_reward_button: number
    multiplier: number
    min_level: number
    ui_asset: string
    category_id: number
    availability?: Availability
}

export interface Availability {
    from: number
    to: number
}

export interface Match {
    id: number
    enemy1: Enemy1
    enemy2: Enemy2
    enemy3: Enemy3
    requirements1: Requirements1
    requirements2: Requirements2
    requirements3: Requirements3
    battle_cooldown: number
    speedup_cost_hour: number
    reward: Reward4
    rewards_id: number
}

export interface Enemy1 {
    dragonId: any
    staticLevel?: number
    grade?: number
    level?: number
}

export interface Enemy2 {
    dragonId: any
    staticLevel?: number
    grade?: number
    level?: number
}

export interface Enemy3 {
    dragonId: any
    staticLevel?: number
    grade?: number
    level?: number
}

export interface Requirements1 {
    level?: number
    elements?: string[]
    rarity?: string
    dragonId?: number
    allowed_rarities?: string[]
    noRequirements?: boolean
}

export interface Requirements2 {
    level?: number
    rarity?: string
    elements?: string[]
    dragonId?: number
    allowed_rarities?: string[]
    noRequirements?: boolean
}

export interface Requirements3 {
    level?: number
    rarity?: string
    elements?: string[]
    dragonId?: number
    allowed_rarities?: string[]
    noRequirements?: boolean
}

export interface Reward4 {
    x?: number
    egg?: number
    chest?: number
    en_runner?: number
    f?: number
    ep?: number
    seeds?: Seed2[]
    c?: number
    rarity_seeds?: RaritySeed2[]
    b: any
    n_token?: number
    l_token?: number
    pu_token?: number
    wd_token?: number
    moves?: number
    d_token?: number
    el_token?: number
    m_token?: number
    wr_token?: number
    skin?: number
    p_token?: number
    li_token?: number
    pr_token?: number
    elp?: number
    e_token?: number
    w_token?: number
    trade_tickets?: TradeTicket[]
    g?: number
    "rank_up_coin.common"?: number
    "rank_up_coin.rare"?: number
    "rank_up_coin.very_rare"?: number
    "rank_up_coin.epic"?: number
    "rank_up_coin.legendary"?: number
    "rank_up_coin.mythical"?: number
    "rank_up_coin.heroic"?: number
    i_token?: number
}

export interface Seed2 {
    id: number
    amount: number
}

export interface RaritySeed2 {
    rarity: string
    amount: number
}

export interface TradeTicket {
    rarity: string
    amount: number
    limit?: boolean
}

export interface Parameter2 {
    id: number
    name: string
    value: any
}

export interface Difficulty {
    id: number
    base_strength_range: number[]
    easy_range: number[]
    normal_range: number[]
    hard_range: number[]
    impossible_range: number[]
}

export interface Category {
    id: number
    name: string
    tid: string
    priority: number
    ui_asset: string
    layout: string
    unlock_level: number
    show_level: number
}

export interface Reward5 {
    id: number
    reward: Reward6[]
    type_id: number
}

export interface Reward6 {
    x?: number
    egg?: number
    chest?: number
    en_runner?: number
    f?: number
    ep?: number
    seeds?: Seed3[]
    c?: number
    rarity_seeds?: RaritySeed3[]
    b: any
    n_token?: number
    l_token?: number
    pu_token?: number
    wd_token?: number
    moves?: number
    d_token?: number
    el_token?: number
    m_token?: number
    wr_token?: number
    skin?: number
    li_token?: number
    p_token?: number
    pr_token?: number
    elp?: number
    e_token?: number
    w_token?: number
    trade_tickets?: TradeTicket2[]
    g?: number
    "rank_up_coin.common"?: number
    "rank_up_coin.rare"?: number
    "rank_up_coin.very_rare"?: number
    "rank_up_coin.epic"?: number
    "rank_up_coin.legendary"?: number
    "rank_up_coin.mythical"?: number
    "rank_up_coin.heroic"?: number
    i_token?: number
}

export interface Seed3 {
    id: number
    amount: number
}

export interface RaritySeed3 {
    rarity: string
    amount: number
}

export interface TradeTicket2 {
    rarity: string
    amount: number
    limit: boolean
}

export interface RewardsConfig {
    id: number
    background: string
    title_tid: string
    description_tid: string
    button_tid: string
}

export interface RewardsTier {
    name: string
    value: any
}

export interface FogIsland {
    islands: Island2[]
    squares: Square2[]
    currencies: Currency2[]
    rewards: Reward7[]
    actions: Action2[]
    hints: Hint[]
    parameters: Parameter3[]
}

export interface Island2 {
    id: number
    analytics_id: string
    tid_name: string
    tutorial_id: number
    tutorial_claimable_cell_id: number
    board_size: number[]
    cell_size: number[]
    origin_offset: number[]
    initial_square_id: number
    pool_points: number
    pool_time: number
    initial_points: number
    start_ts: number
    end_ts: number
    currency_id: number
    min_level: number
    building_id: number
    building_position: number[]
    zip_file: string
    sound_tag: string
    canvas_assets_url: string
    background_plist: string
    foregrounds_plists: any[]
    particles_position: number[]
    tutorial_claim_cells: number[]
}

export interface Square2 {
    id: number
    type: string
    type_id?: number
    highlight: number
    x: number
    y: number
    island_id: number
    claim_cost: number
    come_back_cost: number
    reward_id?: number
}

export interface Currency2 {
    id: number
    tid_name: string
    actions: number[]
}

export interface Reward7 {
    id: number
    type: string
    island_id: number
    reward_id: number
    last_piece_cost: number
    num_pieces: number
    show_new_badge: number
}

export interface Action2 {
    id: number
    type: string
    tid_name: string
    image: string
    pool_percent: number
    max_points: number
    extra_parameters?: ExtraParameters2
}

export interface ExtraParameters2 {
    max_time?: number
    cooldown?: number
    max_control_level?: number
    max_production?: number
    max_level?: number
}

export interface Hint {
    id: number
    type: string
    tid_name: string
    icon: string
    price: Price3
    duration_time: number
    area: number
    square_selection: number
    increment_price: number
    tutorial_id: number
}

export interface Price3 {
    ep: number
}

export interface Parameter3 {
    id: number
    name: string
    value: any
}

export interface HeroicRaces {
    islands: Island3[]
    rewards: Reward8[]
    laps: Lap[]
    nodes: Node[]
    nodes_position: NodesPosition[]
    missions: Mission[]
    encounters: Encounter2[]
    enemies: Enemy4[]
    parameters: Parameter4[]
    spin_rewards: SpinReward[]
    lap_rewards: LapReward[]
}

export interface Island3 {
    id: number
    active_platforms: ActivePlatforms26
    min_level: number
    start_ts: number
    end_ts: number
    end_ts_threshold: number
    secs_before_cache_freeze: number
    min_qualifying_laps: number
    laps: number[]
    building_id: number
    building_id_96: number
    building_claim_id: number
    building_free_spin_id: number
    building_position: number[]
    dragon_building_position: number[]
    dragon_building_scale: number
    zip_file: string
    canvas_assets_url: string
    island_title_tid: string
    sound_tag: string
    level_tiers: number[]
    rewards: number[]
    dragon_race_id: number
    dragon_race_scale: number
    dragon_race_offset: number[]
    dragon_reward_scale: number
    dragon_reward_offset: number[]
    help_id: number
    dragon_is_new: number
    spinner_enabled: number
    spin_rewards: number[]
    spin_cooldown: number
    buy_spin_price: number
    notification_anim_remaining_time: number
    notification_anim_per_day: number
    notification_anim_duration: number
    lap_completed_to_hide_notification: number
}

export interface ActivePlatforms26 {
    ios: number[]
    android: number[]
    amazon: number[]
    windows: number[]
    canvas: number[]
}

export interface Reward8 {
    id: number
    positions: number[]
    rewards: Reward9[]
}

export interface Reward9 {
    egg?: number[]
    c?: number
}

export interface Lap {
    id: number
    nodes: number[]
}

export interface Node {
    id: number
    buy_all_discount: number
    missions: number[]
}

export interface NodesPosition {
    id: number
    island_id: number
    type: string
    x: number
    y: number
}

export interface Mission {
    id: number
    type: string
    goal_points: number
    price: number
    price_increment: number
    pool_size: number
    spawn_time: number
    collect_chance: number
    collect_chance_modifier: number
    encounter?: number
}

export interface Encounter2 {
    id: number
    enemies: number[]
    speed_up_price_per_hour: number
    fight_background_id: string
}

export interface Enemy4 {
    id: number
    dragon_ids: string[]
    handicaps: number[]
    view_type: string
    elements_view_type: any[]
    cooldown: number
}

export interface Parameter4 {
    id: number
    name: string
    value: any
}

export interface SpinReward {
    id: number
    type: string
    value: number
    analytics_id: string
    weight: number
    image: string
}

export interface LapReward {
    id: number
    lap_rewards: LapRewards
}

export interface LapRewards {
    "1": N12
    "2": N28
    "3": N32
    "4": N42
    "5": N52
    "6": N62
    "7": N72
    "8": N82
    "9": N92
    "10": N10
    "11": N112
    "12": N122
    "13": N13
    "14": N14
    "15": N15
    "16": N16
    "17": N172
    "18": N182
    "19": N192
    "20": N202
    "21": N212
    "22": N222
    "23": N232
    "24": N242
    "25": N252
    "26": N262
    "27": N272
    "28": N282
    "29": N29
    "30"?: N30
    "31"?: N31
    "32"?: N322
    "33"?: N33
    "34"?: N342
    "35"?: N352
    "36"?: N362
    "37"?: N37
    "38"?: N38
    "39"?: N39
    "40"?: N40
    "41"?: N41
    "42"?: N422
    "43"?: N43
    "44"?: N44
    "45"?: N45
    "46"?: N46
    "47"?: N47
    "48"?: N48
    "49"?: N49
}

export interface N12 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward10[]
    reward_cell_type: string
}

export interface Reward10 {
    c?: number
    "rank_up_coin.mythical"?: number
}

export interface N28 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward11[]
    reward_cell_type: string
}

export interface Reward11 {
    chest?: number
    seeds?: Seed4[]
}

export interface Seed4 {
    id: number
    amount: number
}

export interface N32 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward12[]
    reward_cell_type: string
}

export interface Reward12 {
    chest?: number
    trade_tickets?: TradeTicket3[]
}

export interface TradeTicket3 {
    rarity: string
    amount: number
    limit: boolean
}

export interface N42 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward13[]
    reward_cell_type: string
}

export interface Reward13 {
    chest?: number
    seeds?: Seed5[]
}

export interface Seed5 {
    id: number
    amount: number
}

export interface N52 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward14[]
    reward_cell_type: string
}

export interface Reward14 {
    chest: number
}

export interface N62 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward15[]
    reward_cell_type: string
}

export interface Reward15 {
    chest?: number
    seeds?: Seed6[]
}

export interface Seed6 {
    id: number
    amount: number
}

export interface N72 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward16[]
    reward_cell_type: string
}

export interface Reward16 {
    chest?: number
    rarity_seeds?: RaritySeed4[]
}

export interface RaritySeed4 {
    rarity: string
    amount: number
}

export interface N82 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward17[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward[]
    multiplier?: number
}

export interface Reward17 {
    seeds: Seed7[]
}

export interface Seed7 {
    id: number
    amount: number
}

export interface LimitedReward {
    seeds: Seed8[]
}

export interface Seed8 {
    id: number
    amount: number
}

export interface N92 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward18[]
    reward_cell_type: string
}

export interface Reward18 {
    trade_tickets?: TradeTicket4[]
    chest?: number
    perks?: Perk[]
}

export interface TradeTicket4 {
    rarity: string
    amount: number
    limit: boolean
}

export interface Perk {
    id: number
    quantity: number
}

export interface N10 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward19[]
    reward_cell_type: string
}

export interface Reward19 {
    chest?: number
    seeds?: Seed9[]
}

export interface Seed9 {
    id: number
    amount: number
}

export interface N112 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward20[]
    reward_cell_type: string
}

export interface Reward20 {
    chest: number
}

export interface N122 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward21[]
    reward_cell_type: string
}

export interface Reward21 {
    chest?: number
    seeds?: Seed10[]
}

export interface Seed10 {
    id: number
    amount: number
}

export interface N13 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward22[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward2[]
    multiplier?: number
}

export interface Reward22 {
    chest?: number
    trade_tickets?: TradeTicket5[]
}

export interface TradeTicket5 {
    rarity: string
    amount: number
    limit: boolean
}

export interface LimitedReward2 {
    chest: number
}

export interface N14 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward23[]
    reward_cell_type: string
    omit_if_winner?: number
}

export interface Reward23 {
    egg?: number[]
    seeds?: Seed11[]
}

export interface Seed11 {
    id: number
    amount: number
}

export interface N15 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward24[]
    reward_cell_type: string
}

export interface Reward24 {
    chest?: number
    egg?: number[]
    seeds?: Seed12[]
}

export interface Seed12 {
    id: number
    amount: number
}

export interface N16 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward25[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward3[]
    multiplier?: number
}

export interface Reward25 {
    seeds?: Seed13[]
    skin?: number
    "rank_up_coin.mythical"?: number
}

export interface Seed13 {
    id: number
    amount: number
}

export interface LimitedReward3 {
    "rank_up_coin.mythical"?: number
    seeds?: Seed14[]
}

export interface Seed14 {
    id: number
    amount: number
}

export interface N172 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward26[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward4[]
    multiplier?: number
}

export interface Reward26 {
    seeds?: Seed15[]
    rarity_seeds?: RaritySeed5[]
}

export interface Seed15 {
    id: number
    amount: number
}

export interface RaritySeed5 {
    rarity: string
    amount: number
}

export interface LimitedReward4 {
    seeds: Seed16[]
}

export interface Seed16 {
    id: number
    amount: number
}

export interface N182 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward27[]
    reward_cell_type: string
}

export interface Reward27 {
    chest?: number
    seeds?: Seed17[]
}

export interface Seed17 {
    id: number
    amount: number
}

export interface N192 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward28[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward5[]
    multiplier?: number
}

export interface Reward28 {
    rarity_seeds?: RaritySeed6[]
    chest?: number
    perks?: Perk2[]
}

export interface RaritySeed6 {
    rarity: string
    amount: number
}

export interface Perk2 {
    id: number
    quantity: number
}

export interface LimitedReward5 {
    rarity_seeds: RaritySeed7[]
}

export interface RaritySeed7 {
    rarity: string
    amount: number
}

export interface N202 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward29[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward6[]
    multiplier?: number
}

export interface Reward29 {
    seeds: Seed18[]
}

export interface Seed18 {
    id: number
    amount: number
}

export interface LimitedReward6 {
    seeds: Seed19[]
}

export interface Seed19 {
    id: number
    amount: number
}

export interface N212 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward30[]
    reward_cell_type: string
}

export interface Reward30 {
    seeds?: Seed20[]
    chest?: number
}

export interface Seed20 {
    id: number
    amount: number
}

export interface N222 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward31[]
    reward_cell_type: string
}

export interface Reward31 {
    skin?: number
    seeds?: Seed21[]
    chest?: number
}

export interface Seed21 {
    id: number
    amount: number
}

export interface N232 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward32[]
    reward_cell_type: string
}

export interface Reward32 {
    chest?: number
    trade_tickets?: TradeTicket6[]
}

export interface TradeTicket6 {
    rarity: string
    amount: number
    limit: boolean
}

export interface N242 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward33[]
    reward_cell_type: string
    limited_time?: number
    limited_reward?: LimitedReward7[]
    multiplier?: number
}

export interface Reward33 {
    rarity_seeds?: RaritySeed8[]
    seeds?: Seed22[]
}

export interface RaritySeed8 {
    rarity: string
    amount: number
}

export interface Seed22 {
    id: number
    amount: number
}

export interface LimitedReward7 {
    rarity_seeds: RaritySeed9[]
}

export interface RaritySeed9 {
    rarity: string
    amount: number
}

export interface N252 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward34[]
    reward_cell_type: string
}

export interface Reward34 {
    chest: number
}

export interface N262 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward35[]
    reward_cell_type: string
}

export interface Reward35 {
    chest?: number
    seeds?: Seed23[]
}

export interface Seed23 {
    id: number
    amount: number
}

export interface N272 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward36[]
    reward_cell_type: string
}

export interface Reward36 {
    chest?: number
    rarity_seeds?: RaritySeed10[]
}

export interface RaritySeed10 {
    rarity: string
    amount: number
}

export interface N282 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward37[]
    reward_cell_type: string
}

export interface Reward37 {
    seeds: Seed24[]
}

export interface Seed24 {
    id: number
    amount: number
}

export interface N29 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward38[]
    reward_cell_type: string
}

export interface Reward38 {
    chest?: number
    perks?: Perk3[]
}

export interface Perk3 {
    id: number
    quantity: number
}

export interface N30 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward39[]
    reward_cell_type: string
}

export interface Reward39 {
    seeds: Seed25[]
}

export interface Seed25 {
    id: number
    amount: number
}

export interface N31 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward40[]
    reward_cell_type: string
}

export interface Reward40 {
    chest: number
}

export interface N322 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward41[]
    reward_cell_type: string
}

export interface Reward41 {
    seeds: Seed26[]
}

export interface Seed26 {
    id: number
    amount: number
}

export interface N33 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward42[]
    reward_cell_type: string
}

export interface Reward42 {
    trade_tickets: TradeTicket7[]
}

export interface TradeTicket7 {
    rarity: string
    amount: number
    limit: boolean
}

export interface N342 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward43[]
    reward_cell_type: string
}

export interface Reward43 {
    seeds: Seed27[]
}

export interface Seed27 {
    id: number
    amount: number
}

export interface N352 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward44[]
    reward_cell_type: string
}

export interface Reward44 {
    chest: number
}

export interface N362 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward45[]
    reward_cell_type: string
}

export interface Reward45 {
    seeds: Seed28[]
}

export interface Seed28 {
    id: number
    amount: number
}

export interface N37 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward46[]
    reward_cell_type: string
}

export interface Reward46 {
    rarity_seeds: RaritySeed11[]
}

export interface RaritySeed11 {
    rarity: string
    amount: number
}

export interface N38 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward47[]
    reward_cell_type: string
}

export interface Reward47 {
    seeds: Seed29[]
}

export interface Seed29 {
    id: number
    amount: number
}

export interface N39 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward48[]
    reward_cell_type: string
}

export interface Reward48 {
    chest?: number
    perks?: Perk4[]
}

export interface Perk4 {
    id: number
    quantity: number
}

export interface N40 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward49[]
    reward_cell_type: string
}

export interface Reward49 {
    seeds: Seed30[]
}

export interface Seed30 {
    id: number
    amount: number
}

export interface N41 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward50[]
    reward_cell_type: string
}

export interface Reward50 {
    chest: number
}

export interface N422 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward51[]
    reward_cell_type: string
}

export interface Reward51 {
    seeds: Seed31[]
}

export interface Seed31 {
    id: number
    amount: number
}

export interface N43 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward52[]
    reward_cell_type: string
}

export interface Reward52 {
    trade_tickets: TradeTicket8[]
}

export interface TradeTicket8 {
    rarity: string
    amount: number
    limit: boolean
}

export interface N44 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward53[]
    reward_cell_type: string
}

export interface Reward53 {
    seeds: Seed32[]
}

export interface Seed32 {
    id: number
    amount: number
}

export interface N45 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward54[]
    reward_cell_type: string
}

export interface Reward54 {
    chest: number
}

export interface N46 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward55[]
    reward_cell_type: string
}

export interface Reward55 {
    seeds: Seed33[]
}

export interface Seed33 {
    id: number
    amount: number
}

export interface N47 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward56[]
    reward_cell_type: string
}

export interface Reward56 {
    rarity_seeds: RaritySeed12[]
}

export interface RaritySeed12 {
    rarity: string
    amount: number
}

export interface N48 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward57[]
    reward_cell_type: string
}

export interface Reward57 {
    perks: Perk5[]
}

export interface Perk5 {
    id: number
    quantity: number
}

export interface N49 {
    id: number
    island_id: number
    claim_popup_id: number
    lap: number
    wait_until_race_ends: number
    reward: Reward58[]
    reward_cell_type: string
    omit_if_winner: number
}

export interface Reward58 {
    egg: any
}

export interface SpecialBreeding {
    special_breeding: SpecialBreeding2[]
    parameters: Parameter5[]
}

export interface SpecialBreeding2 {
    id: number
    group_id: number
    condition1: Condition1
    condition2: Condition2
    result: number
    maximum: number
    availability: Availability2[]
    visible_from_hours: number
    visible_from: number
}

export interface Condition1 {
    id: number[]
}

export interface Condition2 {
    id: number[]
}

export interface Availability2 {
    from: number
    to: number
}

export interface Parameter5 {
    id: number
    name: string
    value: any
}

export interface MazeIsland {
    islands: Island4[]
    paths: Path[]
    nodes: Node2[]
    encounters: Encounter3[]
    enemies: Enemy5[]
    happy_hours: any[]
    actions: Action3[]
    clouds: Cloud[]
    currencies: Currency3[]
    parameters: Parameter6[]
    rewards: Reward60[]
    rewards_config: RewardsConfig2[]
    rewards_tiers: RewardsTier2[]
}

export interface Island4 {
    id: number
    tid_name: string
    name: string
    availability: Availability3
    paths: number[]
    happy_hours: any[]
    currency_id: number
    pool_size: number
    pool_time: number
    initial_points: number
    clouds: any[]
    cloud_radius: number
    dragon_radius: number
    min_level: number
    building_id: number
    mobile_tutorial_id: number
    tutorial_path_id: number
    tutorial_initial_camera_position: number[]
    tutorial_initial_zoom: number
    tutorial_final_zoom: number
    zip_file: string
    mobile_building_position: number[]
    active_platforms: ActivePlatforms27
    help_view_id: number
    sound_tag: string
    player_segment_ids: number[]
}

export interface Availability3 {
    from: number
    to: number
}

export interface ActivePlatforms27 {
    ios: number[]
    android: number[]
    amazon: number[]
    canvas: number[]
    windows: number[]
}

export interface Path {
    id: number
    color: number[]
    visibility: number
    dragon_type: number
    new_badge: number
    mobile_dragon_scale: number
    mobile_dragon_offset: number[]
    nodes: number[]
    availability?: Availability4
}

export interface Availability4 {
    from: number
    to: number
}

export interface Node2 {
    id: number
    position: number[]
    cost?: Cost2
    reward_id?: number
    reward?: Reward59[]
    highlighted?: boolean
    encounter?: number
    encounter_skip_cost?: EncounterSkipCost
    key?: number
}

export interface Cost2 {
    ep: number
}

export interface Reward59 {
    b?: number
    chest?: number
    f?: number
    g?: number
}

export interface EncounterSkipCost {
    ep: number
}

export interface Encounter3 {
    id: number
    enemies: number[]
    speed_up_price_per_hour: number
    fight_background_id: string
}

export interface Enemy5 {
    id: number
    dragon_ids: number[]
    handicaps: number[]
    view_type: string
    elements_view_type: any[]
    cooldown: number
}

export interface Action3 {
    id: number
    type: string
    tid_name: string
    image: string
    pool_percent: number
    max_points: number
    extra_parameters?: ExtraParameters3
}

export interface ExtraParameters3 {
    max_time?: number
    max_level?: number
    max_production?: number
    cooldown?: number
    max_control_level?: number
    max_points_per_pool?: number
}

export interface Cloud {
    id: number
    position: number[]
}

export interface Currency3 {
    id: number
    tid_name: string
    actions: number[]
}

export interface Parameter6 {
    id: number
    name: string
    value: any
}

export interface Reward60 {
    id: number
    reward: Reward61[]
    type_id: number
    double_with_video_ad?: number
}

export interface Reward61 {
    g?: number
    f?: number
    b?: number
    chest?: number
}

export interface RewardsConfig2 {
    id: number
    background: string
    title_tid: string
    title_show_tid: string
    description_tid: string
    description_show_tid: string
    button_tid: string
    button_claim_double_tid: string
    animated_dragon: boolean
    adult_dragon: boolean
}

export interface RewardsTier2 {
    name: string
    value: any
}

export interface TowerIsland {
    islands: Island5[]
    floors: Floor[]
    squares: Square3[]
    rewards: Reward62[]
    happy_hours: HappyHour[]
    parameters: Parameter7[]
    currencies: Currency4[]
    actions: Action4[]
}

export interface Island5 {
    id: number
    analytics_id: string
    tid_name: string
    start_ts: number
    end_ts: number
    initial_square_id: number
    tutorial_id: number
    tutorial_die_result: number
    pool_size: number
    pool_time: number
    initial_points: number
    currency_id: number
    min_level: number
    building_id: number
    building_position: number[]
    tower_size: number[]
    zip_file: string
    sound_tag: string
    canvas_assets_url: string
    mobile_first_floor_position: number[]
    mobile_floor_height: number
    mobile_interior_wall_margin: number
    mobile_final_dragon_scale: number[]
    mobile_final_dragon_position: number[]
    mobile_final_dragon_info_position: number[]
    max_die_roll: number
    help_view_id: number
    active_platforms: ActivePlatforms28
}

export interface ActivePlatforms28 {
    ios: number[]
    canvas: number[]
    android: number[]
    amazon: number[]
    windows: number[]
}

export interface Floor {
    id: number
    island_id: number
    y: number
    x_flip: number
    floor_image: string
    area: number
    roll_die_price: RollDiePrice
}

export interface RollDiePrice {
    ep: number
}

export interface Square3 {
    id: number
    type: string
    highlight: number
    x: number
    y: number
    island_id: number
    ixy: string
    rewards_array?: RewardsArray[]
    wall?: string
    catapult_destination_square_id?: number
    piece_reward_id?: number
}

export interface RewardsArray {
    chest?: number
    egg?: number
}

export interface Reward62 {
    id: number
    island_id: number
    dragon_reward_id: number
    last_piece_cost: number
    num_pieces: number
    show_new_badge: number
    area: number
}

export interface HappyHour {
    id: number
    availability: Availability5
    island_id: number
    discount: number
}

export interface Availability5 {
    from: number
    to: number
}

export interface Parameter7 {
    id: number
    name: string
    value: any
}

export interface Currency4 {
    id: number
    tid_name: string
    actions: number[]
}

export interface Action4 {
    id: number
    type: string
    tid_name: string
    image: string
    pool_percent: number
    max_points: number
    extra_parameters?: ExtraParameters4
}

export interface ExtraParameters4 {
    max_time?: number
    cooldown?: number
    max_control_level?: number
    max_production?: number
    max_level?: number
}

export interface DragonCollections {
    collections: Collection[]
    parameters: Parameter8[]
    rewards: Reward64[]
}

export interface Collection {
    id: number
    tid_name: string
    dragons: number[]
    num_dragons: number
    order: number
    is_new: number
    reward: Reward63
    reward_grade0: number[]
    image: Image
    custom_background: CustomBackground
    canvas_image: string
    canvas_bg: string
    custom_foreground?: CustomForeground
    step_background?: StepBackground[]
    unknown_step_background?: UnknownStepBackground[]
    icon?: Icon
    tid_family_name?: string
}

export interface Reward63 {
    egg?: number
    c?: number
    g?: number
    f?: number
    x?: number
    b?: number
    d_token?: number
    skin?: number
}

export interface Image {
    remote: string
}

export interface CustomBackground {
    local?: string
    remote?: string
}

export interface CustomForeground {
    remote: string
}

export interface StepBackground {
    remote: string
}

export interface UnknownStepBackground {
    remote: string
}

export interface Icon {
    remote: string
}

export interface Parameter8 {
    id: number
    name: string
    value: any
}

export interface Reward64 {
    id: number
    reward: Reward65
}

export interface Reward65 {
    egg?: number
    c?: number
    g?: number
    f?: number
    x?: number
    dcp?: number
    b?: number
    d_token?: number
    skin?: number
}

export interface EventIsland {
    islands: Island6[]
    parameters: Parameter9[]
}

export interface Island6 {
    id: number
    building_id: number
    mobile_building_position: number[]
    news_to_display_id: number[]
    canvas_news_to_display_id: number[]
    availability: Availability6
    timer_interval: TimerInterval[]
    timer_position_mobile: number[]
    timer_scale_mobile: number
    timer_position_canvas: number[]
    timer_scale_canvas: number
    min_level: number
    active_platforms: ActivePlatforms29
    canvas_building_position?: number[]
}

export interface Availability6 {
    from: number
    to: number
}

export interface TimerInterval {
    from: number
    to: number
}

export interface ActivePlatforms29 {
    ios?: number[]
    canvas?: number[]
    android?: number[]
    amazon?: number[]
    windows?: number[]
}

export interface Parameter9 {
    id: number
    name: string
    value: Value
}

export interface Value {
    ios: number[]
    android: number[]
    amazon: number[]
    canvas: number[]
    windows: number[]
}

export interface Skills {
    attacks: Attack[]
    auras: Aura[]
    post: Post[]
    effects: Effect[]
    skills: Skill[]
    passive: Passive[]
    world_skills: WorldSkill[]
    world_effects: WorldEffect[]
}

export interface Attack {
    id: number
    name: string
    name_key: string
    type: string
    element: string
    damage: number
    ui_damage: number
    effect_atk?: string
    effect_def: string
    effect_sfx: number
    training_time: number
    button_style: number
    special_icon: number
    skill_id?: number
}

export interface Aura {
    id: number
    type: string
    parameters: Parameters
    stacks: number
    active_turns: number
    aura_vfx: string
}

export interface Parameters {
    damageReduction?: number
    criticalProtection?: boolean
    reflectDamage?: number
    reflectionsPerTurn?: number
    deployText?: string
    deployTextColor?: DeployTextColor
    dodgeChance?: number
}

export interface DeployTextColor {
    r: number
    g: number
    b: number
    a: number
}

export interface Post {
    id: number
    name: string
    name_key: string
    effect_vfx: string
    special_icon: number
    skill_id: number
}

export interface Effect {
    id: number
    effect_type: string
    target: string
    hit_chance: number
    parameters: Parameters2
    sfx_id?: number
    vfx_id?: string
}

export interface Parameters2 {
    damage?: number
    multiplier?: number
    minHits?: number
    maxHits?: number
    waitTime?: number
    percentRemovedLife?: number
    selfDmgMultiplier?: number
    lifeSteal?: number
    counterAttackEffectName?: string
    baseModifier?: number
    dmgTakenModifier?: number
    playerEffectName?: string
    launchableSkills?: number[]
    steps?: number
    protection?: number
    damageMultiplier?: number
    effect_tid?: string
    healPercent?: number
    auraIds?: number[]
    perkId?: number
    percentRemainingLife?: number
    attackId?: number
    extraDamagePercentage?: number
    extraTurnMessageTid?: string
    effectName?: string
    counterMessageTid?: string
    dodgeSkills?: string[]
    bg_vfx_node_name?: string
    fg_vfx_node_name?: string
    damage_multiplier?: number
    max_kills?: number
    tid_damage_multiplier?: string
    benchDragonsDamagePercentage?: number
    bonusDamagePercentage?: number
    maxBenchTargets?: number
    benchTargetMode?: string
    fg_vfx_screen_effectname?: string
    vfx_text_effectname?: string
}

export interface Skill {
    id: number
    tid_name: string
    tid_description: string
    cooldown: number
    effects: number[]
}

export interface Passive {
    id: number
    name: string
    name_key?: string
    effect_vfx?: string
    effect_sfx?: number
    special_icon?: number
    skill_id?: number
    world_skill_id?: number
}

export interface WorldSkill {
    id: number
    tid_name: string
    tid_description: string
    effects: number[]
}

export interface WorldEffect {
    id: number
    effect_type: string
    icon: Icon2
    interval_time: number
    parameters: Parameters3
}

export interface Icon2 {
    remote: string
}

export interface Parameters3 {
    resource: Resource2
}

export interface Resource2 {
    f: number
}

export interface TreeOfLife {
    parameters: Parameter10[]
    rarity_summon_time: RaritySummonTime[]
    dragonid_summon_time: DragonidSummonTime[]
    rarity_seeds: RaritySeed13[]
}

export interface Parameter10 {
    id: number
    name: string
    value: any
}

export interface RaritySummonTime {
    rarity: string
    summon_time_seconds: number
    summon_time_seconds_b: number
}

export interface DragonidSummonTime {
    dragon_id: number
    summon_time_seconds: number
    summon_time_seconds_b: number
}

export interface RaritySeed13 {
    id: number
    rarity: string
    max_rarity_seeds: number
}

export interface TreeOfLifeRecall {
    parameters: Parameter11[]
    recall_seeds: RecallSeed[]
    multiplier_times: MultiplierTime[]
}

export interface Parameter11 {
    id: number
    name: string
    value: any
}

export interface RecallSeed {
    id: number
    grade: number
    seeds_received_lv0: number
    seeds_received_lv1: number
    seeds_received_lv2: number
    seeds_received_lv3: number
    seeds_received_lv4: number
    seeds_received_lv5: number
    seeds_received_lv6: number
    seeds_received_lv7: number
    seeds_received_lv8: number
    seeds_received_lv9: number
    seeds_received_lv10: number
    seeds_received_lv11: number
    seeds_received_lv12: number
    seeds_received_lv13: number
    seeds_received_lv14: number
    seeds_received_lv15: number
    seeds_received_lv16: number
    seeds_received_lv17: number
    seeds_received_lv18: number
    seeds_received_lv19: number
    seeds_received_lv20: number
    seeds_received_lv21: number
    seeds_received_lv22: number
    seeds_received_lv23: number
    seeds_received_lv24: number
    seeds_received_lv25: number
    seeds_received_lv26: number
    seeds_received_lv27: number
    seeds_received_lv28: number
    seeds_received_lv29: number
    seeds_received_lv30: number
    seeds_received_lv31: number
    seeds_received_lv32: number
    seeds_received_lv33: number
    seeds_received_lv34: number
    seeds_received_lv35: number
    seeds_received_lv36: number
    seeds_received_lv37: number
    seeds_received_lv38: number
    seeds_received_lv39: number
    seeds_received_lv40: number
    seeds_received_lv41: number
    seeds_received_lv42: number
    seeds_received_lv43: number
    seeds_received_lv44: number
    seeds_received_lv45: number
    seeds_received_lv46: number
    seeds_received_lv47: number
    seeds_received_lv48: number
    seeds_received_lv49: number
    seeds_received_lv50: number
    seeds_received_lv51: number
    seeds_received_lv52: number
    seeds_received_lv53: number
    seeds_received_lv54: number
    seeds_received_lv55: number
    seeds_received_lv56: number
    seeds_received_lv57: number
    seeds_received_lv58: number
    seeds_received_lv59: number
    seeds_received_lv60: number
    seeds_received_lv61: number
    seeds_received_lv62: number
    seeds_received_lv63: number
    seeds_received_lv64: number
    seeds_received_lv65: number
    seeds_received_lv66: number
    seeds_received_lv67: number
    seeds_received_lv68: number
    seeds_received_lv69: number
    seeds_received_lv70: number
    seeds_received_lv71: number
    seeds_received_lv72: number
    seeds_received_lv73: number
    seeds_received_lv74: number
    seeds_received_lv75: number
    seeds_received_lv76: number
    seeds_received_lv77: number
    seeds_received_lv78: number
    seeds_received_lv79: number
    seeds_received_lv80: number
}

export interface MultiplierTime {
    id: number
    grade: number
    multiplier_time: number
}

export interface TreeOfLifePowerup {
    parameters: Parameter12[]
    animation: Animation[]
    grades_by_rarity: GradesByRarity[]
    grades_by_dragon: GradesByDragon[]
    visuals: Visual[]
    multiplier_times: MultiplierTime2[]
    grade_master_points: GradeMasterPoint[]
    rarity_seeds: RaritySeed14[]
    gold_boost: GoldBoost[]
}

export interface Parameter12 {
    id: number
    name: string
    value: any
}

export interface Animation {
    dragon_grade: number
    background_color: string
    dragon_particle_color: string
    star_particle_color: string
    dragon_particle_size: number
    star_particle_size: number
    camera_shake: number
    animation_duration: number
}

export interface GradesByRarity {
    id: number
    rarity: string
    seeds_per_grade: number[]
    stats_boost: number
    master_points_boost: number
}

export interface GradesByDragon {
    id: number
    dragon: number
    seeds_per_grade: number[]
    stats_boost: number
    master_points_boost: number
}

export interface Visual {
    id: number
    front: string
    back: string
    type: string
    grade: number
}

export interface MultiplierTime2 {
    id: number
    grade: number
    multiplier_time: number
}

export interface GradeMasterPoint {
    id: number
    grade: number
    master_points_multiplier: number
}

export interface RaritySeed14 {
    rarity: string
    max_rarity_seeds_per_grade: number[]
}

export interface GoldBoost {
    id: number
    rarity: string
    gold_boost_0: number
    gold_boost_1: number
    gold_boost_2: number
    gold_boost_3: number
    gold_boost_4: number
    gold_boost_5: number
    gold_boost_6: number
}

export interface HabitatTokens {
    multipliers: Multiplier[]
}

export interface Multiplier {
    id: number
    applicable_tokens: number
    multiplier: number
}

export interface MaxDragonLevels {
    max_levels_by_grade: MaxLevelsByGrade[]
}

export interface MaxLevelsByGrade {
    id: number
    grade: number
    max_level: number
    empower_asset?: string
}

export interface Collectibles {
    rewards: Reward66[]
}

export interface Reward66 {
    id: number
    reward: Reward67[]
    category: string
    subcategory: number
}

export interface Reward67 {
    chest?: number
    c?: number
    f?: number
    egg?: number
    b?: number
    rarity_seeds?: RaritySeed15[]
}

export interface RaritySeed15 {
    rarity: string
    amount: number
}

export interface PuzzleIsland {
    islands: Island7[]
    symbols: Symbol[]
    boards: Board[]
    rewards: Reward68[]
    missions: Mission2[]
    parameters: Parameter13[]
}

export interface Island7 {
    id: number
    start_ts: number
    end_ts: number
    boards: number[]
    moves_per_board: number
    symbols: string[]
    top_reward_queue: number[]
    top_reward_symbols: string[]
    top_reward_goal_modifier: number
    middle_reward_queue: number[]
    middle_reward_symbols: string[]
    middle_reward_goal_modifier: number
    bottom_reward_queue: number[]
    bottom_reward_symbols: string[]
    bottom_reward_goal_modifier: number
    mission_queue1: number[]
    mission_queue2: number[]
    mission_queue3: number[]
    mission_queue4: number[]
    free_moves_amount: number
    free_moves_period: number
    building_id: number
    building_position: number[]
    zip_file: string
    vfx_asset: string
    canvas_url: string
    help_id: number
    featured_dragons: number[]
    featured_rewards: number[]
    sound_tag?: string
}

export interface Symbol {
    id: number
    symbol_type: string
    effect: string
    asset_name: string
    probability: number
}

export interface Board {
    id: number
    shape: number[][]
}

export interface Reward68 {
    id: number
    required_pieces: number
    colors: number
    reward: Reward69
    loopable: number
    new_badge: number
    end_ts?: number
    limited_moves?: number
    reset_moves_cost: any
}

export interface Reward69 {
    f?: number
    g?: number
    egg?: number
    seeds?: Seed34[]
    e_token?: number
    f_token?: number
    wr_token?: number
    el_token?: number
    i_token?: number
    li_token?: number
    p_token?: number
    d_token?: number
    m_token?: number
    l_token?: number
    chest?: number
    pu_token?: number
    pr_token?: number
    c?: number
    ep?: number
    b?: number
    rarity_seeds?: RaritySeed16[]
    perks?: Perk6[]
}

export interface Seed34 {
    id: number
    amount: number
}

export interface RaritySeed16 {
    rarity: string
    amount: number
}

export interface Perk6 {
    id: number
    quantity: number
}

export interface Mission2 {
    id: number
    activity_type: string
    moves: number
    required_amount: number
    loopable: number
    skip_cost: SkipCost
    specific?: string[]
}

export interface SkipCost {
    c: number
}

export interface Parameter13 {
    id: number
    name: string
    value: any
}

export interface VipPass {
    packs: Pack[]
    parameters: Parameter14[]
    perks: Perk7[]
}

export interface Pack {
    id: number
    price: number
    product_id: string
    duration_days: number
    perks_ids: number[]
    slot: number
    enabled: number
    price_canvas: PriceCanvas
    product_canvas_id: string
    product_title_canvas: string
    product_description_canvas: string
    product_image_canvas: string
    discount_tid?: string
}

export interface PriceCanvas {
    USD: number
    EUR: number
}

export interface Parameter14 {
    id: number
    name: string
    value: any
}

export interface Perk7 {
    id: number
    type: string
    parameters: any
    mobile_display_parameters: any
}

export interface DragonSkins {
    dragon_skins: DragonSkin[]
    items_units_attribute_modifiers: ItemsUnitsAttributeModifier[]
    parameters: Parameter15[]
}

export interface DragonSkin {
    id: number
    dragon_id: number
    img_name_mobile: string
    spritesheet_id_canvas: string
    img_name_canvas: string
    skin_description_tid: string
    skin_name_tid: string
    skin_locked_description_tid: string
    achievement?: Achievement
    items_units_attribute_modifiers_ids?: number[]
    cost?: Cost3
    start_ts?: number
}

export interface Achievement {
    type: string
    goal: number
}

export interface Cost3 {
    c: number
}

export interface ItemsUnitsAttributeModifier {
    id: number
    behaviour: string
    attribute: string
    value: any
    only_if_equipped: boolean
    index?: number
}

export interface Parameter15 {
    id: number
    name: string
    value: any
}

export interface DragonWars {
    battles_config: BattlesConfig[]
}

export interface BattlesConfig {
    name: string
    value: any
}

export interface FarmCrops {
    farm_crops: FarmCrop[]
}

export interface FarmCrop {
    id: number
    seconds: number
    seconds_b: number
    price: Price4
    price_b: PriceB
    values: number
    values_b: number
    xp: number
    xp_b: number
    order: number
    alliance_available: number
    icon: Icon3
    image: Image2
    regrow_image: RegrowImage
    tid_name: string
    unlock_building_id: number
    farm_level: number
    available: number
}

export interface Price4 {
    g: number
}

export interface PriceB {
    g: number
}

export interface Icon3 {
    remote: string
}

export interface Image2 {
    remote: string
}

export interface RegrowImage {
    remote: string
}

export interface Breeding {
    breeding: Breeding2[]
    incompatibilities: Incompatibility[]
    boost: Boost[]
    parameters: Parameter16[]
}

export interface Breeding2 {
    id: number
    element_one: string
    element_two: string
    dragon_id_1: number
    empower_1: number
    dragon_id_2: number
    empower_2: number
    dragon_id_3: number
    empower_3: number
    dragon_id_4?: number
    empower_4?: number
    dragon_id_5?: number
    empower_5?: number
    dragon_id_6?: number
    empower_6?: number
    dragon_id_7?: number
    empower_7?: number
}

export interface Incompatibility {
    id: number
    element_one: string
    element_two: string
}

export interface Boost {
    id: number
    rarity: string
    boost_0: number
    boost_1: number
    boost_2: number
    boost_3: number
    boost_4: number
    boost_5: number
    boost_6: number
    category?: number
}

export interface Parameter16 {
    id: number
    name: string
    value: any
}

export interface LiveopsChallenges {
    parameters: Parameter17[]
    challenges: Challenge[]
    goals: Goal[]
    collectibles: Collectible[]
    rewards: Reward70[]
    rewards_config: RewardsConfig3[]
    rewards_tiers: RewardsTier3[]
}

export interface Parameter17 {
    id: number
    name: string
    value: any
}

export interface Challenge {
    id: number
    availability: Availability7[]
    goals: number[]
    title_tid: string
    hud_icon_tid: string
    background: string
    displayed_reward: number
    title_color?: string
    awning_color?: string
    icon_color?: string
    ribbon_color?: string
    user_min_level: number
    weight?: number
}

export interface Availability7 {
    from: string
    to?: string
    dur?: string
}

export interface Goal {
    id: number
    collectibles: number[]
    rewards: number
    claim_limit: number
    title_tid: string
    next_in_chain?: number
}

export interface Collectible {
    id: number
    collectible_type: string
    item_id: number
    amount: number
}

export interface Reward70 {
    id: number
    reward: Reward71[]
    type_id: number
}

export interface Reward71 {
    b: any
    chest?: number
    seeds?: Seed35[]
    egg?: number
    keys?: number
    g?: number
    seggs?: Segg[]
    rarity_seeds?: RaritySeed17[]
    c?: number
    f?: number
    trade_tickets?: TradeTicket9[]
    skin?: number
    l_token?: number
    d_token?: number
    li_token?: number
    n_token?: number
    wd_token?: number
    f_token?: number
    p_token?: number
    perks?: Perk8[]
    pr_token?: number
    wr_token?: number
    el_token?: number
    w_token?: number
    i_token?: number
    m_token?: number
    pu_token?: number
    kg_token?: number
    "rank_up_coin.legendary"?: number
}

export interface Seed35 {
    id: number
    amount: number
}

export interface Segg {
    id: number
    grade: number
    rank: number
}

export interface RaritySeed17 {
    rarity: string
    amount: number
}

export interface TradeTicket9 {
    rarity: string
    amount: number
    limit: boolean
}

export interface Perk8 {
    id: number
    quantity: number
}

export interface RewardsConfig3 {
    id: number
    background: string
    title_tid: string
    description_tid: string
    button_tid: string
}

export interface RewardsTier3 {
    name: string
    value: any
}

export interface AssetVersioning {
    dragons: Dragon2[]
    generics: Generic[]
    attacks: Attack2[]
    buildings: Building[]
    chests: Chest2[]
    particles: Particle[]
}

export interface Dragon2 {
    name: string
    format: string
    asset_version: number
}

export interface Generic {
    name: string
    format: string
    asset_version: number
}

export interface Attack2 {
    name: string
    format: string
    asset_version: number
}

export interface Building {
    name: string
    format: string
    asset_version: number
}

export interface Chest2 {
    name: string
    format: string
    asset_version: number
}

export interface Particle {
    name: string
    format: string
    asset_version: number
}

export interface BattlePass {
    battle_pass: BattlePass2[]
    purchase_popup: PurchasePopup[]
    purchase_popup_elite: PurchasePopupElite[]
    nodes: Node3[]
    extra_nodes: ExtraNode[]
    parameters: Parameter18[]
    elite_pass: ElitePass[]
    goals: Goal2[]
    collectible_actions: CollectibleAction[]
    rewards: Reward72[]
    rewards_config: RewardsConfig4[]
    rewards_tiers: RewardsTier4[]
}

export interface BattlePass2 {
    id: number
    type: string
    availability: Availability8[]
    nodes: number[]
    extra_node: number
    daily_goals: number[]
    weekly_goals: number[]
    main_reward_node: number
    iap_uid: string
    iap_discount_uid: IapDiscountUid[]
    iap_elite_uid: string
    iap_elite_discount_uid: IapEliteDiscountUid[]
    iap_elite_upgrade_uid: string
    iap_elite_upgrade_discount_uid: IapEliteUpgradeDiscountUid[]
    name_tid: string
    season_tid: string
    description_tid: string
    icon_id: string
    purchase_popup: number
    elite_purchase_popup: number
    asset: string
    sound_tag: string
    orbs_producing_habitat_id: number
    elite_extra_reward: number
}

export interface Availability8 {
    from: string
    to: string
}

export interface IapDiscountUid {
    iap: string
    availabilities: Availability9[]
}

export interface Availability9 {
    from: string
    dur?: string
    to?: string
}

export interface IapEliteDiscountUid {
    iap: string
    availabilities: Availability10[]
}

export interface Availability10 {
    from: string
    dur: string
}

export interface IapEliteUpgradeDiscountUid {
    iap: string
    availabilities: Availability11[]
}

export interface Availability11 {
    from: string
    dur: string
}

export interface PurchasePopup {
    id: number
    main_reward_id: number
    right_reward_id: number
    small_left_reward_id: number
    medium_left_reward_id: number
    big_left_reward_id: number
    use_right_reward_asset_bundle: number
    use_big_left_reward_asset_bundle: number
    table_reward_1_quantity: number
    table_reward_2_quantity: number
    table_reward_3_quantity: number
    table_reward_4_quantity: number
    table_reward_5_quantity: number
    left_rewards_description_tid: string
    main_title_style: string
    description_elements_style: string
    more_title_style: string
    quantity_label_style: string
    discount: number
    offer_discount_percentage: number
    show_on_startup: boolean
    right_rewards_description_tid?: string
}

export interface PurchasePopupElite {
    id: number
    premium_reward_1_tid: string
    premium_reward_2_tid: string
    premium_reward_2_quantity?: number
    premium_reward_3_tid: string
    premium_reward_4_tid: string
    premium_reward_5_tid: string
    premium_reward_6_tid: string
    elite_reward_1_tid: string
    elite_reward_2_tid: string
    elite_reward_3_tid: string
    main_title_style: string
    premium_rewards_description_style: string
    premium_description_style: string
    premium_price_style: string
    premium_discount_price_style: string
    elite_description_style: string
    elite_reward_description_style: string
    elite_price_style: string
    elite_discount_price_style: string
    offer_discount_percentage: number
    badge_tid: string
    show_on_startup: boolean
}

export interface Node3 {
    id: number
    completion_score: number
    premium_reward: number
    free_reward?: number
    limit_bp_discount?: boolean
}

export interface ExtraNode {
    id: number
    iteration_score: number
    free_reward: number
    premium_reward: number
    elite_reward: number
}

export interface Parameter18 {
    id: number
    name: string
    value: any
}

export interface ElitePass {
    id: number
    name: string
    value: number
}

export interface Goal2 {
    id: number
    collectible_actions: number[]
    reward: number
    eligibility?: Eligibility
    icon_id: string
}

export interface Eligibility {
    week: number
}

export interface CollectibleAction {
    id: number
    amount: number
    type: string
    rules?: Rules
}

export interface Rules {
    all_of_elements?: string[]
    rarity?: string
    level?: number
    parents_elements?: string[]
}

export interface Reward72 {
    id: number
    reward: Reward73[]
    type_id: number
}

export interface Reward73 {
    b?: number
    g?: number
    chest?: number
    pp?: number
    egg?: number
    f?: number
    "rank_up_coin.common"?: number
    oph_token?: number
    seeds?: Seed36[]
    perks?: Perk9[]
    c?: number
    w_token?: number
    li_token?: number
    i_token?: number
    pr_token?: number
    f_token?: number
    wr_token?: number
    p_token?: number
    l_token?: number
    wd_token?: number
    e_token?: number
    el_token?: number
    d_token?: number
    m_token?: number
    pu_token?: number
    n_token?: number
    skin?: number
    trade_tickets?: TradeTicket10[]
    rarity_seeds?: RaritySeed18[]
}

export interface Seed36 {
    id: number
    amount: number
}

export interface Perk9 {
    id: number
    quantity: number
}

export interface TradeTicket10 {
    rarity: string
    amount: number
    limit: boolean
}

export interface RaritySeed18 {
    rarity: string
    amount: number
}

export interface RewardsConfig4 {
    id: number
    background: string
    title_tid: string
    description_tid: string
    button_tid: string
}

export interface RewardsTier4 {
    name: string
    value: any
}

export interface DragonMastery {
    goals: Goal3[]
    collectible_actions: CollectibleAction2[]
    loops: Loop[]
    parameters: Parameter19[]
    rewards: Reward74[]
    rewards_config: RewardsConfig5[]
    rewards_tiers: RewardsTier5[]
}

export interface Goal3 {
    id: number
    collectible_actions: number[]
    rewards: number
    master_points_earned: number
    next_in_chain: number
    title_tid: string
    desc_tid: string
    task_type: string
    task_increase: string
}

export interface CollectibleAction2 {
    id: number
    type: string
    rules: Rules2
    amount: number
}

export interface Rules2 {
    rarity?: string
    all_of_elements?: string[]
    parents_elements?: string[]
}

export interface Loop {
    id: number
    loop: number
    task_requirements: TaskRequirements
    point_increase: number
}

export interface TaskRequirements {
    low: number
    mid: number
    high: number
}

export interface Parameter19 {
    id: number
    name: string
    value: any
}

export interface Reward74 {
    id: number
    reward: Reward75[]
    type_id: number
}

export interface Reward75 {
    chest?: number
    egg?: number
}

export interface RewardsConfig5 {
    id: number
    background: string
    title_tid: string
    title_show_tid: string
    description_tid: string
    description_show_tid: string
    button_tid: string
    button_claim_double_tid: string
}

export interface RewardsTier5 {
    name: string
    value: any
}

export interface RunnerIsland {
    islands: Island8[]
    sections: Section[]
    parameters: Parameter20[]
    obstacles: Obstacle[]
    level_chunks: LevelChunk2[]
    level_rewards: LevelReward[]
    missions: Mission3[]
    rewards: Reward76[]
    rewards_config: RewardsConfig6[]
    rewards_tiers: RewardsTier6[]
    milestones: Milestone[]
    milestone_rewards: MilestoneReward[]
    mission_pool: MissionPool[]
}

export interface Island8 {
    id: number
    start_ts: number
    end_ts: number
    building_id: number
    building_position: number[]
    dragon_id: number
    dragon_offset: number[]
    dragon_scale: number
    runner_dragon_asset?: string
    zip_file: string
    help_id: number
    run_cost: number
    sound_tag: string
    mission_pool: number[]
    sections: number[]
    building_tooltip_position: number[]
    building_timer_position: number[]
    milestone_rewards: number[]
}

export interface Section {
    id: number
    starting_point: number
    speed: number
    level_chunks: LevelChunk[]
    rewards: number[]
    background_layers: BackgroundLayer[]
}

export interface LevelChunk {
    id: number
    weight: number
}

export interface BackgroundLayer {
    texture: string
    speed: number
    positionY: number
}

export interface Parameter20 {
    id: number
    name: string
    value: any
}

export interface Obstacle {
    id: number
    texture: string
    length: number
    is_tall: boolean
}

export interface LevelChunk2 {
    id: number
    lane_1: any
    lane_2: Lane2[]
    lane_3: Lane3[]
    length: number
}

export interface Lane2 {
    reward?: string
    position: number
    jump?: boolean
    obstacle_id?: number
}

export interface Lane3 {
    reward?: string
    position: number
    jump?: boolean
    obstacle_id?: number
}

export interface LevelReward {
    id: number
    resource_id: number
    type: string
    custom_texture?: string
}

export interface Mission3 {
    id: number
    type: string
    goal_points: number
    price: number
    price_increment: number
    pool_size: number
    spawn_time: number
    collect_chance: number
    collect_chance_modifier: number
    energy: number
}

export interface Reward76 {
    id: number
    reward: Reward77[]
    type_id: number
    double_with_video_ad?: boolean
    premium_rewards?: number[]
    new_badge?: number[]
}

export interface Reward77 {
    chest?: number
    ep?: number
    egg?: number
    c?: number
    seeds?: Seed37[]
    f?: number
    g?: number
    en_runner?: number
    f_token?: number
    pu_token?: number
    i_token?: number
    wr_token?: number
    el_token?: number
    wd_token?: number
    m_token?: number
    w_token?: number
    pr_token?: number
    e_token?: number
    d_token?: number
    p_token?: number
    li_token?: number
    l_token?: number
}

export interface Seed37 {
    id: number
    amount: number
}

export interface RewardsConfig6 {
    id: number
    background: string
    title_tid: string
    title_show_tid: string
    description_tid: string
    description_show_tid: string
    button_tid: string
    button_claim_double_tid: string
    animated_dragon: boolean
    adult_dragon: boolean
}

export interface RewardsTier6 {
    name: string
    value: any
}

export interface Milestone {
    id: number
    positionX: number
    positionY: number
    points: number
    texture: string
    animated_asset: string
}

export interface MilestoneReward {
    id: number
    points: number
    reward_id: number
    highlighted: number
    focused: number
}

export interface MissionPool {
    id: number
    buy_all_discounts: number
    missions: number[]
    price: number
    price_increment: number
}

export interface Perks {
    abilities: Ability[]
    parameters: Parameter21[]
    perks: Perk10[]
    slots: Slot[]
    rewards: Reward78[]
    rewards_config: RewardsConfig7[]
}

export interface Ability {
    id: number
    type: string
    parameters: Parameters4
    asset: Asset
}

export interface Parameters4 {
    value: number
    passiveSkillId?: number
}

export interface Asset {
    remote: string
}

export interface Parameter21 {
    id: number
    name: string
    value: any
}

export interface Perk10 {
    id: number
    type: string
    name_tid: string
    description_tid: string
    abilities: number[]
    max_perks: MaxPerk[]
    asset: Asset2
    rarity_level: number
    destroy_cost: DestroyCost[]
    store_cost: StoreCost[]
    offer_id?: number
}

export interface MaxPerk {
    rarity: string
    max: number
}

export interface Asset2 {
    remote: string
}

export interface DestroyCost {
    g: number
}

export interface StoreCost {
    c: number
}

export interface Slot {
    id: number
    type: string
    available_for_dragons: AvailableForDragons
    asset: Asset3
    offer_id?: number
}

export interface AvailableForDragons { }

export interface Asset3 {
    remote: string
}

export interface Reward78 {
    id: number
    reward: Reward79[]
    type_id: number
}

export interface Reward79 {
    perks: Perk11[]
}

export interface Perk11 {
    id: number
    quantity: number
}

export interface RewardsConfig7 {
    id: number
    background: string
    title_tid: string
    title_show_tid: string
    description_tid: string
    description_show_tid: string
    button_tid: string
    button_claim_double_tid: string
    animated_dragon: boolean
    adult_dragon: boolean
}
