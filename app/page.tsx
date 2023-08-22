import { EntryList } from '@/components/ui'
import { Status } from '@/interfaces'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='Pending' />
          <CardContent>
            <EntryList status={Status.Pending} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='Started' />
          <CardContent>
            <EntryList status={Status.InProgress} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='Done' />
          <CardContent>
            <EntryList status={Status.Finished} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomePage
