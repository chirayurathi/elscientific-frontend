// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome: IconBrandChrome,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: <FormattedMessage id="sample-page" />,
            type: 'item',
            url: '/sample-page',
            icon: icons['IconBrandChrome'],
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: <FormattedMessage id="documentation" />,
            type: 'item',
            url: '',
            icon: icons['IconHelp'],
            external: true,
            target: true
        },
        {
            id: 'roadmap',
            title: <FormattedMessage id="roadmap" />,
            type: 'item',
            url: '',
            icon: icons['IconSitemap'],
            external: true,
            target: true
        }
    ]
};
