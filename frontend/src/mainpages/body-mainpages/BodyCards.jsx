import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Divider, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

// cities mongodb add ()


const BodyCards = () => {
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Click to see details
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default BodyCards


