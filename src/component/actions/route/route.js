// icons
import {
    IconHome,
    IconToolsKitchen,
} from "@tabler/icons-react";

// base routes
export const routes = {
    client: [
        {
            icon: <IconHome/>,
            label: 'خانه',
            address: '/',
            group: 'home'
        },
        {
            icon: <IconToolsKitchen/>,
            label: 'منو',
            address: '/branch/:branchName',
            group: 'branch'
        },
    ],
    api: [
        {
            name: 'api',
            address: 'https://ruslice.co/api',
            group: 'api'
        },
    ]
}