JEIEvents.removeCategories(event => {
    // TODO: try and hide everything that server_scripts/recipes/removeRecipes.js couldnt catch (mostly because of hardcodedness (smh))
    console.log(event.categoryIds)
    event.remove('gtceu:multiblock_info');
    event.remove('gtceu:bedrock_fluid_diagram');
    event.remove('gtceu:arc_furnace');
});