import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id      : 'pages',
        title   : 'Acesse',
        type    : 'group',
        icon    : 'pages',
        children: [
            {
                id   : 'activities',
                title: 'Atividades',
                type : 'item',
                icon : 'alarm',
                url  : '/pages/cards'
            }
        ]
    }
];
