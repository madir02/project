import i18next from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
    </div>
  );
};

export default App;
