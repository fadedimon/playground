type Context = {};

type Info = {};

type Paging = {
    offset: number;
    limit: number;
};

export type WithPaging = {
    paging: Paging;
};

export type Query<T, A = {}, P = null> = (p: P, a: A, c: Context, i: Info) => T | Promise<T>;
