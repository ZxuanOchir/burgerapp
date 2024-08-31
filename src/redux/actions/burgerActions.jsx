export const addIngredient = ortsNer => {
    return {
        type : "ADD_INGREDIENT",
        ortsNer : ortsNer
    }
}

export const removeIngredient = ortsNer => {
    return {
        type : "REMOVE_INGREDIENT",
        ortsNer : ortsNer
    }
}