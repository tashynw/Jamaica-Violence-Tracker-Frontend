import {
  Heading,
  SimpleGrid,
  VStack,
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
import { countryCodes } from "@/utils/Article";
import { useRouter } from "next/router";

type Props = {
  articles: Article[];
  country: string;
};

export default function Home({ articles, country }: Props) {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();
  const router = useRouter();

  return (
    <>
      <VStack w="100%" alignItems="flex-start" gap={10}>
        <HStack
          w="100%"
          alignItems={["flex-start", "flex-start", "center"]}
          flexDir={["column", "column", "row"]}
        >
          <Heading size="md">Current {countryCodes[country]} News</Heading>
          <Spacer />
          <Box bgColor="white" borderRadius={5}>
            <Select
              onChange={(e) => router.push(`/?country=${e.target.value}`)}
              defaultValue={country}
            >
              {Object.keys(countryCodes).map((countryCode) => {
                return (
                  <option value={countryCode} key={countryCode}>
                    {countryCodes[countryCode]}
                  </option>
                );
              })}
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
            width="sm"
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
          <SimpleGrid columns={[1, 2, 3]} gap={6} spacing={6} w="100%">
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
  let articleData = {};
  let countryCode = "";

  const selectedCountry = context.query.country;
  if (!selectedCountry || !(selectedCountry?.toUpperCase() in countryCodes)) {
    const { data } = await axios.get(`/articles/jm`);
    articleData = data;
    countryCode = "JM";
  } else {
    const { data } = await axios.get(`/articles/${selectedCountry}`);
    articleData = data;
    countryCode = selectedCountry;
  }

  return {
    props: {
      country: countryCode,
      articles: articleData,
    },
  };
}
