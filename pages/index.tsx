import { AxiosResponse } from 'axios';
import Content from '../components/Homepage/Content';
import Header from '../components/Homepage/Header';
import { getCurated } from '../lib/pexels';

interface Props {
  pexelCurated?: Object
}

export default function Home({ pexelCurated }: Props) {
  return (
    <>
      <Header />
      <Content data={pexelCurated}/>
    </>
  )
}

export async function getServerSideProps() {
  try {
      const res: AxiosResponse = await getCurated();

      return {
          props: { pexelCurated: res.data }
      }
  } catch(err) {
      return {
          props: { pexelCurated: null }
      }
  }
}