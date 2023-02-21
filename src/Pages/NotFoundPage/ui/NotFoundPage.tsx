import { classNames } from 'shared/lib/className/classNames'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NoteFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NoteFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  )
}
