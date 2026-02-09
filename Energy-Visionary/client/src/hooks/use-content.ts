import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useI18n } from "@/lib/i18n";

export function useBusinesses() {
  const { language } = useI18n();
  return useQuery({
    queryKey: [api.content.businesses.path, language],
    queryFn: async () => {
      const res = await fetch(`${api.content.businesses.path}?lang=${language}`);
      if (!res.ok) throw new Error("Failed to fetch businesses");
      return await res.json();
    },
  });
}

export function useOffices() {
  const { language } = useI18n();
  return useQuery({
    queryKey: [api.content.offices.path, language],
    queryFn: async () => {
      const res = await fetch(`${api.content.offices.path}?lang=${language}`);
      if (!res.ok) throw new Error("Failed to fetch offices");
      return await res.json();
    },
  });
}

export function useTeam() {
  const { language } = useI18n();
  return useQuery({
    queryKey: [api.content.team.path, language],
    queryFn: async () => {
      const res = await fetch(`${api.content.team.path}?lang=${language}`);
      if (!res.ok) throw new Error("Failed to fetch team");
      return await res.json();
    },
  });
}

export function useAdvantages() {
  const { language } = useI18n();
  return useQuery({
    queryKey: [api.content.advantages.path, language],
    queryFn: async () => {
      const res = await fetch(`${api.content.advantages.path}?lang=${language}`);
      if (!res.ok) throw new Error("Failed to fetch advantages");
      return await res.json();
    },
  });
}
