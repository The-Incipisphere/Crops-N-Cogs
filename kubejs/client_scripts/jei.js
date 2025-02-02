//! Not for hiding categories! Use kubejs/assets/emi/recipe/filters/hide_categories.json instead!
JEIEvents.hideItems(event => {
    // Gregtech
    event.hide([
        // Ores
        Ingredient.of(/gtceu:.*ore/),
        Ingredient.of(/gtceu:.*indicator/),
        Ingredient.of(/gtceu:.*raw.*block/),
    ])
})