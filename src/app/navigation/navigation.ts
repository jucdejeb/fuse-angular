import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'analytics',
                        title: 'Analytics',
                        type: 'item',
                        url: '/apps/dashboards/analytics'
                    },
                    {
                        id: 'project',
                        title: 'Project',
                        type: 'item',
                        url: '/apps/dashboards/project'
                    }
                ]
            },
            // {
            //     id: 'chat',
            //     title: 'Chat',
            //     translate: 'NAV.CHAT',
            //     type: 'item',
            //     icon: 'chat',
            //     url: '/apps/chat',
            //     badge: {
            //         title: '13',
            //         bg: '#09d261',
            //         fg: '#FFFFFF'
            //     }
            // },
        ]
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'profile',
                title: 'Profile',
                type: 'item',
                icon: 'person',
                url: '/apps/profile'
            }
        ]
    }
];
