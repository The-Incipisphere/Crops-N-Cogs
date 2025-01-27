global.multiblockControllerBlocks.forEach(element => { // Cancel block placement events if the block is a controller block.
    BlockEvents.placed(element, event => {
        event.player.displayClientMessage("Multiblock Controllers are not meant to be placed by players!", true);
        // TODO: force the player to drop the block upon placing, as cancelling the block placement event this way causes it to be a 'Ghost item'
        event.cancel();
    }); 
});