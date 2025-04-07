// priority: 0
//! THIS RUNS AFTER EVERY OTHER SERVER SCRIPT, TO CATCH ANY STRAGGLERS

ServerEvents.recipes(event => {
    // Runs through every problematic block/item
    global.problematicBlocksAndItems.forEach((_value, key)=>{
        event.remove({ output: key })
    });

    // Nuke ALL the recipes!
    event.remove({ mod: 'create' });
    event.remove({ mod: 'gtceu' });
    event.remove({ mod: 'railways' });
    event.remove({ mod: 'greate' });
    event.remove({ mod: 'mekanism' });
    event.remove({ mod: 'pneumaticcraft' });
})