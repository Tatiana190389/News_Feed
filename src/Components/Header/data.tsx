import {
    ConfirmationNumber,
    MedicalInformation,
    BusinessCenter,
    DomainVerification,
    Psychology,
    SportsBaseball,
    Biotech,
} from '@mui/icons-material';

export const newsCategories = [
    { id: 1, value: 'business', label: 'БИЗНЕС', icon: <BusinessCenter /> },
    { id: 2, value: 'entertainment', label: 'РАЗВЛЕЧЕНИЯ', icon: <ConfirmationNumber /> },
    { id: 3, value: 'general', label: 'ГЛАВНЫЕ', icon: <DomainVerification /> },
    { id: 4, value: 'health', label: 'ЗДОРОВЬЕ', icon: <MedicalInformation /> },
    { id: 5, value: 'science', label: 'НАУКА', icon: <Psychology /> },
    { id: 6, value: 'sports', label: 'СПОРТ', icon: <SportsBaseball /> },
    { id: 7, value: 'technology', label: 'ТЕХНОЛОГИИ', icon: <Biotech /> },
];

export const countries = [
    { id: 1, label: 'Австралия', value: 'au', language: 'en' },
    { id: 2, label: 'Канада', value: 'ca', language: 'en' },
    { id: 3, label: 'Индия	', value: 'in', language: 'en' },
    { id: 4, label: 'Ирдандия', value: 'ie', language: 'en' },
    { id: 5, label: 'Пакистан', value: 'pk', language: 'en' },
    { id: 6, label: 'Филиппины', value: 'ph', language: 'en' },
    { id: 7, label: 'Россия', value: 'ru', language: 'ru' },
    { id: 8, label: 'Сингапур', value: 'sg', language: 'en' },
    { id: 9, label: 'Великобритания', value: 'gb', language: 'en' },
    { id: 10, label: 'США', value: 'us', language: 'en' },
];
