type Params = {
  id: string;
};

type SearchParams = {
  name: string;
  unit_amount: number | null;
  id: string;
  description: string;
  features: string;
  image: string;
};

export type SearchParamsTypes = {
  params: Params;
  searchParams: SearchParams;
};
