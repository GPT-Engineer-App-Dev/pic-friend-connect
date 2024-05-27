import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleUpload = () => {
    // Placeholder function for uploading the photo
    console.log("Uploading", file, caption);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Upload a Photo</Text>
        <Input type="file" onChange={handleFileChange} />
        <Input
          placeholder="Enter a caption"
          value={caption}
          onChange={handleCaptionChange}
        />
        <Button colorScheme="blue" onClick={handleUpload}>
          Upload
        </Button>
      </VStack>
    </Box>
  );
};

export default Upload;