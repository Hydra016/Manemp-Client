import {
	HiOutlineViewGrid,
	HiLogout,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
    HiUserGroup,
    HiCalendar,
    HiClock,
    HiPlusCircle,
    HiLibrary
} from 'react-icons/hi'


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
    {
		key: 'employees',
		label: 'Employees',
		path: '/employees',
		icon: <HiUserGroup />
	},
    {
		key: 'shifts',
		label: 'Shifts',
		path: '/shifts',
		icon: <HiClock />
	},
    {
		key: 'schedule',
		label: 'Schedule',
		path: '/schedule',
		icon: <HiCalendar />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
]