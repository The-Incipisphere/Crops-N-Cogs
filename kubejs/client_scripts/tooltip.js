ItemEvents.tooltip(event => {
    // Denote broken stuff.
    global.problematicBlocksAndItems.forEach((value, key)=>{
        event.addAdvanced(key, (itemStack, _isAdvanced, text) => {
            if (!event.shift) {
                text.add(1, Text.red(`This ${itemStack.isBlock?"block":"item"} is currently broken.`));
                text.add(2, Text.red("Hold SHIFT for more details."));
            } else {
                value.forEach((item, index) =>{
                    text.add(index + 1, Text.red(item));
                });
            }
        });
    });
    // Denote controller blocks.
    global.multiblockControllerBlocks.forEach(element => {
        event.add(element, Text.darkRed("Multiblock Controller Block."));
        event.add(element, Text.darkRed("Internal use only."));
    });
});