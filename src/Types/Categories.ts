export type CategoryItemList = {
  id: number;
  name: string;
  access_key_id?: number;
};


export type CategoryPost = {
  name: string
}


export type CategoryPatch = {
  id: number;
  name: string;
}