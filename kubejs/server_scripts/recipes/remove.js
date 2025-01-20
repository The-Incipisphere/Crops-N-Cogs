// priority: -999
//! THIS RUNS AFTER EVERY OTHER SERVER SCRIPT, TO CATCH ANY STRAGGLERS

ServerEvents.recipes(event => {
    // Runs through every problematic block/item, and replaces 
    global.problematicBlocksAndItems.forEach((_value, key)=>{
        event.remove({output:key})
        event.shaped(
            `${key}`,
            [
                'XXX',
                'XXX',
                'XXX'
            ],
            {
                X: Item.of('minecraft:barrier', {display:{Name:'["",{"text":"RECIPE DISABLED","bold":true,"color":"dark_red"}]',Lore:['["",{"text":"PLEASE SEE THE TOOLTIP","bold":true,"color":"dark_red"}]','["",{"text":"OF THE BLOCK/ITEM THAT THIS RECIPE","bold":true,"color":"dark_red"}]','["",{"text":"POINTS TO, FOR FURTHER INFORMATION","bold":true,"color":"dark_red"}]']}})
            }
        )
    });
})