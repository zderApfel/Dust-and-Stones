// priority: 0

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
	
	rename('cgm:workbench','Part Table')
})