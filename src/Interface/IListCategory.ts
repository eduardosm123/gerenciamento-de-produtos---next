export interface IListCategory {
  rows?: [id: number, name: string, access_key_id?: string] | [];
  offset: number,
  total: number
}
