import { useQuery } from "@tanstack/react-query";
import { fetchThemes } from "services/filter";
import { useSearchFilterStore } from "store/useSearchFilterStore";
import { Label, TransparentSelect } from "./SearchFilterSection.styled";

const { Option } = TransparentSelect;

export default function ThemeSelect() {
    const theme = useSearchFilterStore((state) => state.theme);
    const setOptions = useSearchFilterStore((state) => state.setOptions);

    const { data: themes } = useQuery({
        queryKey: ["themes"],
        queryFn: fetchThemes,
        select: res => res.themes,
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
    )
}