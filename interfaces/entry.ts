export enum Status {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Finished = 'Finished',
}

export interface Entry {
  _id: string
  description: string
  createdAt: number
  status: Status
}
