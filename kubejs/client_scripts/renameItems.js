// priority: 0

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
	
	rename('beyond_earth:compressed_steel','Steel Plate')
	rename('nzgexpansion:hunting_rifle', 'Wheatfield 700')
	rename('nzgexpansion:hunting_shotgun', 'Bs-533')
	rename('nzgexpansion:revolver','V&L M469')
	rename('cgm:basic_bullet','Pistol round')
	rename('nzgexpansion:medium_bullet','Mid-Power Round')
	rename('cgm:shell','12-guage shell')
	rename('cgm:advanced_bullet','Full-Power Round')
})