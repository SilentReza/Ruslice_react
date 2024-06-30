// base routes
export const routes = [
    {
        name: 'home',
        address: '/',
        group: 'home'
    },
    {
        name: 'about',
        address: '/about',
        group: 'about'
    },
    {
        name: 'connect',
        address: '/connect',
        group: 'connect'
    },
    {
        name: 'branch',
        address: '/branch',
        group: 'branch'
    },
    {
        name: 'menu',
        address: '/menu/:name',
        group: 'menu'
    },
    // api
    {
        name: 'api',
        address: 'https://dashboard.emaratsaran.ir/api/',
        group: 'api'
    },
    {
        name: 'image',
        address_item: 'https://dashboard.emaratsaran.ir/uploads/suggestions/images/',
        address_worker: 'https://dashboard.emaratsaran.ir/uploads/workers/images/',
        address_game: 'https://dashboard.emaratsaran.ir/uploads/games/images/',
        address_gallery: 'https://dashboard.emaratsaran.ir/storage/gallery/users/images/',
        group: 'image'
    },
]