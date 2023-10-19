import { IChildrenStatistics } from "../models/statistics.model";

export const mockChildrenStatistics: IChildrenStatistics = {
    budget: {
        plan: 5000,
        fact: 2000
    },
    categories: [
        {
            name: 'Супермаркеты',
            percent: 30,
          },
          {
            name: 'Одежда и обувь',
            percent: 20,
          },
          {
            name: 'Образование',
            percent: 20,
          },
          {
            name: 'Культура',
            percent: 5,
          },
          {
            name: 'Другое',
            percent: 25,
          },
    ]
}