import { Card, CardContent, CardHeader, Grid } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending'></CardHeader>
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Started'></CardHeader>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done'></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
