import React, { Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
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
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page === lastPage.totalPages) return undefined;
      return allPages.length + 1;
    },
    staleTime: Infinity,
  });
console.log(data?.pages);

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
          {data?.pages?.map((group, i) => (
            <Fragment key={i}>
              {group.products?.map((product) =><Card
              key={product.id}
              imageId={product.imageId}
              title={product.title}
              category={product.category || ""}
              price={product.price + "" || ""}
              creator={product.author.email || ""}
              creatorAvatar={product.author.avatar || ""}
            /> )}
            </Fragment>
            
          ))}
        </StyledCardsWrapper>
        {hasNextPage && (
          <div style={{ textAlign: "center", margin: "24px 0" }}>
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} style={{ padding: "12px 32px", borderRadius: 8, background: "#6366f1", color: "#fff", border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
              {isFetchingNextPage ? "Loading..." : "View more"}
            </button>
          </div>
        )}
      </StyledContentWrapper>
    </StyledOverviewPageWrapper>
  );
};

export default OverviewPage;
