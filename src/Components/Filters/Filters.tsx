import { RestartAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid,
    Paper,
    TextField,
    InputLabel,
    Select,
    FormControl,
    MenuItem,
    Button,
    Box,
    IconButton,
    InputAdornment,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { countries } from '../Header/data';
import {
    selectSearchQuery,
    selectCountry,
    setDateFrom,
    setDateTo,
    resetDates,
    changedSearchQuery,
    changeCountry,
    changeDateFrom,
    changeDateTo,
    resetSearchQuery,
} from '../Slices/newsFilterSlice';
import { grey } from '@mui/material/colors';
import { Close } from '@mui/icons-material';

export default function Filters() {
    const dispatch = useDispatch();
    const searchQuery = useSelector(selectSearchQuery);
    const setCountry = useSelector(selectCountry);
    const selectDateFrom = useSelector(setDateFrom);
    const selectDateTo = useSelector(setDateTo);

    function onChangeSearchQuery(e) {
        dispatch(changedSearchQuery(e.target.value));
    }

    function onChangeCountry(e) {
        dispatch(changeCountry(e.target.value));
    }

    function onChangeDateFrom(value) {
        const date = new Date(Date.parse(value)).toISOString().slice(0, 19) + 'Z';
        dispatch(changeDateFrom(date));
    }
    function onChangeDateTo(value) {
        const date = new Date(Date.parse(value)).toISOString().slice(0, 19) + 'Z';
        dispatch(changeDateTo(date));
    }

    return (
        <Grid item xs={12}>
            <Paper
                sx={{
                    p: 1,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-around',
                    backgroundColor: grey[100],
                }}
            >
                <FormControl variant="standard" sx={{ maxWidth: 170, marginBottom: 1 }}>
                    <InputLabel id="label">Страна</InputLabel>
                    <Select
                        labelId="standard-label"
                        id="select-standard"
                        value={setCountry}
                        onChange={onChangeCountry}
                        label="Страна"
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.value}>
                                {country.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    id="standard-basic"
                    label="Поиск новости..."
                    variant="standard"
                    value={searchQuery}
                    onChange={onChangeSearchQuery}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={() => dispatch(resetSearchQuery())}>
                                    <Close />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />

                <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="От"
                            sx={{ mt: 1 }}
                            value={selectDateFrom}
                            onChange={onChangeDateFrom}
                            renderInput={(params) => <TextField {...params} />}
                        />

                        <DatePicker
                            sx={{ marginLeft: 2, mt: 1 }}
                            label="До"
                            value={selectDateTo}
                            onChange={onChangeDateTo}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <Button onClick={() => dispatch(resetDates())}>
                        <IconButton>
                            <RestartAlt color="primary" />
                        </IconButton>
                    </Button>
                </Box>
            </Paper>
        </Grid>
    );
}
