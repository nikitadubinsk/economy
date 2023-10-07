import { IMoneyBox } from "../models/moneyBox.model";

export const mockMoneyBox: IMoneyBox[] = [
    {
        id: 1,
        name: "На телефон",
        sum: {
            plan: 15000,
            fact: 5000
        },
        date: {
            dateStart: "2023-06-01",
            dateEnd: "2023-12-31"
        }
    },
    {
        id: 2,
        name: "На подарок",
        sum: {
            plan: 1000,
            fact: 990
        },
        date: {
            dateStart: "2023-09-01",
            dateEnd: "2023-09-30"
        }
    },
    {
        id: 3,
        name: "Просто так",
        sum: {
            plan: 1000,
            fact: 990
        },
    },
]