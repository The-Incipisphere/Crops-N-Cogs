global.multiblockControllerBlocks.forEach(element => {
    BlockEvents.placed(element, event => event.cancel()); // Cancel block placement events if the block is a controller block.
});