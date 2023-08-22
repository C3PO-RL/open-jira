import { DragEvent, FC, useContext } from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { Entry } from '@/interfaces'
import { UIContext } from '@/context/ui'
interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { dragging } = useContext(UIContext)
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    dragging(true)
  }

  const onDragEnd = () => {
    dragging(false)
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography suppressHydrationWarning variant='body2'>
            {/* {entry.createdAt} */}
            30 minutes ago
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
