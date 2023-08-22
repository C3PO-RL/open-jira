'use client'
import React, { useContext, useState } from 'react'
import { AddCircleOutline, SaveOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { EntriesContext } from '@/context/entries'

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)
  const { addNewEntry } = useContext(EntriesContext)

  const onTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
    setIsAdding(false)
    setTouched(false)
    setInputValue('')
  }
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New Entry'
            autoFocus
            multiline
            label='New Entry'
            helperText={
              inputValue.length <= 0 && touched
                ? 'This field is required'
                : 'Type here'
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setTouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='text'
              color='secondary'
              onClick={() => setIsAdding(false)}
            >
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutline />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAdding(true)}
        >
          Add new entry
        </Button>
      )}
    </Box>
  )
}
