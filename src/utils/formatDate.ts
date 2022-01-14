import {formatDistance} from 'date-fns'
import ruLang from 'date-fns/locale/ru'

export const formatDate = (date: Date): any => {
    return formatDistance(
        date,
        new Date,
        {locale: ruLang}
    )
}