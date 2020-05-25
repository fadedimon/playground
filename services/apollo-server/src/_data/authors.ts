export type Author = {
    id: string;
    login: string;
    displayName: string;
};

export const AUTHORS: Author[] = [
    {
        id: '0',
        login: 'a.pushkin',
        displayName: 'Pushkin A.S',
    },
    {
        id: '1',
        login: 'dostal.est',
        displayName: 'Dostoyevsky F.',
    },
];
