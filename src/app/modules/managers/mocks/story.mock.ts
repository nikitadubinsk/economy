import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';

export const mockManagerStories: IStoryManagerInfo[] = [
  {
    id: 1,
    title: 'Что такое финансовая грамотность?',
    img: 'https://bfmspb.ru/common/htdocs/upload/fm/News/35c8a5e3ba6ac5ea82e4f0970046bf1109f88a75-3000-1500.jpg',
    weight: 1,
    category: {
      id: 1,
      name: '6-12',
    },
    createdAt: '2023-03-16',
    active: true,
  },
  {
    id: 2,
    title: 'Что такое деньги?',
    img: 'https://static17.tgcnt.ru/posts/_0/5b/5bf6596675cfef41d94ef1c1ed3cd22a.jpg',
    weight: 2,
    category: {
      id: 1,
      name: '6-12',
    },
    createdAt: '2023-03-16',
    active: false,
  },
];

export const mockManagerChapters: IManagerChapter[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at commodo quam. Aliquam id lorem sed felis iaculis suscipit eget sit amet augue. Suspendisse dapibus, risus at sollicitudin ullamcorper, ligula nibh volutpat tellus, a consequat nunc felis id justo. Aliquam id aliquet lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Etiam lobortis elementum leo. Vivamus dui leo, blandit id eros sed, varius fringilla nibh. Aliquam erat volutpat. Nulla sed efficitur nisi. Nam lacinia consectetur malesuada. Vestibulum ut eros porttitor, commodo nulla sit amet, pellentesque arcu. Mauris lectus nunc, gravida nec elit vitae, accumsan convallis tortor. Integer vel eros lacus. Donec elementum sit amet ipsum in posuere. Pellentesque diam justo, ultricies eget vulputate eget, suscipit at quam.',
    img: 'https://kartinki.pics/uploads/posts/2021-01/1610809626_8-p-fon-s-dengami-dlya-prezentatsii-11.jpg',
    active: false,
    createdAt: '2023-03-16',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at commodo quam. Aliquam id lorem sed felis iaculis suscipit eget sit amet augue. Suspendisse dapibus, risus at sollicitudin ullamcorper, ligula nibh volutpat tellus, a consequat nunc felis id justo. Aliquam id aliquet lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Etiam lobortis elementum leo. Vivamus dui leo, blandit id eros sed, varius fringilla nibh. Aliquam erat volutpat. Nulla sed efficitur nisi. Nam lacinia consectetur malesuada. Vestibulum ut eros porttitor, commodo nulla sit amet, pellentesque arcu. Mauris lectus nunc, gravida nec elit vitae, accumsan convallis tortor. Integer vel eros lacus. Donec elementum sit amet ipsum in posuere. Pellentesque diam justo, ultricies eget vulputate eget, suscipit at quam.',
    img: 'https://klike.net/uploads/posts/2022-11/1667546896_2-1.jpg',
    active: true,
    createdAt: '2023-03-16',
  },
];
