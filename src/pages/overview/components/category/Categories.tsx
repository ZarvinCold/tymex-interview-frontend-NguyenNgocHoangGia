import { useState } from "react";
import {
  StyledCategoriesWrapper,
  StyledCategory,
  StyledCollapseButton,
} from "./Categories.styled";
import { useCategoriesQuery } from "./useCategoriesQuery";
import { useStore } from "store/useStore";

const MAX_VISIBLE = 8;

interface CategoriesProps {
  onChange?: (selected: string) => void;
  maxVisible?: number;
}

export default function Categories({
  onChange,
  maxVisible = MAX_VISIBLE,
}: CategoriesProps) {
  const selectedCategory = useStore((state) => state.searchOptions.category);
  const setSelectedCategories = useStore((state) => state.setOptions);

  const { data: categories = [] } = useCategoriesQuery();

  const [collapsed, setCollapsed] = useState(true);

  const handleClick = (category: string) => {
    setSelectedCategories({ category });
    onChange?.(category);
  };

  const visibleCategories = collapsed
    ? categories?.slice(0, maxVisible)
    : categories;
  const hiddenCount = categories?.length - visibleCategories?.length;

  return (
    <StyledCategoriesWrapper>
      {visibleCategories.map((category) => (
        <StyledCategory
          key={category}
          $selected={selectedCategory === category}
          onClick={() => handleClick(category)}
        >
          {category}
        </StyledCategory>
      ))}
      {hiddenCount > 0 && collapsed && (
        <StyledCollapseButton onClick={() => setCollapsed(false)}>
          +{hiddenCount} more
        </StyledCollapseButton>
      )}
      {!collapsed && categories.length > maxVisible && (
        <StyledCollapseButton onClick={() => setCollapsed(true)}>
          Collapse
        </StyledCollapseButton>
      )}
    </StyledCategoriesWrapper>
  );
}
