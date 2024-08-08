import { useDispatch } from 'react-redux';
import { changeCategory } from '../Slices/newsFilterSlice';
import { Grid, Paper, List, ListItem, Button } from '@mui/material';

import { grey } from '@mui/material/colors';
import { newsCategories } from '../Header/data';

export default function NewsCategory() {
    const dispatch = useDispatch();

    function onClick(e) {
        e.preventDefault();

        const chosenCategory = e.currentTarget.value;
        dispatch(changeCategory(chosenCategory));
    }

    return (
        <Grid item xs={12}>
            <Paper
                sx={{
                    p: 1,
                    marginTop: 2,
                    textAlign: 'center',
                    backgroundColor: grey[100],
                }}
            >
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                    }}
                >
                    {newsCategories.map((category) => (
                        <ListItem key={category.id}>
                            <Button
                                value={category.value}
                                onClick={onClick}
                                startIcon={category.icon}
                                sx={{
                                    '&:focus': {
                                        boxShadow: '0 0 0 0.2rem rgba(79, 79, 80, 0.253)',
                                    },
                                    color: grey[800],
                                    fontSize: { sm: 12, md: 10 },
                                }}
                            >
                                {category.label}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );
}
