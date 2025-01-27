global.multiblockControllerBlocks.forEach(element => { // Cancel block placement events if the block is a controller block.
    BlockEvents.placed(element, event => {
        event.player.displayClientMessage("Multiblock Controllers are not meant to be placed by players!", true);
        event.cancel();
    }); 
});