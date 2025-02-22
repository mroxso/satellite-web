import {
	SET_MOBILE_MENU_OPEN,
	SHOW_ALIAS_MENU_MOBILE,
	VIEW_SIDE_PANEL
} from '../actions';


const INITIAL_STATE = {
	topMode: null,
	mobileMenuOpen: false,
	sectionLabels: {
		preferences: 'Profile Settings',
		subscriptions: 'Following List',
		relays: 'Relays',
		dm: 'Messages'
	},
	subMode: {},
	sections: [
		{
			value: 'preferences',
			icon: 'cog'
		},
		{
			value: 'subscriptions',
			icon: 'circle check',
		},
		{
			value: 'dm',
			icon: 'comment alternate'
		},
		{
			value: 'relays',
			icon: 'bullseye'
		},
	]
};

export default (state = INITIAL_STATE, action) => {

	const { type, data } = action;

	switch (type) {

		case '@@router/LOCATION_CHANGE':
			return {
				...state,
				topMode: null
			};

		case SET_MOBILE_MENU_OPEN:
			return {
				...state,
				mobileMenuOpen: data.open
			}

		case SHOW_ALIAS_MENU_MOBILE:
			return data.show || data.mobile ? state : {
				...state,
				topMode: null
			};

		case VIEW_SIDE_PANEL:
			return {
				...state,
				topMode: data.topMode,
				mobileMenuOpen: false,
				subMode: typeof data.subMode === 'undefined' ? state.subMode : {
					...state.subMode,
					[data.topMode]: data.subMode
				}
			};

		default:
			return state;
	}
};
