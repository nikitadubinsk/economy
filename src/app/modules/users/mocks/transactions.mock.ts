import { ITransaction } from "../models/transaction.model";

export const mockUserTransaction: ITransaction[] = [
    {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        sum: -50,
        date: "2023-09-11",
        category: "Супермаркеты"
    },
    {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        sum: -50,
        date: "2023-09-09",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at commodo quam. Aliquam id lorem sed felis iaculis suscipit eget sit amet augue. Suspendisse dapibus, risus at sollicitudin ullamcorper, ligula nibh volutpat tellus, a consequat nunc felis id justo.",
        category: "Супермаркеты"
    },
    {
        name: "Попоплнение",
        sum: 50,
        date: "2023-09-10",
    },
    {
        name: "Покупка продуктов",
        sum: 50,
        date: "2023-09-09",
        category: "Супермаркеты"
    },
    {
        name: "Покупка продуктов",
        sum: 50,
        date: "2023-09-09",
        category: "Супермаркеты",
        description: "Vestibulum in auctor eros. Proin cursus lacus eu ornare gravida. Cras turpis velit, elementum vitae nibh eu, viverra cursus nisi."
    },
    {
        name: "Покупка продуктов",
        sum: 50,
        date: "2023-09-09",
        category: "Супермаркеты"
    },
    {
        name: "Покупка продуктов",
        sum: 50,
        date: "2023-09-09",
        category: "Супермаркеты"
    }
]