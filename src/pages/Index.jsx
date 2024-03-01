import { Box, Button, Container, Flex, Heading, Input, Spacer, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { FaCalculator, FaSyncAlt, FaUsers } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [primeNumber, setPrimeNumber] = useState(null);
  const toast = useToast();

  const calculateMersennePrime = () => {
    // Dummy function to simulate prime calculation
    setIsCalculating(true);
    setTimeout(() => {
      // This is a placeholder for an actual prime number calculation
      const newPrime = "2^31-1"; // This is an actual Mersenne prime for demonstration
      setPrimeNumber(newPrime);
      setIsCalculating(false);
      toast({
        title: "Calculation Complete",
        description: `New Mersenne prime found: ${newPrime}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 3000);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Mersenne Prime Generator
        </Heading>
        <Text fontSize="lg">Connect and compute together to find new Mersenne primes automatically.</Text>
        <Flex w="full" alignItems="center" justify="space-between">
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="outline">
            Connect
          </Button>
          <Spacer />
          <Button isLoading={isCalculating} loadingText="Calculating" leftIcon={<FaCalculator />} colorScheme="blue" onClick={calculateMersennePrime}>
            Calculate Prime
          </Button>
          <Spacer />
          <Button leftIcon={<FaSyncAlt />} colorScheme="orange" variant="outline">
            Auto Generate
          </Button>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <Input placeholder="Enter exponent value" w={64} />
          <Button colorScheme="green" leftIcon={<FaCalculator />}>
            Calculate
          </Button>
        </Stack>
        {primeNumber && (
          <Box mt={10} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg">
              Latest Mersenne Prime
            </Heading>
            <Text mt={2} fontSize="xl" fontWeight="bold">
              {primeNumber}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
