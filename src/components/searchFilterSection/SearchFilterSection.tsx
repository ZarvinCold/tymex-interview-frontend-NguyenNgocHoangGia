import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import {
  GradientButton,
  GradientSlider,
  SectionWrapper,
  Label,
  ButtonRow,
  TransparentInput,
  TransparentSelect,
} from './SearchFilterSection.styled';

const { Option } = TransparentSelect;

const SearchFilterSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [tier, setTier] = useState<{ value: string; label: string }[]>();
  const [theme, setTheme] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [priceSort, setPriceSort] = useState<string>('');

  const handleReset = () => {
    setSearch('');
    setPrice([0, 100]);
    // setTier(undefined);
    // setTheme(undefined);
    // setTime(undefined);
    // setPriceSort(undefined);
  };

  return (
    <SectionWrapper>
      <div>
        <TransparentInput
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Label>Price Range</Label>
        <GradientSlider
          range
          min={0}
          max={100}
          value={price}
          onChange={setPrice}
        />
      </div>
      <div>
        <Label>Tier</Label>
        <TransparentSelect
          placeholder="Select tier"
          value={tier}
          onChange={setTier}
          dropdownStyle={{ background: 'transparent' }}
          style={{ width: '100%' }}
        >
          <Option value="bronze">Bronze</Option>
          <Option value="silver">Silver</Option>
          <Option value="gold">Gold</Option>
        </TransparentSelect>
      </div>
      <div>
        <Label>Theme</Label>
        <TransparentSelect
          placeholder="Select theme"
          value={theme}
          onChange={setTheme}
          style={{ width: '100%' }}
        >
          <Option value="light">Light</Option>
          <Option value="dark">Dark</Option>
          <Option value="colorful">Colorful</Option>
        </TransparentSelect>
      </div>
      <Row gutter={12}>
        <Col span={12}>
          <Label>Time</Label>
          <TransparentSelect
            placeholder="Select time"
            value={time}
            onChange={setTime}
            style={{ width: '100%' }}
          >
            <Option value="24h">24h</Option>
            <Option value="7d">7d</Option>
            <Option value="30d">30d</Option>
          </TransparentSelect>
        </Col>
        <Col span={12}>
          <Label>Price</Label>
          <TransparentSelect
            placeholder="Sort by price"
            value={priceSort}
            onChange={setPriceSort}
            style={{ width: '100%' }}
          >
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to Low</Option>
          </TransparentSelect>
        </Col>
      </Row>
      <ButtonRow>
        <GradientButton
          icon={<ReloadOutlined />}
          onClick={handleReset}
          type="default"
        >
          Reset Filter
        </GradientButton>
        <GradientButton type="primary">Search</GradientButton>
      </ButtonRow>
    </SectionWrapper>
  );
};

export default SearchFilterSection;
