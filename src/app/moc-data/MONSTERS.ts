import {Monster} from '../models/monster';
export const MONSTERS: Array<Monster> = [
    {
        id: 1,
        name: "Quái vật 1",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81o8CdmFs-L.png',
        detail: "Đây là quái vật 1",
        spells:  [
            {
                id: 1,
                name: "quay tròn"
            },
            {
                id: 2,
                name: "chống đẩy"
            },
        ]
    },
    {
        id: 2,
        name: "Quái vật 2",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81o8CdmFs-L.png',
        detail: "Đây là quái vật 2",
        spells:  [
            {
                id: 1,
                name: "quay vòng"
            },
            {
                id: 2,
                name: "chống đẩy"
            },
        ]
    },
    {
        id: 3,
        name: "Quái vật 3",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81o8CdmFs-L.png',
        detail: "Đây là quái vật 3",
        spells:  [
            {
                id: 1,
                name: "quay vòng"
            },
            {
                id: 2,
                name: "chống đẩy"
            },
        ]
    }
];