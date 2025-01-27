global.multiblockControllerBlocks.forEach(element => { // Cancel block placement events if the block is a controller block.
    BlockEvents.placed(element, event => {
        event.server.runCommand("/immersivemessages sendcustom "+event.player.username+" {y:150} 3 Multiblock Controllers are not meant to be placed by players!")
        event.cancel();
    }); 
});