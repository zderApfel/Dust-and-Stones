const bullets = [
    new Bullet(
        '12g_round',
        '12-gauge Buckshot',
        'Standard-issue shotgun ammunition',
        'kubejs:item/12g'
    ),
    new Bullet(
        '9x19_round',
        '9x19 Cerebellum',
        'Standard-issue pistol cartridge',
        'kubejs:item/9x19'
    ),
    new Bullet(
        '44_round',
        '.44 Golem',
        'A heavy pistol round that packs a major punch',
        'kubejs:item/44'
    ),
    new Bullet(
        '556_round',
        '5.56x45 ILGO',
        'Standard-issue intermediate rifle cartridge',
        'kubejs:item/556'
    ),
    new Bullet(
        '76239_round',
        '7.62x39',
        "A heavier intermediate cartride that trades accuracy for power",
        'kubejs:item/76239'
    ),
    new Bullet(
        '308_round',
        '.308 Jebtester',
        'A full-power rifle cartridge used in various high-power rifles',
        'kubejs:item/308'
    ),
    new Bullet(
        '127_round',
        '12.7x99 ILGO',
        'A huge rifle cartridge created to take down dragons and lightly-armored vehicles',
        'kubejs:item/127'
    )
]

bullets.forEach(x => {
    onEvent('item.registry', event => {
        event.create(x.id).displayName(x.name).tooltip(x.tooltip).texture(x.texture).maxStackSize(64)
    })
    onEvent('item.modification', event => {
        event.modify('survive:white_washcloth', item => {
            item.maxStackSize = 64;
        }),
        event.modify('survive:stiffened_honey_boots', item => {
            item.maxDamage = 150;
        }),
        event.modify('survive:stiffened_honey_leggings', item => {
            item.maxDamage = 205;
        }),
        event.modify('survive:stiffened_honey_chestplate', item => {
            item.maxDamage = 210;
        }),
        event.modify('survive:stiffened_honey_helmet', item => {
            item.maxDamage = 120;
        }),
        event.modify('survive:wool_hat', item => {
            item.maxDamage = 44;
        }),
        event.modify('survive:wool_pants', item => {
            item.maxDamage = 69;
        }),
        event.modify('survive:wool_jacket', item => {
            item.maxDamage = 72;
        }),
        event.modify('survive:wool_boots', item => {
            item.maxDamage = 52;
        })
    })
})
