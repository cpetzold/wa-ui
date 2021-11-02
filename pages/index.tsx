import { Box, Button, Flex, Frame, Heading, Text } from "../src";

import Head from "next/head";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>W:A UI</title>
      </Head>

      <Flex
        sx={{
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "start",
          padding: "large",
          gap: "large",
        }}
      >
        <Heading size="large">Large Heading</Heading>
        <Heading>Medium Heading</Heading>
        <Button>Normal Button</Button>
        <Button disabled>Disabled Button</Button>

        <Frame title="Hello">Hello world</Frame>
      </Flex>
    </Box>
  );
};

export default Index;
