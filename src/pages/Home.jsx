import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Home = () => {
  // Placeholder data for photos
  const photos = [
    { id: 1, src: "https://via.placeholder.com/300", caption: "Photo 1" },
    { id: 2, src: "https://via.placeholder.com/300", caption: "Photo 2" },
    { id: 3, src: "https://via.placeholder.com/300", caption: "Photo 3" },
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {photos.map((photo) => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.src} alt={photo.caption} />
            <Box p={2}>
              <Text>{photo.caption}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;