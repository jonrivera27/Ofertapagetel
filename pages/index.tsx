import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import { Oferta } from '@/components/Oferta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const ofertas = [
    {
      id: 1,
      md: 12,
      title: 'Mesa auxiliar redonda',
      tilee: 'Mesa circular de metal con bandeja superior.',
      price:'$1,239',
      priceDisccount: '$567'
    
    },
    {
      id: 2,
      md: 12,
      title: 'Amazon Basics - Cubrecolchón',
      tilte: 'Cubrecolchón alternativo al plumón con carcasa de algodón.',
      price:'$1,129',
      priceDisccount: '$859'
    },
    {
      id: 3,
      md: 12,
      title: 'MICHAEL KORS Bolso Tote',
      titlee: 'Colección Eva elaborado en material sintético color café con estampado monogram.',
      price: '$8,990',
      priceDisccount: '$4,495'
    },
    {
      id: 4,
      md: 12,
      title: 'FILA Tenis casuales ',
      tilee: '.',
      price:'$2,339',
      priceDisccount: '$1199'
    },
    {
      id: 5,
      md: 6,
      title: 'Blusa casual Weekend  ',
      tilee: '.',
      price:'339',
      priceDisccount: '119'
    },
    {
      id: 6,
      md: 6,
      title: 'Maleta de viaje CLOE Lubanzi mediana',
      tilee: '',
      price:'$5,299',
      priceDisccount: '$3,709'
    },
    {
      id: 7,
      md: 6,
      title: 'Sandalias Westies ',
      tilee: '.',
      price:'2299',
      priceDisccount: '919'
    },
    {
      id: 8,
      md: 6,
      title: 'Ron Atlantico Reserva',
      tilee: '',
      price:' 989',
      priceDisccount: '593'
    }
  ]


  return (
    <>
      <Head>
        <title>Ofertas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Menu></Menu>
        <Banner></Banner>
        <p>
        </p>

        <div className="container-fluid">
          <div className="row">
         
            { ofertas.map(oferta => {
              return <Oferta key={oferta.id} md={oferta.md} title={oferta.title} ></Oferta>;
            })}

          </div>
        </div>
      </main>
    </>
  )
}
