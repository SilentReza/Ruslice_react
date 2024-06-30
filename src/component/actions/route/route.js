// icons
import {
    IconBooks,
    IconHome,
    IconToolsKitchen,
    IconPhoneCall,
    IconBrandJuejin
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
            address: '/branch',
            group: 'branch'
        },
        {
            icon: <IconBooks/>,
            label: 'درباره',
            address: '/about',
            group: 'about'
        },
        {
            icon: <IconPhoneCall/>,
            label: 'تماس',
            address: '/connect',
            group: 'connect'
        },
    ],
    api: [
        {
            name: 'api',
            address: 'https://ruslice.co/api/',
            group: 'api'
        },
        {
            name: 'image',
            address: 'https://ruslice.co/storage/gallery/users/images/',
            group: 'image'
        },
    ]
}