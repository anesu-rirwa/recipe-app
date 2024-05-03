'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Show,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import chefSvgPath from '@/public/svg/chef1.svg'
import Link from 'next/link'

export default function Hero() {
  
  return (
    <Container maxW={'100vw'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', lg: 'row' }}>
        <Stack spacing={{ base: 5, md: 10 }} width={{base: '80%', lg: '40%'}} ml={{lg: 10}}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
                bg: 'green.400',
                zIndex: -1,
              }}>
              Chef's Table
            </Text>

            <br />
            
            <Text as={'span'} color={'green.400'} fontSize={'3xl'}>
                Discover, Cook, Enjoy
            </Text>
          </Heading>
          <Text color={'gray.500'}>
              Looking for culinary inspiration? Look no further! Chef's Table brings you a vast collection of mouthwatering recipes from around the globe. Whether you're a seasoned chef or just starting out, we have something for everyone.
          </Text>

          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              <HStack>
                <Link href={'/search'}>Explore Recipes</Link>
                <BsArrowRightShort />
              </HStack>
            </Button>
          </Stack>
        </Stack>

        <Flex
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'80%'}
          >
          <Show above='md'>
            <Blob
              w={'90%'}
              h={'170%'}
              position={'absolute'}
              top={'-33%'}
              left={10}
              zIndex={-1}
              color={useColorModeValue('green.100', 'green.400')}
            />
          </Show>
          <Box
            position={'relative'}
            height={{ base: '17.75rem', sm: '21.75rem', md: '23.75rem' }}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={{ base: '100%', md: '90%', lg: '80%'}} 
            overflow={'hidden'}>

            <Image
              alt={'Hero Image'}
              src={chefSvgPath}
              layout={'fill'}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

const Blob = (props) => {
  return (
    <Icon
      width={'80%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}