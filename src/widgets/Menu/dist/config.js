"use strict";
exports.__esModule = true;
exports.SIDEBAR_WIDTH_REDUCED = exports.SIDEBAR_WIDTH_FULL = exports.MENU_ENTRY_HEIGHT = exports.MENU_HEIGHT = exports.socials = exports.links = void 0;
exports.links = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: '/'
    },
    {
        label: 'Trade',
        icon: 'TradeIcon',
        items: [
            {
                label: 'Exchange',
                href: 'https://slime.finance/swap-slimeeees#/swap'
            },
            {
                label: 'Liquidity',
                href: 'https://slime.finance/swap-slimeeees#/pool'
            },
        ]
    },
    {
        label: 'Farms',
        icon: 'FarmIcon',
        href: '/farms'
    },
    {
        label: 'pools',
        icon: 'PoolIcon',
        href: '/pools'
    },
    {
        label: 'Referrals',
        icon: 'GroupsIcon',
        href: '/slime-friends'
    },
    {
        label: 'Launch Pools',
        icon: 'Ifo',
        href: '/launch'
    },
    // {
    //   label: 'Lottery',
    //   icon: 'TicketIcon',
    //   href: '/lottery',
    // },
    // {
    //   label: 'NFT',
    //   icon: 'NftIcon',
    //   href: '/nft',
    // },
    {
        label: 'Info',
        icon: 'InfoIcon',
        items: [
            // {
            //   label: 'Voting',
            //   href: 'https://voting.pancakeswap.finance',
            // },
            {
                label: 'GitHub',
                href: 'https://github.com/slime-fi'
            },
            {
                label: 'Treasury Reports',
                href: 'https://slime.finance/reports/buybacks.html'
            },
            {
                label: 'Blog',
                href: 'https://medium.com/@SlimeFinance'
            },
        ]
    },
];
exports.socials = [
    {
        label: 'Telegram',
        icon: 'TelegramIcon',
        items: [
            {
                label: 'Announcements',
                href: 'https://t.me/slimefinanceann'
            },
            {
                label: 'EN',
                href: 'https://t.me/slimefinance'
            },
            {
                label: 'ES',
                href: 'https://t.me/slimefinanceES'
            },
            {
                label: 'CN',
                href: 'https://t.me/slimefinanceCN'
            },
            {
                label: 'FR',
                href: 'https://t.me/slimefinanceFR'
            },
        ]
    },
    {
        label: 'Twitter',
        icon: 'TwitterIcon',
        href: 'https://twitter.com/slimefinance'
    },
];
exports.MENU_HEIGHT = 64;
exports.MENU_ENTRY_HEIGHT = 42;
exports.SIDEBAR_WIDTH_FULL = 240;
exports.SIDEBAR_WIDTH_REDUCED = 90;
