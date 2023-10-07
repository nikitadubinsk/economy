import { IStory, IStoryInfo } from 'src/app/models';
import { IUserStatistics } from '../models/statistics.model';

export const mockStories: IStoryInfo[] = [
  {
    id: 1,
    title: 'Что такое финансовая грамотность?',
    isViewed: false,
    img: 'https://bfmspb.ru/common/htdocs/upload/fm/News/35c8a5e3ba6ac5ea82e4f0970046bf1109f88a75-3000-1500.jpg',
    count: 6,
  },
  {
    id: 2,
    title: 'Что такое деньги?',
    isViewed: true,
    img: 'https://static17.tgcnt.ru/posts/_0/5b/5bf6596675cfef41d94ef1c1ed3cd22a.jpg',
    count: 10,
  },
];

export const mockStory: IStory = {
  id: 1,
  title: 'Что такое финансовая грамотность?',
  isViewed: false,
  img: 'https://bfmspb.ru/common/htdocs/upload/fm/News/35c8a5e3ba6ac5ea82e4f0970046bf1109f88a75-3000-1500.jpg',
  count: 6,
  chapter: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at commodo quam. Aliquam id lorem sed felis iaculis suscipit eget sit amet augue. Suspendisse dapibus, risus at sollicitudin ullamcorper, ligula nibh volutpat tellus, a consequat nunc felis id justo. Aliquam id aliquet lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Etiam lobortis elementum leo. Vivamus dui leo, blandit id eros sed, varius fringilla nibh. Aliquam erat volutpat. Nulla sed efficitur nisi. Nam lacinia consectetur malesuada. Vestibulum ut eros porttitor, commodo nulla sit amet, pellentesque arcu. Mauris lectus nunc, gravida nec elit vitae, accumsan convallis tortor. Integer vel eros lacus. Donec elementum sit amet ipsum in posuere. Pellentesque diam justo, ultricies eget vulputate eget, suscipit at quam.',
      img: 'https://kartinki.pics/uploads/posts/2021-01/1610809626_8-p-fon-s-dengami-dlya-prezentatsii-11.jpg',
      isViewed: false,
    },
    {
      id: 2,
      img: 'https://klike.net/uploads/posts/2022-11/1667546896_2-1.jpg',
      isViewed: false,
      question: {
        text: "Что такое финансовая грамотность?",
        answers: ["Первый вариант", "Второй вариант", "Третий вариант", "Четвертый вариант"],
        correctAnswer: 2,
        answer: "На самом деле правильный ответ второй!"
      }
    },
    {
      id: 3,
      title: 'Sed quis varius lorem',
      text: 'Sed quis varius lorem. Morbi eu dictum quam. Curabitur sollicitudin est eros, et elementum metus volutpat et. Quisque bibendum commodo ex, in venenatis velit facilisis a. Nam eget ipsum ac neque ultrices dictum. Etiam vel velit ex. Etiam ac neque tincidunt, bibendum justo quis, semper metus. Ut condimentum fermentum porttitor. Quisque at tempor ante. Donec quis quam tempor, lobortis mi ullamcorper, iaculis dolor. Mauris semper sollicitudin ipsum. Cras blandit consectetur tortor sollicitudin lobortis. Maecenas quis neque eu quam faucibus consequat.',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/29317/pub_6114bfa78a1c5e1f3c9b39aa_6114cfb4c7be8a07e0f1ba21/scale_1200',
      isViewed: false,
    },
    {
      id: 4,
      title: 'Sed quis varius lorem',
      text: 'Sed quis varius lorem. Morbi eu dictum quam. Curabitur sollicitudin est eros, et elementum metus volutpat et. Quisque bibendum commodo ex, in venenatis velit facilisis a. Nam eget ipsum ac neque ultrices dictum. Etiam vel velit ex. Etiam ac neque tincidunt, bibendum justo quis, semper metus. Ut condimentum fermentum porttitor. Quisque at tempor ante. Donec quis quam tempor, lobortis mi ullamcorper, iaculis dolor. Mauris semper sollicitudin ipsum. Cras blandit consectetur tortor sollicitudin lobortis. Maecenas quis neque eu quam faucibus consequat.',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/29317/pub_6114bfa78a1c5e1f3c9b39aa_6114cfb4c7be8a07e0f1ba21/scale_1200',
      isViewed: false,
    },
    {
      id: 5,
      title: 'Sed quis varius lorem',
      text: 'Sed quis varius lorem. Morbi eu dictum quam. Curabitur sollicitudin est eros, et elementum metus volutpat et. Quisque bibendum commodo ex, in venenatis velit facilisis a. Nam eget ipsum ac neque ultrices dictum. Etiam vel velit ex. Etiam ac neque tincidunt, bibendum justo quis, semper metus. Ut condimentum fermentum porttitor. Quisque at tempor ante. Donec quis quam tempor, lobortis mi ullamcorper, iaculis dolor. Mauris semper sollicitudin ipsum. Cras blandit consectetur tortor sollicitudin lobortis. Maecenas quis neque eu quam faucibus consequat.',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/29317/pub_6114bfa78a1c5e1f3c9b39aa_6114cfb4c7be8a07e0f1ba21/scale_1200',
      isViewed: false,
    },
    {
      id: 6,
      title: 'Sed quis varius lorem',
      text: 'Sed quis varius lorem. Morbi eu dictum quam. Curabitur sollicitudin est eros, et elementum metus volutpat et. Quisque bibendum commodo ex, in venenatis velit facilisis a. Nam eget ipsum ac neque ultrices dictum. Etiam vel velit ex. Etiam ac neque tincidunt, bibendum justo quis, semper metus. Ut condimentum fermentum porttitor. Quisque at tempor ante. Donec quis quam tempor, lobortis mi ullamcorper, iaculis dolor. Mauris semper sollicitudin ipsum. Cras blandit consectetur tortor sollicitudin lobortis. Maecenas quis neque eu quam faucibus consequat.',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/29317/pub_6114bfa78a1c5e1f3c9b39aa_6114cfb4c7be8a07e0f1ba21/scale_1200',
      isViewed: false,
    },
  ],
};

export const mockUserStatistic: IUserStatistics = {
  budget: {
    plan: 5000,
    fact: 2000,
  },
  categories: [
    {
      name: 'Супермаркеты',
      sum: 555,
    },
    {
      name: 'Одежда и обувь',
      sum: 445,
    },
    {
      name: 'Образование',
      sum: 200,
    },
    {
      name: 'Культура',
      sum: 700,
    },
    {
      name: 'Другое',
      sum: 100,
    },
  ],
  days: [
    ['2023-09-01', 100],
    ['2023-09-02', 200],
    ['2023-09-03', 300],
    ['2023-09-04', 400],
    ['2023-09-05', 0],
    ['2023-09-06', 50],
    ['2023-09-07', 300],
    ['2023-09-08', 400],
    ['2023-09-09', 500],
    ['2023-09-10', 10],
    ['2023-09-11', 100],
    ['2023-09-12', 0],
  ],
};
