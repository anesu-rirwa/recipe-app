'use client'

import React, {useState, useEffect} from 'react'
import { getRecipes } from '@/utils/functions';
import { Box, Heading, SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import RecipeCard from '@/components/Recipes/card';
import SearchInput from '@/components/Recipes/input';

const page = () => {
    const [foodRecipes, setFoodRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState("");
    const [searchQuery, setSearchQuery] = useState("chicken");

    // run getRecipesFunction whenever searchQuery changes

    useEffect(() => {
        // getRecipes is an async function, so we need to use .then to get the data from the promise 
        getRecipes(searchQuery).then(data => {
            setFoodRecipes(data.hits);
        })
    }, [searchQuery]);

    return (
        <>
            <Box mt={10}>
                <Heading textAlign={'center'}>Recipe Finder</Heading>
            </Box>

            <Box mt={10}>
                <SearchInput searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} setSearchQuery={setSearchQuery}/>
            </Box>

  
            <SimpleGrid columns={[1, 2, 3]} spacing='4rem' mt={20}>
                {foodRecipes.map((recipes, index) => {
                    return (
                        <RecipeCard key={index} recipes={recipes} />
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default page