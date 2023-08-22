'use client'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './EntryCard'
import { Status } from '@/interfaces'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'
import styles from './EntryList.module.css'

interface Props {
  status: Status
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updatEntry } = useContext(EntriesContext)
  const { isDragging, dragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  )

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text')
    const entry = entries.find((e) => e._id === id)!
    entry.status = status
    updatEntry(entry)
    dragging(false)
  }

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s' }}>
          {entriesByStatus.map((item) => (
            <EntryCard key={item._id} entry={item} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
