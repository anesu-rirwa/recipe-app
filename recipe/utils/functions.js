export const getRecipes = async (searchQuery) => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`)

    const data = await response.json();
    
    return data;
}