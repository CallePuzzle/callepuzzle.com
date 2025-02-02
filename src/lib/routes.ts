interface Route {
	name: string;
	getUrl: (params?: any) => string;
}

interface Routes {
	[id: string]: Route;
}

const Routes: Routes = {
	home: {
		name: 'Inicio',
		getUrl: () => '/'
	},
	blog: {
		name: 'Blog',
		getUrl: () => '/blog'
	}
};

export default Routes;
