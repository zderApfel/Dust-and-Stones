// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const shaped = [
	new ShapedRecipe(
		'cgm:workbench',
		'1',
		['PPP','S S','S S'],
		{P:'#forge:plates/steel',I:'#forge:storage_blocks/steel'}
	),
	new ShapedRecipe(
		'artifacts:night_vision_goggles',
		'1',
		['LLL','ARA','E E'],
		{L:'minecraft:leather',A:'#forge:gems/amethyst',R:'#forge:dusts/redstone',E:'#forge:gems/emerald'}
	),
	new ShapedRecipe(
		'firstaid:bandage',
		'1',
		['CCC','KCH','CCC'],
		{C: 'majruszsdifficulty:cloth', K:'#forge:tools/knives', H:"firstaid:plaster"}
	),
	new ShapedRecipe(
		'majruszsdifficulty:bandage',
		'3',
		['RER','ERE','RER'],
		{R: 'thermal:rubber', E:'minecraft:fermented_spider_eye'}
	),
	new ShapedRecipe(
		'majruszsdifficulty:golden_bandage',
		'1',
		[' E ','EME',' E '],
		{E:'minecraft:golden_apple',M:'majruszsdifficulty:bandage'}
	)
]

const shapeless = [
	new ShapelessRecipe(
		'firstaid:morphine',
		'1',
		[
			'survive:sugar_water_bottle',
			'minecraft:poppy',
			'minecraft:poppy',
			'minecraft:torch'
		]
	),
	new ShapelessRecipe(
		'minecraft:string',
		'4',
		['#minecraft:wool']
	),
	new ShapelessRecipe(
		'majruszsdifficulty:cloth',
		'4',
		[
			'#minecraft:wool',
			'#minecraft:wool'
		]
	),
	new ShapelessRecipe(
		'firstaid:plaster',
		'3',
		[
			'majruszsdifficulty:cloth',
			'majruszsdifficulty:cloth',
			'majruszsdifficulty:cloth',
			'majruszsdifficulty:cloth'
		]
	)
]

const recipesToDelete = [
	'cgm:mini_gun',
	'cgm:machine_pistol',
	'firstaid:morphine',
	'majruszsdifficulty:bandage',
	'majruszsdifficulty:golden_bandage',
	'cgm:basic_bullet',
	'nzgexpansion:medium_bullet',
	'cgm:shell',
	'cgm:advanced_bullet',
	'#forge:coins',
	'firstaid:plaster',
	'firstaid:bandage',
	'#majruszsdifficulty:tattered_armor'
]

recipesToDelete.forEach(x => {
	onEvent('recipes', event => {
		event.remove({output: x})
	})
})

shaped.forEach(x => {
	onEvent('recipes', event => {
		event.shaped(`${x.quantity}x ${x.item}`, 
			x.shape,
			x.ingredients
		)
	})	
})

shapeless.forEach(x => {
	onEvent('recipes', event => {
		event.shapeless(`${x.count}x ${x.item}`,x.ingredients),
		event.smelting('minecraft:leather','minecraft:rotten_flesh')
	})
	
})