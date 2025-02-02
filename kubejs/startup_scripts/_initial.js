// priority: 999
//! This script loads first before ALL other startup scripts
// put your util or patches here so that you can access them at other scripts

// A Map of blocks/items that are not functioning as intended.
// Key: The Id of the broken/bugged/problematic block/item.
// Value: A short reason of the issues that the block/item is causing. MUST be an Array. Each element of the array is placed on a new line.
global.problematicBlocksAndItems = new Map([
    // Template to denote less-than-functional items:
    /*[
        'modname:problematicblockoritem', 
        [
            "Reason (line 1)",
            "Reason (line 2)",
            "Reason (line 3)",
            "..."
        ]
    ]*/
]);

// An Array of all multiblock controller blocks. Define them here, for use in all other scripts.
global.multiblockControllerBlocks = [
    "mbd2:cobblestone_furnace"
]