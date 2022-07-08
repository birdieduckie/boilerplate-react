import { FC } from 'react'

interface AppProps {
  num: number
}

const abc = 'jjjsj'

export const App: FC<AppProps> = ({ num }) => (
  <div>
    Total Number: {num}, {abc}
    {'123'}
  </div>
)
