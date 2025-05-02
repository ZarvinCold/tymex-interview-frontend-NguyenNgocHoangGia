import { Fragment } from "react";
import {
  Tags,
  Card,
  SearchFilterSection,
  CardSkeleton,
  GradientButton,
} from "components";

import { StyledCardsWrapper, StyledContentWrapper } from "./index.styled";
import { useProductsQuery } from "pages/overview/useProductsQuery";

export default function OverviewPage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductsQuery();

  return (
    <>
      <SearchFilterSection />
      <StyledContentWrapper>
        <Tags />
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
              {group.products?.map((product) => (
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
            </Fragment>
          ))}
        </StyledCardsWrapper>
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
      </StyledContentWrapper>
    </>
  );
}
