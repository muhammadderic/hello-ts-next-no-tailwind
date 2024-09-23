import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      p="2"
      mb="3"
      className={styles.header}
    >
      <Flex>
        <Box flexGrow="1" p="2">
          <Link href="/">
            <Heading highContrast>
              Pokemon Deck Builder
            </Heading>
          </Link>
        </Box>

        <Flex gap="2">
          <form>
            <Button size="3" type="submit">
              Sign out
            </Button>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header
