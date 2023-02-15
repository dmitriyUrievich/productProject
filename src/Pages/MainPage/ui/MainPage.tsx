import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('cydyd')}
            {t('Главная')}
        </div>
    );
};

export default MainPage;
