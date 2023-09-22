export type productType = {
  name: string;
  unit_amount: number | null;
  id: string;
  image: string;
  description: string;
  metadata: MetadataType;
  quantity?: number | 1;
};

type MetadataType = {
  features: string;
};
