settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

let common = [
    'chests/abandoned_minecraft',
    'chests/igloo_chest',
    'chests/pillager_outpost',
    'chests/shipwreck_treasure',
    'chests/underwater_ruin_big',
    'chests/underwatch_ruin_small'
]

let uncommon = [
    'chests/desert_pyramid',
    'chests/jungle_temple',
    'chests/nether_bridge',
    'chests/simple_dungeon',
    'chests/village/village_toolsmith',
    'chests/village/village_weaponsmith',
    'chests/woodland_mansion'
]

function commonLoot(type){
    onEvent('lootjs', (event) => {
        //First aid loot
        event.addLootTableModifier(type)
            .randomChance(0.2)
            .addWeightedLoot([0,15],[
                Item.of('firstaid:plaster').withChance(100),
                Item.of('firstaid:bandage').withChance(75),
                Item.of('firstaid:morphine').withChance(50)
            ])
        //Junk loot
        event.addLootTableModifier(type)
            .randomChance(1.0)
            .addWeightedLoot([3,7],[
                Item.of('minecraft:rotten_flesh').withChance(99),
                Item.of('minecraft:bone').withChance(30),
                Item.of('forge:seeds').withChance(15),
                Item.of('forge:bread').withChance(5)
            ])
    })
}

function uncommonLoot(type){
    onEvent('lootjs', (event) => {
        //First aid loot
        event.addLootTableModifier(type)
            .randomChance(0.2)
            .addWeightedLoot([1,4],[
                Item.of('firstaid:plaster').withChance(100),
                Item.of('firstaid:bandage').withChance(75),
                Item.of('firstaid:morphine').withChance(50)
            ])
        
        //Tools loot
        event.addLootTableModifier(type)
            .randomChance(0.8)
            .addWeightedLoot([1,2],[
                Item.of('minecraft:iron_pickaxe').withChance(100),
                Item.of('minecraft:iron_axe').withChance(80),
                Item.of('minecraft:iron_shovel').withChance(80),
                Item.of('minecraft:iron_sword').withChance(90),
                Item.of('minecraft:iron_hoe').withChance(100),
                Item.of('curios:back').withChance(2)
            ])
        //Junk loot
        event.addLootTableModifier(type)
            .randomChance(1.0)
            .addWeightedLoot([3,7],[
                Item.of('minecraft:rotten_flesh').withChance(99),
                Item.of('minecraft:bone').withChance(30),
                Item.of('forge:seeds').withChance(25),
                Item.of('forge:bread').withChance(10)
            ])
    })
}

onEvent('lootjs', (event) => {
    common.forEach(commonLoot, event)
    uncommon.forEach(uncommonLoot, event)
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addWeightedLoot([1],[
            Item.of('nzgexpansion:revolver').withChance(2),
            Item.of('nzgexpansion:hunting_rifle').withChance(3),
            Item.of('nzgexpansion:hunting_shotgun').withChance(1),
            Item.of('nzgexpansion:micro_smg').withChance(.5)
        ])

    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.33)
        .addWeightedLoot([5,16],[
            Item.of('cgm:basic_bullet').withChance(30),
            Item.of('cgm:shell').withChance(30),
            Item.of('nzgexpansion:medium_bullet').withChance(30),
            Item.of('minecraft:cobweb').withChance(50)
        ])

    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addWeightedLoot([0,2],[
            Item.of('firstaid:plaster').withChance(30),
            Item.of('firstaid:bandage').withChance(15),
            Item.of('firstaid:morphine').withChance(5)
        ])

    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.8)
        .addWeightedLoot([0,1],[
            Item.of('curios:back').withChance(2)
        ])

    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(1.0)
        .addWeightedLoot([3,7],[
            Item.of('minecraft:rotten_flesh').withChance(99),
            Item.of('minecraft:bone').withChance(30),
            Item.of('forge:seeds').withChance(15),
            Item.of('forge:bread').withChance(5)
        ])
})