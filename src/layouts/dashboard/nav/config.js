// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: icon('ic_lock'),
  },
  {
    title: 'Manage Jobs',
    path: '/dashboard/analytics',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Manage Users',
    path: '/dashboard/reports',
    icon: icon('ic_blog'),
  },
  {
    title: 'Manage Applications',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Others',
    path: '/dashboard/companies',
    icon: icon('ic_user'),
  },
];

export default navConfig;
