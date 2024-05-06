'use client'

import React, {useState, useEffect} from 'react'
import { getRecipes } from '@/utils/functions';
import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
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
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '5xl', lg: '6xl' }} textAlign={'center'}>
                        <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '20%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: useColorModeValue('green.300', 'green.400'),
                            zIndex: -1,
                        }}>
                            Discover Tasty Delights
                        </Text>
                </Heading>
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