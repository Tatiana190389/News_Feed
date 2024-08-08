import { Typography, Paper, Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import {
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    VKShareButton,
    VKIcon,
} from 'react-share';
import { blue } from '@mui/material/colors';

const colorTitle = blue[900];

export default function NewsCard({ news }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const dateNews = format(new Date(news.publishedAt), 'dd/MM/yyyy');

    return (
        <Paper
            sx={{
                p: 1,
                textAlign: 'center',
                flexGrow: 1,
                backgroundColor: '#f5f5f5',
                maxHeight: { lg: '150', md: '200' },
            }}
        >
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: { isSmallScreen: 'column', md: 'row' },
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography
                            gutterBottom
                            component="div"
                            variant="body2"
                            fontSize={isSmallScreen ? 10 : 18}
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                pl: 5,
                                WebkitLineClamp: 2,
                            }}
                        >
                            {news.title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            fontSize={14}
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                pl: 5,
                                WebkitLineClamp: 1,
                            }}
                        >
                            {news.description}
                        </Typography>
                        <Link to={news.source.url} target="_blank" color={colorTitle}>
                            <Typography sx={{ cursor: 'pointer', fontSize: 12 }}>Читать полностью </Typography>
                        </Link>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { isSmallScreen: 'column', md: 'row' },
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box display="flex" flexDirection="column" marginTop={1}>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    textAlign="left"
                                    sx={{ cursor: 'pointer', fontSize: 12 }}
                                >
                                    Источник:{' '}
                                    <Link to={news.source.url} target="_blank" color={colorTitle}>
                                        {news.source.name}
                                    </Link>
                                </Typography>

                                <Typography
                                    textAlign="left"
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                    fontSize={12}
                                >
                                    Дата: {dateNews}
                                </Typography>
                            </Box>
                            <Box>
                                <TelegramShareButton url={news.source.url}>
                                    <TelegramIcon round={true} size={20} />
                                </TelegramShareButton>

                                <WhatsappShareButton url={news.source.url}>
                                    <WhatsappIcon round={true} size={20} />
                                </WhatsappShareButton>

                                <VKShareButton url={news.source.url}>
                                    <VKIcon round={true} size={20} />
                                </VKShareButton>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        {isSmallScreen ? (
                            <img display="none" />
                        ) : (
                            <Grid item lg={3}>
                                <img src={news.image} style={{ maxWidth: 180 }} alt="новость" />
                            </Grid>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}
