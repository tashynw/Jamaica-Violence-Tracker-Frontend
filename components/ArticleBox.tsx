import { Article } from "@/modules/Article";
import { articleCodes, countryCodes, countryColors } from "@/utils/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Heading,
  Badge,
  Divider,
  Text,
  Avatar,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  article: Article;
};

const ArticleBox = ({ article }: Props) => {
  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      gap={5}
      bg="white"
      p={5}
      borderRadius={7}
      boxShadow="md"
    >
      <HStack w="100%">
        <Badge colorScheme={countryColors[article?.countryCode]}>
          {countryCodes[article?.countryCode]}
        </Badge>
        <Spacer />
        <Link href={article?.link} isExternal>
          <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
      <Link href={article?.link} isExternal>
        <Heading size="sm" noOfLines={2}>
          {article?.text}
        </Heading>
      </Link>
      <Divider />
      <VStack w="100%" alignItems="flex-start" gap={3}>
        <Text color="gray.600">Author</Text>
        <HStack w="100%">
          <Avatar size="sm" name={articleCodes[article?.key]} />
          <Text size="sm" fontWeight="semibold">
            {articleCodes[article?.key]}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ArticleBox;
