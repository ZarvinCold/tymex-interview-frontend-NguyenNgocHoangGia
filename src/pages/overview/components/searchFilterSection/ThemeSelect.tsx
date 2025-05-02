import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchThemes } from "services/filter";
import { useStore } from "store/useStore";
import { Label, TransparentSelect } from "./SearchFilterSection.styled";

const { Option } = TransparentSelect;

function ThemeSelect() {
  const theme = useStore((state) => state.searchOptions.theme);
  const setOptions = useStore((state) => state.setOptions);

  const { data: themes } = useQuery({
    queryKey: ["themes"],
    queryFn: fetchThemes,
    select: (res) => res.themes,
    staleTime: Infinity,
  });

  return (
    <div>
      <Label>Theme</Label>
      <TransparentSelect
        placeholder="Select theme"
        value={theme}
        onChange={(theme) => setOptions({ theme })}
      >
        {themes?.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </TransparentSelect>
    </div>
  );
}

export default memo(ThemeSelect);
