import { fetchData } from "services/restClient";

type TierResponse = {
    tiers: string[];
}

type ThemeResponse = {
    themes: string[];
}

export const fetchTiers = async () => {
    return await fetchData<TierResponse>(`/tiers`);
};

export const fetchThemes = async () => {
    return await fetchData<ThemeResponse>(`/themes`);
}