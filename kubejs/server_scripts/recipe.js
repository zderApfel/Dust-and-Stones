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
		['   ','PIP','  I'],
		{P:'#forge:plates/iron', I:'#minecraft:planks'}
	),
	new ShapedRecipe(
		'cgm:pistol',
		'1',
		['   ','PIP','  I'],
		{P:'#forge:plates/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'nzgexpansion:micro_smg',
		'1',
		['PIP',' I ',' I '],
		{P:'#forge:plates/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'cgm:shotgun',
		'1',
		['   ','SB ','  I'],
		{S:'#forge:plates/steel', B:'#forge:storage_blocks/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'cgm:rifle',
		'1',
		['   ','SSS','  I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'nzgexpansion:submachine_gun',
		'1',
		['   ','SIS','I I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'cgm:assault_rifle',
		'1',
		['   ','SGS','I I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel', G:'nzgexpansion:submachine_gun'}
	),
	new ShapedRecipe(
		'nzgexpansion:heavy_assault_rifle',
		'1',
		['   ','PGS','I I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel', G:'cgm:assault_rifle', P:'#minecraft:planks'}
	),
	new ShapedRecipe(
		'nzgexpansion:battle_rifle',
		'1',
		['   ','SGS','I I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel', G:'cgm:assault_rifle'}
	),
	new ShapedRecipe(
		'cgm:heavy_rifle',
		'1',
		['   ','SGS','I I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel', G:'nzgexpansion:sniper_rifle'}
	),
	new ShapedRecipe(
		'nzgexpansion:sniper_rifle',
		'1',
		['   ','SGS','  I'],
		{S:'#forge:plates/steel', I:'#forge:ingots/steel', G:'nzgexpansion:hunting_rifle'}
	),
	new ShapedRecipe(
		'cgm:grenade_launcher',
		'1',
		['   ','PBB','I I'],
		{P:'#forge:plates/steel', B:'#forge:storage_blocks/steel', I:'#forge:ingots/steel'}
	),
	new ShapedRecipe(
		'cgm:bazooka',
		'1',
		['G  ','BBB',' I '],
		{G:'#forge:glass', B:'#forge:storage_blocks/steel', I:'#forge:ingots/steel'}
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
		{L:'#forge:ingots/lead',G:'#forge:gunpowder',C:'#forge:ingots/copper',I:'#forge:ingots/steel'}		
	),

	new ShapedRecipe(
		'cgm:advanced_bullet',
		'10',
		['CLC','CGC','III'],
		{L:'#forge:ingots/steel',G:'#forge:gunpowder',C:'#forge:ingots/copper',I:'#forge:ingots/brass'}		
	),

	new ShapedRecipe(
		'cgm:missile',
		'2',
		['III','ITI','IRI'],
		{I:'#forge:plates/steel',T:'minecraft:tnt',R:'minecraft:firework_rocket'}		
	),

	new ShapedRecipe(
		'cgm:shell',
		'10',
		['CCC','GgG','CCC'],
		{C:'#forge:plates/brass',G:'#forge:gunpowder',g:'#forge:gravel'}
	),
	new ShapedRecipe(
		'cgm:grenade',
		'1',
		['iII','ITI','III'],
		{i:'#forge:nuggets/iron',I:'#forge:plates/iron',T:'minecraft:tnt'}
	),
	new ShapedRecipe(
		'cgm:stun_grenade',
		'1',
		['iII','ITI','III'],
		{i:'#forge:nuggets/iron',I:'#forge:plates/iron',T:'minecraft:glowstone'}
	),
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
		'minecraft:stone_pickaxe',
		'1',
		['SSS',' s ',' s '],
		{S: "#forge:cobblestone",s:"#forge:rods/wooden"}
	),
	new ShapedRecipe(
		'firstaid:bandage',
		'1',
		['CCC','KCH','CCC'],
		{C: 'majruszsdifficulty:cloth', K:'#forge:tools/knives', H:"#chiselsandbits:chisel"}
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
	'nzgexpansion:hunting_rifle',
	'nzgexpansion:hunting_shotgun',
	'nzgexpansion:revolver',
	'nzgexpansion:micro_smg',
	'nzgexpansion:submachine_gun',
	'nzgexpansion:heavy_assault_rifle',
	'nzgexpansion:battle_rifle',
	'nzgexpansion:sniper_rifle',
	'cgm:pistol',
	'cgm:shotgun',
	'cgm:rifle',
	'cgm:grenade_launcher',
	'cgm:bazooka',
	'cgm:mini_gun',
	'cgm:assault_rifle',
	'cgm:machine_pistol',
	'cgm:heavy_rifle',
	'firstaid:morphine',
	'majruszsdifficulty:bandage',
	'majruszsdifficulty:golden_bandage',
	'cgm:basic_bullet',
	'nzgexpansion:medium_bullet',
	'cgm:shell',
	'cgm:grenade',
	'cgm:missile',
	'cgm:advanced_bullet',
	'cgm:stun_grenade',
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