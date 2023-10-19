export interface IUserStatistics {
    budget: IBudget;
    days: [string, number][];
    categories: ICategory[];
}

export interface IChildrenStatistics {
    budget: IBudget;
    categories: IChildrenCategory[]
}

export interface IBudget {
    plan: number;
    fact: number;
}

export interface IChildrenCategory {
    name: string;
    percent: number;
}

export interface ICategory {
    name: string;
    sum: number;
}