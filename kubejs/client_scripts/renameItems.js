// priority: 0

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
	
	rename('cgm:workbench','Gun Table')
	rename('firstaid:plaster', 'Combat Bandage')
	rename('survive:white_washcloth', 'Wool Cloth')
	rename('majruszsdifficulty:bandage', 'Regen Stim')
	rename('firstaid:bandage', 'Field Surgery Kit')
	rename('survive:wool_hat', 'Cloth Hat')
	rename('survive:wool_jacket', 'Cloth Tunic')
	rename('survive:wool_pants', 'Cloth Pants')
	rename('survive:wool_boots', 'Cloth Shoes')
	rename('survive:stiffened_honey_helmet', 'Chilled Helmet')
	rename('survive:stiffened_honey_chestplate', 'Chilled Tunic')
	rename('survive:stiffened_honey_leggings', 'Chilled Pants')
	rename('survive:stiffened_honey_boots', 'Chilled Boots')
})