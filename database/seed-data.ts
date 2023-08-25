import { Status } from '@/interfaces'

interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  createdAt: number
  status: Status
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'initial state description 1',
      createdAt: Date.now(),
      status: Status.Pending,
    },
    {
      description: 'initial state description 2',
      createdAt: Date.now() - 1000000,
      status: Status.InProgress,
    },
    {
      description: 'initial state description 3',
      createdAt: Date.now() - 100000,
      status: Status.Finished,
    },
  ],
}
