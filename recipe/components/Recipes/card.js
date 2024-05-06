'use client'

import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart, BsShare } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RecipeCard({recipes}) {
    const router = useRouter();

    const handleRecipeClick = (uri) => {
      const id = uri.split('#')[1]; // Extract recipe ID from URI
      
      router.push(`/recipes/${id}`);
    };

  return (
    <Center py={{base: 2, sm: 3, lg: 6}} width={'100%'}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 gray', '6px 6px 0 cyan')}>
        
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={recipes.recipe.image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={recipes.recipe.label}
          />
        </Box>

        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              {recipes.recipe.dietLabels[0]}
            </Text>
          </Box>
          
          <Heading color={'gray.900'} fontSize={'2xl'} noOfLines={1}>
            {recipes.recipe.label}
          </Heading>
          
          <Text color={'gray.600'} noOfLines={2}>
            {recipes.recipe.calories.toFixed(0)} Calories
          </Text>
        </Box>
    
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
              <HStack>
                  <Text fontSize={'md'} fontWeight={'semibold'}>
                  View Recipe
                  </Text>
              
                  <button onClick={() => handleRecipeClick(recipes.recipe.uri)}>{recipes.recipe.label}</button>

                  <BsArrowUpRight fontSize={'24px'} />
              </HStack>
            </Flex>
    
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            >
              <Link href={recipes.recipe.shareAs}>
                <BsShare fontSize={'24px'} />
              </Link>
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}