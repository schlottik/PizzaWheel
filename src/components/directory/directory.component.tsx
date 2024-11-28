import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

import PizzaImage from '../../assets/pizza.jpg';
import AppetizersImage from '../../assets/appetizers.jpg';
import SaladsImage from '../../assets/salad.jpg';
import FoldoversImage from '../../assets/foldover.jpg';
import SubsImage from '../../assets/subs.jpg';
import DessertsImage from '../../assets/desserts.jpg';
import ExtrasImage from '../../assets/extras.jpg';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Pizza',
    imageUrl: PizzaImage,
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Appetizers',
    imageUrl: AppetizersImage,
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Salads',
    imageUrl: SaladsImage,
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Foldovers',
    imageUrl: FoldoversImage,
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Subs',
    imageUrl: SubsImage,
    route: 'shop/mens',
  },
  {
    id: 6,
    title: 'Desserts',
    imageUrl: DessertsImage,
    route: 'shop/mens',
  },
  {
    id: 7,
    title: 'Extras',
    imageUrl: ExtrasImage,
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
