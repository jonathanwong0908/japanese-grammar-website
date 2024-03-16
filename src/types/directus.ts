export interface DirectusCollectionResponse<T> {
  data: T | null;
}

export interface DirectusResponseWithAggregation<T> {
  data: T | null;
  meta: DirectusMeta;
}

export interface DirectusMeta {
  pagination: {
    pageCount: number;
    page: number;
    pageSize: number;
    total: number;
  };
}
