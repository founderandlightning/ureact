import nivedan from 'nivedan';
import { apiUrl as baseURL } from 'utils';
import { getUserToken, logoutUser } from 'utils/session';
import { history } from 'utils/history';

// create a configurable axios instance
nivedan.defaultConfig({
	baseURL,
	headers: {
		common: { 'Content-Type': 'application/json' },
	},
	expendError: true,
});

// create global error handling logic
const handleErrors = (error) => {
	const { status = 400 } = error || {};
	if (status === 401) {
		logoutUser();
		history.push('/login');
	}
	return Promise.reject(error);
};

// global request handling
nivedan.middleware.response.use(
	(response) => response,
	(error) => handleErrors(error)
);

nivedan.middleware.request.use(
	(config) => {
		const token = getUserToken();
		const request = config;
		if (token) {
			request.headers.common.Authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => Promise.reject(error)
);

export { nivedan };
