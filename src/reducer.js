export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	"BQCKWcwjJpvab3HqgoBWUGAELiYZQ-c_i35lsqR2UTceYzErlQttH9k5mQrsIRD23s3bkONAnts_8hIRHmm6L8Ruaoim5wRMt9MgIjpcUJkgwPerTGlxDa3JdAuXKSC3ms0QKuBJxfykBwhP3ynf5iOUHDmB2VSSsvr-4BS4RGOmKW54",
};

export const reducer = (state, action) => {
	console.log(action);
	//Action ->type ,[payload]
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_GLOBAL50":
			return {
				...state,
				global50: action.discover_weekly,
			};
		default:
			return state;
	}
};
