export interface IUserStatistics {
    budget: IBudget;
    categories: ICategory[];
    days: [string, number][]
}

export interface IBudget {
    plan: number;
    fact: number;
}

export interface ICategory {
    name: string;
    sum: number;
}