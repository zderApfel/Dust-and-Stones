// priority: 0

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
	
	rename('cgm:workbench','Gun Table')
	rename('firstaid:plaster', 'Combat Bandace')
	rename('survive:white_washcloth', 'Woolen Cloth')
	rename('majruszsdifficulty:bandage', 'Emergency Clotter')
	rename('majruszsdifficulty:golden_bandage', 'Blood Thickener')
	rename('firstaid:bandage', 'Field Surgery Kit')
})