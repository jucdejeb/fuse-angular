import { FuseNavigation } from '@fuse/types';
import { UrlRoute } from '@fuse/common/Routes';

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
                type: 'item',
                icon: 'dashboard',
                url: UrlRoute.apps + '/' + UrlRoute.dashboard
            }
        ]
    }
];
