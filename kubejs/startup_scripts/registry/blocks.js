StartupEvents.registry('block', event => {
    event.create('packed_cobblestone')
        .displayName('Packed Cobblestone')
        .stoneSoundType()
        .hardness(5)
        .resistance(15)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');
    event.create('plantcrete_bricks')
        .displayName('Plantcrete Bricks')
        .stoneSoundType()
        .hardness(3)
        .resistance(4)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');
});