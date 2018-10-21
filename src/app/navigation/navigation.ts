import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'application',
        title: 'application',
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
                url: '/apps/dashboard'
            },
            {
                id: 'calendar',
                title: 'Calendar',
                translate: 'NAV.CALENDAR',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar'
            }
        ]
    }
];
