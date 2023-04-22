// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const shaped = [
	new ShapedRecipe(
		'kubejs:silver_sword',
		'1',
		'[ S , S , s ]',
		{S: 'minecraft:dirt', s: 'minecraft:stick'}
	)
]

const shapeless = []

const recipesToDelete = [
	'cgm:workbench',
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
	'minecraft:enchanting_table',
	'minecraft:brewing_stand'
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
		event.shapeless(`${x.quantity}x ${x.item}`, x.ingredients)
	})	
})


