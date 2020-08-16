
import StartRegistration from './views/pages/StartRegistration';
import Register from './views/pages/Register';
import Summary from './views/pages/Summary';

const PublicRoutes = [
	{
		path: '/',
		component: StartRegistration
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/summary',
		component: Summary
	}
];

export default PublicRoutes;