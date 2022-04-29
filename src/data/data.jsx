let data = [
    {
        id: 1,
        name: 'Marjane Shopping List',
        total: 120,
        date: 'Wed 27 Apr 18:00',
        isReminder: true,
        isCompleted: false,
        items: [
            {
                id: 1,
                name: 'Spagitti 500g',
                quantity: 4,
                price: 500,
                isBought: false,
            },
            {
                id: 2,
                name: 'Sidi Ali pack',
                quantity: 1,
                price: 500,
                isBought: true, 
            }
        ]
    },
    {
        id: 2,
        name: 'BIM Shopping List',
        total: 120,
        date: 'Wed 27 Apr 18:00',
        isReminder: true,
        isCompleted: true,
        items: [
            {
                id: 1,
                name: 'Spagitti 500g',
                quantity: 4,
                price: 500,
                isBought: false,
            },
            {
                id: 2,
                name: 'Sidi Ali pack',
                quantity: 1,
                price: 500,
                isBought: true, 
            }
        ]
    }
]

export function getLists () {
    return data;
}