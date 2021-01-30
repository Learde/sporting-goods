const catalog = [
  {
    id: 1,
    name: 'Футбольный мяч', 
    category: 'Мячи', 
    price: 1000, 
    count: 3, 
    images: [
      'https://im0-tub-ru.yandex.net/i?id=c01b30c1ba7a8d19aa31add9ec2c8720&n=13&exp=1',
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'

  },
  {
    id: 2,
    name: 'Кроссовки китайские', 
    category: 'Обувь', 
    price: 4500, 
    count: 2, 
    images: [
      'https://im0-tub-ru.yandex.net/i?id=68c814b6265dfd61ed1cab874645bb4b&n=13&exp=1',
      'https://cdn1.ozone.ru/multimedia/1011926261.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 3,
    name: 'Хоккейная клюшка', 
    category: 'Клюшки', 
    price: 1500, 
    count: 13, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/4ef/370_416_1/37484310299.JPG',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/413/370_416_1/37484330299.JPG',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/2a3/370_416_1/37484340299.JPG'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 4,
    name: 'Горные лыжи', 
    category: 'Лыжи', 
    price: 15000, 
    count: 1, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/2d2/370_416_1/37866480299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 5,
    name: 'Волейбольный мяч', 
    category: 'Мячи', 
    price: 7500, 
    count: 4, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/470/370_416_1/32993840299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 6,
    name: 'Беговые лыжи', 
    category: 'Лыжи', 
    price: 1700, 
    count: 1, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/eae/370_416_1/25720570299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 7,
    name: 'Кроссовки Nike', 
    category: 'Кроссовки', 
    price: 4000, 
    count: 6, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/516/370_416_1/17302650299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/e5c/370_416_1/17302660299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/064/370_416_1/17302670299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 8,
    name: 'Кроссовки Puma', 
    category: 'Кроссовки', 
    price: 6500, 
    count: 2, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/3e6/370_416_1/27544130299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/0f9/370_416_1/27544140299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/df9/370_416_1/27544150299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 9,
    name: 'Кроссовки Demix', 
    category: 'Кроссовки', 
    price: 900, 
    count: 42, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/81b/370_416_1/18152050299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/958/370_416_1/18152060299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 10,
    name: 'Гимнастический мячик', 
    category: 'Мячи', 
    price: 700, 
    count: 7, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/4ed/370_416_1/33907600299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 11,
    name: 'Мяч детский', 
    category: 'Мячи', 
    price: 500, 
    count: 29, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/a4d/370_416_1/31668410299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 12,
    name: 'Мячик массажный', 
    category: 'Мячи', 
    price: 1100, 
    count: 2, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/3f6/370_416_1/12111370299.jpg'
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  },
  {
    id: 13,
    name: 'Гантель 2кг', 
    category: 'Кроссовки', 
    price: 600, 
    count: 4, 
    images: [
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/d69/370_416_1/12135390299.jpg',
      'https://cdn.sptmr.ru/upload/resize_cache/iblock/f03/370_416_1/12135400299.jpg',
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magnam eaque reprehenderit voluptatibus unde, accusantium odio tempore quis assumenda recusandae et alias explicabo perferendis nisi, totam modi. Est, doloremque quas.'
  }
]

export default catalog;