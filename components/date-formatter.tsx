import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {/* {format(date, 'LLLL	d, yyyy')} */}
      {format(new Date(date), 'yyyy-MM-dd')}
    </time>
  )
}

export default DateFormatter
