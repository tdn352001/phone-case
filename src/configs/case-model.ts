enum PhoneType {
  Iphone,
  Samsung,
}

type PhoneModel = {
  id: string
  name: string
  type: PhoneType
}

export const phoneModels: PhoneModel[] = [
  {
    id: '1',
    name: 'Iphone 15',
    type: PhoneType.Iphone,
  },
  {
    id: '2',
    name: 'Iphone 15 plus',
    type: PhoneType.Iphone,
  },
  {
    id: '3',
    name: 'Iphone 15 pro',
    type: PhoneType.Iphone,
  },
  {
    id: '4',
    name: 'Iphone 15 pro max',
    type: PhoneType.Iphone,
  },
  {
    id: '5',
    name: 'Samsung Galaxy S22',
    type: PhoneType.Samsung,
  },
  {
    id: '6',
    name: 'Samsung Galaxy S22 plus',
    type: PhoneType.Samsung,
  },
  {
    id: '7',
    name: 'Samsung Galaxy S22 ultra',
    type: PhoneType.Samsung,
  },
  {
    id: '8',
    name: 'Samsung Galaxy S22 note',
    type: PhoneType.Samsung,
  },
]
