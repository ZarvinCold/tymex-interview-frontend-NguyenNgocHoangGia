import { memo } from "react";
import { fetchTiers } from "services/filter";
import { Label, TransparentSelect } from "./SearchFilterSection.styled";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "store/useStore";

const { Option } = TransparentSelect;

function TierSelect() {
  const tier = useStore((state) => state.searchOptions.tier);
  const setOptions = useStore((state) => state.setOptions);

  const { data: tiers } = useQuery({
    queryKey: ["tiers"],
    queryFn: fetchTiers,
    select: (res) => res.tiers,
    staleTime: Infinity,
  });

  return (
    <div>
      <Label>Tier</Label>
      <TransparentSelect
        placeholder="Select tier"
        value={tier}
        onChange={(tier) => setOptions({ tier })}
      >
        {tiers?.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </TransparentSelect>
    </div>
  );
}

export default memo(TierSelect);
