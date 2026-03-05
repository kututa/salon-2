export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'manicure' | 'braiding' | 'pedicure';
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Signature Gel Manicure',
    description: 'A long-lasting, high-shine gel manicure including cuticle care and a relaxing hand massage.',
    price: '$45',
    duration: '60 min',
    category: 'manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df490668711a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Bohemian Box Braids',
    description: 'Intricate, lightweight box braids with curly ends for a natural, ethereal look.',
    price: '$180+',
    duration: '4-6 hours',
    category: 'braiding',
    image: 'https://images.unsplash.com/photo-1646244439151-546050b1886c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Royal Spa Pedicure',
    description: 'The ultimate foot treatment featuring a sea salt soak, exfoliating scrub, and paraffin wax.',
    price: '$65',
    duration: '75 min',
    category: 'pedicure',
    image: 'https://images.unsplash.com/photo-1519415510236-8559b1985602?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Knotless Braids (Medium)',
    description: 'Tension-free braids that start with your natural hair for a seamless, comfortable finish.',
    price: '$220+',
    duration: '5-7 hours',
    category: 'braiding',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800'
  }
];
