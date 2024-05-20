import { Box, Heading, Text, Grid, GridItem, Image, Flex, Stack, SimpleGrid } from '@chakra-ui/react';
import sun from "../assets/sun.png"
import soil from "../assets/soil.png"
import tomato from "../assets/tomato.jpg"
import temperature from "../assets/temperature.png"
import rain from "../assets/rain.png"


const Home = () => {

    const getDate = () => {
        const today = new Date();

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const dayOfWeek = daysOfWeek[today.getDay()];
        const day = today.getDate();
        const month = monthsOfYear[today.getMonth()];
        const year = today.getFullYear();

        return `${dayOfWeek} ${day} ${month}, ${year}`;
    }
    return (
        <>

            <Grid
                h='100%'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={7}
            >
                <GridItem colSpan={4} bg='papayawhip' borderRadius="1rem" shadow='md' p="5" >
                    <Flex direction="column" h="100%" bg="" gap="4">
                        <Flex align="center" gap="3" flex="5">
                            <Box boxSize="5rem" borderRadius="50%" overflow="hidden">
                                <Image
                                    src={tomato}
                                    w="100%"
                                    h="100%"
                                    style={{ "object-fit": "cover" }}
                                />
                            </Box>
                            <Stack spacing={0}>
                                <Heading size='md'>
                                    Tomato
                                </Heading>
                                <Text fontSize='md' color="#33684e">{getDate()}</Text>
                            </Stack>
                        </Flex>

                        <SimpleGrid columns={3} spacing='4' bg="" flex="8">
                            <Flex bg='white' borderRadius="lg" align="center" direction="column" justifyContent="space-around" p="3" gap="3">
                                <Box w={["80%", null, "20%"]}>
                                    <Image src={rain} />
                                </Box>
                                <Stack align="center" spacing="0">
                                    <Heading as="h3">72%</Heading>
                                    <Text>Soil Moisture</Text>
                                </Stack>

                            </Flex>
                            <Flex bg='white' borderRadius="lg" align="center" direction="column" justifyContent="space-around" p="3" gap="3">
                                <Box w={["80%", null, "20%"]}>
                                    <Image src={soil} />
                                </Box>
                                <Stack align="center" spacing="0">
                                    <Heading as="h3">72%</Heading>
                                    <Text>Soil Moisture</Text>
                                </Stack>

                            </Flex>
                            <Flex bg='white' borderRadius="lg" align="center" direction="column" justifyContent="space-around" p="3" gap="3">
                                <Box w={["80%", null, "20%"]}>
                                    <Image src={sun} />
                                </Box>
                                <Stack align="center" spacing="0">
                                    <Heading as="h3">72%</Heading>
                                    <Text>Soil Moisture</Text>
                                </Stack>

                            </Flex>
                        </SimpleGrid>
                    </Flex>
                </GridItem>
                {/* <GridItem colSpan={2} bg='papayawhip' borderRadius="1rem" /> */}
                <GridItem colSpan={2} bg='papayawhip' borderRadius="1rem" shadow='md' />


                <GridItem colSpan={2} bg='papayawhip' borderRadius="1rem" shadow='md' />

            </Grid>


        </>

    );
};

export default Home;
