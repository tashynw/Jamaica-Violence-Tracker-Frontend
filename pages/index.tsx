import {
  Heading,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Spacer,
  Select,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import NavigationBar from "@/components/Navbar";
import ArticleBox from "@/components/ArticleBox";
import axios from "@/local-api/axios";
import { SearchIcon } from "@chakra-ui/icons";
import { Article } from "@/modules/Article";

type Props = {
  articles: Article[];
  country: string;
};

export default function Home({ articles }: Props) {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();

  return (
    <>
      <VStack w="100%" alignItems="flex-start" gap={10}>
        <HStack
          w="100%"
          alignItems={["flex-start", "flex-start", "center"]}
          flexDir={["column", "column", "row"]}
        >
          <Heading size="md">Current Jamaican News</Heading>
          <Spacer />
          <Box bgColor="white" borderRadius={5}>
            <Select>
              <option value="JA">Jamaica</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="GY">Guyana</option>
              <option value="SV">St. Vincent and the Grenadines</option>
              <option value="BB">Barbados</option>
            </Select>
          </Box>
        </HStack>

        <InputGroup>
          <InputLeftAddon
            pointerEvents="none"
            bg="white"
            borderColor="gray.200"
            borderRight="none"
          >
            <SearchIcon color="black" />
          </InputLeftAddon>
          <Input
            type="search"
            bg={"white"}
            borderColor="gray.200"
            borderLeft="none"
            placeholder="Search for article"
            rounded="md"
            width={["sm", "sm", "80%"]}
            onChange={(e) => {
              const searchInput = e.target.value;
              const filteredResults = articles?.filter((article) =>
                article?.text
                  ?.toLowerCase()
                  .includes(searchInput?.toLowerCase())
              );
              setFilteredArticles(filteredResults);
            }}
          />
        </InputGroup>
        {(filteredArticles ?? articles) &&
        (filteredArticles ?? articles).length > 0 ? (
          <SimpleGrid columns={[1, 2, 3]} gap={5} spacing={5} w="100%">
            {(filteredArticles ?? articles).map(
              (article: any, index: number) => {
                return <ArticleBox key={index} article={article} />;
              }
            )}
          </SimpleGrid>
        ) : (
          <Box w="100%">
            <Center w="100%">
              <Alert
                status="info"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <AlertIcon />
                No results were found. Clear the input to reset.
              </Alert>
            </Center>
          </Box>
        )}
      </VStack>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavigationBar>{page}</NavigationBar>;
};

export async function getServerSideProps(context: any) {
  const { data } = await axios.get(`/`);

  return {
    props: {
      country: "Jamaica",
      articles: data,
    },
  };
}
