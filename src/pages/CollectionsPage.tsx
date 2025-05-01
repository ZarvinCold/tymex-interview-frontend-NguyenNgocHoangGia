import React from "react";
import { Card, GradientButton, StyledMPFLex } from "components";
import { StyledCardsWrapper } from "pages/overview/index.styled";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCollections, ProductResponse } from "services/product";
import CardSkeleton from "components/card/CardSkeleton";

export default function CollectionsPage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<ProductResponse>({
    queryKey: ["collections"],
    queryFn: () => fetchCollections({}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page === lastPage.totalPages) return undefined;
      return allPages.length + 1;
    },
    staleTime: Infinity,
  });

  const products = data?.pages?.flatMap((page) => page.products) || [];

  if (isLoading) {
    return (
      <StyledCardsWrapper>
        {[...Array(8)].map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
      </StyledCardsWrapper>
    );
  }

  if (isError) {
    return <div>Failed to load products.</div>;
  }

  return (
    <StyledMPFLex $fullWidth vertical>
      {products.length === 0 ? (
        <div>No favorited products found.</div>
      ) : (
        <StyledCardsWrapper>
          {products.map((product) => (
            <Card
              key={`product-card-${product.id}`}
              imageId={product.imageId}
              title={product.title}
              category={product.category || product.theme || ""}
              price={product.price + "" || ""}
              creator={product.author?.email || ""}
              creatorAvatar={product.author?.avatar || ""}
              liked
            />
          ))}
        </StyledCardsWrapper>
      )}
      {hasNextPage && (
        <div style={{ textAlign: "center", margin: "24px 0" }}>
          <GradientButton
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "View more"}
          </GradientButton>
        </div>
      )}
    </StyledMPFLex>
  );
}
