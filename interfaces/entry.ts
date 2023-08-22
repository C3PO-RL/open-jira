export enum Status {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Finished = 'InProgress',
}

export interface Entry {
  _id: string
  description: string
  createdAt: number
  status: Status
}
