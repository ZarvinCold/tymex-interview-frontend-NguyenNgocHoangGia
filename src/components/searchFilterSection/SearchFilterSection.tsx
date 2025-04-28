import React from "react";

import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import {
  GradientButton,
  GradientSlider,
  SectionWrapper,
  Label,
  ButtonRow,
  TransparentInput,
  TransparentSelect,
} from "./SearchFilterSection.styled";
import { useSearchFilterStore } from "../../store/useSearchFilterStore";
import TierSelect from "./TierSelect";
import ThemeSelect from "./ThemeSelect";

const { Option } = TransparentSelect;

const SearchFilterSection: React.FC = () => {
  const search = useSearchFilterStore((state) => state.search);

  const price = useSearchFilterStore((state) => state.price);

  const time = useSearchFilterStore((state) => state.time);

  const priceSort = useSearchFilterStore((state) => state.priceSort);

  const setOptions = useSearchFilterStore((state) => state.setOptions);
  const handleReset = useSearchFilterStore((state) => state.reset);

  return (
    <SectionWrapper>
      <div>
        <TransparentInput
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setOptions({search: e.target.value})}
        />
      </div>

      <div>
        <Label>Price Range</Label>
        <GradientSlider
          range
          min={0}
          max={100}
          value={price}
          onChange={(price) => setOptions({price})}
        />
      </div>

      <TierSelect />
      <ThemeSelect />
      
      <div>
        <Label>Time</Label>
        <TransparentSelect
          placeholder="Select time"
          value={time}
          onChange={(time) => setOptions({time})}
        >
          <Option value="">All</Option>
          <Option value="24h">Last 24 hours</Option>
          <Option value="7d">Last 7 days</Option>
          <Option value="30d">Last 30 days</Option>
        </TransparentSelect>
      </div>
      <div>
        <Label>Sort by Price</Label>
        <TransparentSelect
          placeholder="Sort by price"
          value={priceSort}
          onChange={(priceSort) => setOptions({priceSort})}
        >
          <Option value="">None</Option>
          <Option value="asc">Low to High</Option>
          <Option value="desc">High to Low</Option>
        </TransparentSelect>
      </div>
      <ButtonRow>
        <GradientButton icon={<ReloadOutlined />} onClick={handleReset}>
          Reset
        </GradientButton>
        <GradientButton type="primary">Search</GradientButton>
      </ButtonRow>
    </SectionWrapper>
  );
};

export default SearchFilterSection;
