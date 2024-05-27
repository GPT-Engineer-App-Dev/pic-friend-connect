import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          PhotoShare
        </Text>
        <Spacer />
        <NavLink to="/" exact>
          {({ isActive }) => (
            <Link
              px={2}
              py={1}
              rounded="md"
              bg={isActive ? "brand.900" : "brand.700"}
              _hover={{ bg: "brand.800" }}
            >
              Home
            </Link>
          )}
        </NavLink>
        <NavLink to="/profile">
          {({ isActive }) => (
            <Link
              px={2}
              py={1}
              rounded="md"
              bg={isActive ? "brand.900" : "brand.700"}
              _hover={{ bg: "brand.800" }}
            >
              Profile
            </Link>
          )}
        </NavLink>
        <NavLink to="/upload">
          {({ isActive }) => (
            <Link
              px={2}
              py={1}
              rounded="md"
              bg={isActive ? "brand.900" : "brand.700"}
              _hover={{ bg: "brand.800" }}
            >
              Upload
            </Link>
          )}
        </NavLink>
      </Flex>
    </Box>
  );
};

export default NavBar;