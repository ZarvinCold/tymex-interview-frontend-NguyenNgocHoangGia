import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Tags, Card, SearchFilterSection } from "components";
import CardSkeleton from "components/card/CardSkeleton";
import {
  StyledCardsWrapper,
  StyledContentWrapper,
  StyledOverviewPageWrapper,
} from "./index.styled";
import background from "assets/body-background.png";
import bodyBottom from "assets/body-bottom.svg";
import { fetchProducts } from "services/product";
import { IProduct } from "types";
const mockTags = [
  "Art",
  "Music",
  "Photography",
  "Collectibles",
  "Sports",
  "Virtual Worlds",
  "Trading Cards",
  "Utility",
  "Domain Names",
  "Fashion",
  "Gaming",
  "Memes",
  "DeFi",
  "Metaverse",
  "Charity",
  "Education",
  "Science",
  "Technology",
  "History",
  "Nature",
];

const OverviewPage: React.FC = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  return (
    <StyledOverviewPageWrapper
      background={background}
      bottomBackground={bodyBottom}
    >
      <SearchFilterSection />
      <StyledContentWrapper>
        <Tags tags={mockTags} />
        {isLoading && (
          <StyledCardsWrapper>
            {[...Array(8)].map((_, idx) => (
              <CardSkeleton key={idx} />
            ))}
          </StyledCardsWrapper>
        )}
        {isError && <div>Failed to load products.</div>}
        <StyledCardsWrapper>
          {products &&
            products.map((product: IProduct) => (
              <Card
                key={product.id}
                imageId={product.imageId}
                title={product.title}
                category={product.category || ""}
                price={product.price + "" || ""}
                creator={product.author.email || ""}
                creatorAvatar={product.author.avatar || ""}
              />
            ))}
        </StyledCardsWrapper>
      </StyledContentWrapper>
    </StyledOverviewPageWrapper>
  );
};

export default OverviewPage;
