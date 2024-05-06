import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Input, Button, Box, HStack } from '@chakra-ui/react'

const SearchInput = ({searchRecipe, setSearchRecipe, setSearchQuery}) => {
  
    return (
    <>
        <Box width={{base: '80%', md:'60%', lg: '40%'}}margin={'auto'}>
            <HStack>
                <Input
                    pr='4.5rem'
                    type={'text'}
                    value={searchRecipe}
                    onChange={(e) => setSearchRecipe(e.target.value)}
                    placeholder='chicken'
                    _focus={{ borderColor: 'green.400' }}
                />
                
                <Button bg={'green.400'} rounded={'full'} color={'white'} flex={'1 0 auto'} _hover={{ bg: 'green.500' }} _focus={{ bg: 'green.500' }}  onClick={() => setSearchQuery(searchRecipe)}>
                    <BsSearch />
                </Button>
            </HStack>
        </Box>
    </>
  )
}

export default SearchInput