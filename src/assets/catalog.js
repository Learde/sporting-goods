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
    description: 'Вы извините, что такую фигню в описании писать буду, не знаю, что сюда вставлять. Очень классный футбольный мяч, за тысячу рублей, фоточку нашел всего одну. Можно пинать, подбрасывать и прочие прелести мячей'

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
    description: 'Ну китайские есть китайские. Цену я только выставил слишком большую, но будем считать, что китайцы обнаглели :)'
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
    description: 'Клюшка хоккейная, крепкая, увесистая в меру, много фоточек, не очень дорого, в общем рекомендую'
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
    description: 'Хотелось бы когда-нибудь покататься на лыжах. Но пока такой возможности нет. Зато вам предоставляю возможность купить эти великолепные лыжи'
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
    description: 'Волейбольный классный и очень дорогой мячик для игры (неожиданно) в волейбол. Мне нравится играть в волейбол, а вам?'
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
    description: 'Беговые лыжи. Не представляю как в них бегать вообще, но наверное потому на спортмастере много горных лыж и всего одни беговые'
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
    description: 'Кроссовки найк, еще и по цене более низкой, чем китайские. Ну я считаю отличное предложение, надо брать'
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
    description: 'В отличии от кроссовок nike и китайский, эти подороже, наверное получше, но это не точно. Никогда не носил фирму пума, рекомендовать не могу'
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
    description: 'Дешевые кроссовки от нашей отечественной фирмы, которой владеет спортмастер. А еще их много в наличии'
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
    description: 'Мячик для занятий фитнесом. Я лично использовал когда-то, чтобы удобно укачивать сестру. Правда работало, засыпала. Определенно рекомендую'
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
    description: 'Мячик детский.. У меня такой в детстве раннем был. А потом он лопнул, мне купили новый, а я боялся на нем прыгать, думал, что он как бахнет. Страшная штука'
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
    description: 'Мячик для массажа. Тот самый, который есть у каждого в доме, и который используют лишь дети для своих игр. Хотя может кто-то по назначению и применял'
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
    description: 'Еще раз извините за такие информативные описания товаров. Надеюсь, что это не повлияет на оценку работу). А гантели классные, мама с такими занимается'
  }
]

export default catalog;