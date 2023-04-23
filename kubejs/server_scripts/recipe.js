// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const shaped = [
	new ShapedRecipe(
		'nzgexpansion:revolver',
		'1',
		['   ','PIP','  W'],
		{P:'#forge:plates/iron', I:'#forge:ingots/iron', W:'#minecraft:planks'}
	),
	new ShapedRecipe(
		'nzgexpansion:hunting_shotgun',
		'1',
		['   ','PIP','  W'],
		{P:'#forge:plates/iron', I:'#forge:storage_blocks/iron', W:'#minecraft:planks'}
	),
	new ShapedRecipe(
		'nzgexpansion:hunting_rifle',
		'1',
		['   ','PIP','  W'],
		{P:'#forge:plates/iron', I:'#minecraft:planks', W:'#minecraft:planks'}
	),
	new ShapedRecipe(
		'cgm:basic_bullet',
		'10',
		[' L ','CGC',' C '],
		{L:'#forge:ingots/lead',G:'#forge:gunpowder',C:'#forge:ingots/copper'}

	),
	new ShapedRecipe(
		'nzgexpansion:medium_bullet',
		'10',
		['CLC','CGC','III'],
		{L:'#forge:ingots/lead',G:'#forge:gunpowder',C:'#forge:ingots/copper',I:'#forge:ingots/iron'}		
	),
	new ShapedRecipe(
		'cgm:shell',
		'10',
		['CCC','GgG','CCC'],
		{C:'#forge:ingots/copper',G:'#forge:gunpowder',g:'#forge:gravel'}
	),
	new ShapedRecipe(
		'cgm:grenade',
		'1',
		['iII','ITI','III'],
		{i:'#forge:nuggets/iron',I:'#forge:plates/iron',T:'minecraft:tnt'}
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
			'hardcore_torches:lit_torch'
		]
	),
	new ShapelessRecipe(
		'minecraft:string',
		'4',
		'minecraft:white_wool'
	)
]

const recipesToDelete = [
	'cgm:workbench',
	'nzgexpansion:hunting_rifle',
	'nzgexpansion:hunting_shotgun',
	'nzgexpansion:revolver',
	'minecraft:wooden_sword',
	'minecraft:wooden_pickaxe',
	'minecraft:wooden_shovel',
	'minecraft:wooden_hoe',
	"minecraft:wooden_axe",
	"minecraft:stone_sword",
	"minecraft:stone_pickaxe",
	"minecraft:stone_shovel",
	"minecraft:stone_hoe",
	"minecraft:stone_axe",
	'firstaid:morphine',
	'minecraft:string',
	'majruszsdifficulty:bandage',
	'majruszsdifficulty:golden_bandage',
	'cgm:basic_bullet',
	'nzgexpansion:medium_bullet',
	'cgm:shell',
	'cgm:grenade',
	'cgm:stun_grenade',
	'thermal:copper_plate',
	'beyond_earth:compressed_steel'
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
		event.shapeless(`${x.count}x ${x.item}`,x.ingredients)
		event.shapeless(`1x thermal:copper_plate`, [
			'#forge:ingots/copper',
			Item.of('beyond_earth:hammer')
		]).damageIngredient(1).keepIngredient('beyond_earth:hammer')
		event.shapeless(`1x beyond_earth:compressed_steel`, [
			'#forge:ingots/steel',
			Item.of('beyond_earth:hammer')
		]).damageIngredient(1).keepIngredient('beyond_earth:hammer')
	})
	
})



