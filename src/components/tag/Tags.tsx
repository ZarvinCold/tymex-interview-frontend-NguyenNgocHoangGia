import React, { useState, useRef } from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';
import {
  StyledTagListWrapper,
  StyledTag,
  StyledCollapseButton,
} from './Tag.styled';

interface TagsProps {
  tags: string[];
  value?: string[];
  onChange?: (selected: string[]) => void;
  maxVisible?: number;
}

const Tags: React.FC<TagsProps> = ({
  tags,
  value,
  onChange,
  maxVisible = 8,
}) => {
  const [selected, setSelected] = useState<string[]>(value || []);
  const [collapsed, setCollapsed] = useState(true);
  const handleTagClick = (tag: string) => {
    let newSelected;
    if (selected.includes(tag)) {
      newSelected = selected.filter((t) => t !== tag);
    } else {
      newSelected = [...selected, tag];
    }
    setSelected(newSelected);
    onChange && onChange(newSelected);
  };
  const visibleTags = collapsed ? tags.slice(0, maxVisible) : tags;
  const hiddenCount = tags.length - visibleTags.length;
  return (
    <StyledTagListWrapper>
      {visibleTags.map((tag) => (
        <StyledTag
          key={tag}
          $selected={selected.includes(tag)}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </StyledTag>
      ))}
      {hiddenCount > 0 && collapsed && (
        <StyledCollapseButton onClick={() => setCollapsed(false)}>
          +{hiddenCount} more
        </StyledCollapseButton>
      )}
      {!collapsed && tags.length > maxVisible && (
        <StyledCollapseButton onClick={() => setCollapsed(true)}>
          Collapse
        </StyledCollapseButton>
      )}
    </StyledTagListWrapper>
  );
};

export default Tags;
