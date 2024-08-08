import { Grid, Paper, Typography } from '@mui/material';

import { blue } from '@mui/material/colors';

const colorTitle = blue[900];

export default function Header({ title }) {
    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: colorTitle }}>
                <Typography variant="h4" color="white">
                    {title}
                </Typography>
            </Paper>
        </Grid>
    );
}
