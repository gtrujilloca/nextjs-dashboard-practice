import { IoBrowsersOutline, IoCalculatorOutline, IoHeartCircleOutline, IoVideocam} from 'react-icons/io5'

export const menuItems: Array<MenuItem> = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subtitle: 'Visualize your data'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={30} />,
    title: 'Counter',
    subtitle: 'Counter page CSR'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoVideocam size={30} />,
    title: 'Pokemons',
    subtitle: 'Pokemons page SSG'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartCircleOutline size={30} />,
    title: 'Favorites',
    subtitle: 'Global state'
  },
]