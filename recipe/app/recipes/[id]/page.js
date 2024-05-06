'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackTextider,
  useColorModeValue,
  List,
  ListItem,
  Divider,
  HStack,
  Tag,
  Link,
  Wrap,
  WrapItem,
  SpaceProps,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'

export default function Recipe() {
  const router = useRouter();
  //const { recipeUri } = router.query;
  const [recipeData, setRecipeData] = useState(null);
  const id = 'recipe_8d3e4b9299664a1ca8e6f5bdb8532300'

  useEffect(() => {
    const fetchRecipeData = async () => {
    try {
      const data = await fetch(`https://api.edamam.com/api/recipes/v2/recipe_8d3e4b9299664a1ca8e6f5bdb8532300?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`).then((res) => res.json());

      setRecipeData(data.recipe);
    } catch (error) {
        console.error('Error fetching recipe data:', error);
    }
    };

    fetchRecipeData();
  }, []);

  console.log(recipeData)

  const RecipeTags = (props) => {
    const { marginTop = 0, tags } = props
  
    return (
      <HStack spacing={2} marginTop={marginTop}>
        {tags.map((tag) => {
          return (
            <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          )
        })}
      </HStack>
    )
  }

const RevipeUrl = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Link fontWeight="medium" href={props.url}>{props.name}</Link>
    </HStack>
  )
}

  if (!recipeData) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container maxW={'7xl'}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          marginBottom={{base: '5%', md: 0}}
          >
          <Box
            width={{ base: '100%', md: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
            marginBottom={{base: '5%', md: 0}}
            >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }} >
              <Image
                borderRadius="lg"
                src={recipeData.image}
                alt={recipeData.label}
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <VStack align={'flex-start'}>
            <RecipeTags tags={recipeData.cuisineType} />
            <RecipeTags tags={recipeData.dietLabels} />
            <RecipeTags tags={recipeData.mealType} />
          </VStack>

          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {recipeData.label}
            </Text>
          </Heading>

          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>

          <RevipeUrl name={recipeData.source} url={recipeData.url}/>
        </Box>
      </Box>
      
      
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {recipeData.label}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Calories: {recipeData.calories}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            Textider={
              <StackTextider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                  inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

/*export async function generateStaticParams() {
  console.log('Generating static params...');
  const data = await fetch(`https://api.edamam.com/api/recipes/v2/`).then((res) => res.json());

  return {
    props: {
      recipe: data, // data is the recipe object directly
    },
  };
}
*/

/*
'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

interface IRecipeTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

interface Props {
  marginTop?: number
  tags: any[]
}

const RecipeTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface RevipeUrlProps {
  date: Date
  name: string
}

const RevipeUrl = (props: RevipeUrlProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Stories by Chakra Templates</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <RecipeTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>
          <RevipeUrl name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <RecipeTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Some blog title
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text>
            <RevipeUrl name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
  )
}

export default ArticleList
*/