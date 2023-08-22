'use client'
import React, { FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './EntryCard'
import { Status } from '@/interfaces'
import { EntriesContext } from '@/context/entries'

interface Props {
  status: Status
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  )

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((item) => (
            <EntryCard key={item._id} entry={item} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
