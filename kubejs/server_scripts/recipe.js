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
		{P:'#forge:ingots/iron',I:'#forge:storage_blocks/iron'}
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
		{C: 'survive:white_washcloth', K:'#forge:tools/knives', H:"firstaid:plaster"}
	),
	new ShapedRecipe(
		'majruszsdifficulty:bandage',
		'3',
		['RER','ERE','RER'],
		{R: '#forge:glass', E:'minecraft:fermented_spider_eye'}
	),
	new ShapedRecipe(
		'survive:wool_boots',
		'1',
		['   ','C C','C C'],
		{C:'survive:white_washcloth'}
	),
	new ShapedRecipe(
		'survive:wool_pants',
		'1',
		['CCC','C C','C C'],
		{C: 'survive:white_washcloth'}
	),
	new ShapedRecipe(
		'survive:wool_jacket',
		'1',
		['C C','CCC','CCC'],
		{C: 'survive:white_washcloth'}
	),
	new ShapedRecipe(
		'survive:wool_hat',
		'1',
		['CCC','C C','   '],
		{C: 'survive:white_washcloth'}
	),
	new ShapedRecipe(
		'survive:stiffened_honey_helmet',
		'1',
		['III','IHI','   '],
		{I: 'survive:ice_cube', H: 'minecraft:leather_helmet'}
	),
	new ShapedRecipe(
		'survive:stiffened_honey_chestplate',
		'1',
		['ICI','III','III'],
		{I: 'survive:ice_cube', C: 'minecraft:leather_chestplate'}
	),
	new ShapedRecipe(
		'survive:stiffened_honey_leggings',
		'1',
		['III','ILI','I I'],
		{I: 'survive:ice_cube', L: 'minecraft:leather_leggings'}
	),
	new ShapedRecipe(
		'survive:stiffened_honey_boots',
		'1',
		['   ','I I','IBI'],
		{I: 'survive:ice_cube', B: 'minecraft:leather_boots'}
	),
	new ShapedRecipe(
		'survive:white_washcloth',
		'4',
		[' W ',' W ','   '],
		{W: '#minecraft:wool'}
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
		'firstaid:plaster',
		'3',
		[
			'survive:white_washcloth',
			'survive:white_washcloth',
			'survive:white_washcloth',
			'survive:white_washcloth'
		]
	),
	new ShapelessRecipe(
		'#minecraft:candles',
		'1',
		[
			'#forge:string',
			'survive:animal_fat'
		]
	),
	new ShapelessRecipe(
		'#forge:coins/copper',
		'10',
		[
			'#forge:coins/silver'
		]
	),
	new ShapelessRecipe(
		'#forge:coins/silver',
		'10',
		[
			'#forge:coins/gold'
		]
	)
]

const recipesToDelete = [
	'cgm:mini_gun',
	'cgm:machine_pistol',
	'firstaid:morphine',
	'cgm:basic_bullet',
	'nzgexpansion:medium_bullet',
	'cgm:shell',
	'cgm:advanced_bullet',
	'#forge:coins',
	'firstaid:plaster',
	'firstaid:bandage',
	'#majruszsdifficulty:tattered_armor',
	'#survive:white_washcloth',
	'minecraft:eye_of_ender',
	'survive:wool_boots',
	'survive:wool_pants',
	'survive:wool_jacket',
	'survive:wool_hat',
	'survive:stiffened_honey',
	'survive:stiffened_honey_helmet',
	'survive:stiffened_honey_chestplate',
	'survive:stiffened_honey_leggings',
	'survive:stiffened_honey_boots',
	'@forge:ingots/steel'
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
		event.smelting('minecraft:leather','minecraft:rotten_flesh'),
		event.recipes.thermal.smelter('2x #forge:ingots/steel', ['#forge:ingots/iron','#forge:ingots/nickel']),
		event.recipes.thermal.smelter('2x #forge:ingots/brass', ['#forge:ingots/copper','#forge:ingots/zinc']),
		event.recipes.thermal.press('#forge:plates/steel', '#forge:ingots/steel'),
		event.recipes.thermal.press('#forge:plates/brass', '#forge:ingots/brass')
	})
	
})