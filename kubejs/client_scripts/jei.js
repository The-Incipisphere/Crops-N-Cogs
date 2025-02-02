JEIEvents.removeCategories(event => {
    // event.remove('gtceu:multiblock_info');
    // event.remove('gtceu:ore_processing_diagram');
    event.remove('gtceu:bedrock_fluid_diagram');
    event.remove('gtceu:arc_furnace');
    // TODO: hide everything else that server_scripts/recipes/removeRecipes.js couldnt catch
});