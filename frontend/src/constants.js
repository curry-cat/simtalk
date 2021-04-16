module.exports = {
	VERSION: '0.0.1',
	VERSION_NUM: 1,
	// ENV: 'production',
	ENV: 'development',
	API_SERVER: 'http://localhost:8080',
	WEB_SERVER: 'http://localhost:8080',
	EVENTS: {
		LOGIN_COMPLETE: 'LOGIN_COMPLETE',
		LOGOUT_COMPLETE: 'LOGOUT_COMPLETE',
		HOME_LIST_LOADING: 'HOME_LIST_LOADING',
		CHAT_LIST_LOADING: 'CHAT_LIST_LOADING',
		SET_FOOTER_MENU: 'SET_FOOTER_MENU',
		DATA_LOADING: 'DATA_LOADING',
		DATA_LOADED: 'DATA_LOADED',
		SET_HEADER_STATE: 'SET_HEADER_STATE',
		SET_TOP_MENU_TITLE: 'SET_TOP_MENU_TITLE',
		SET_TOP_USER_NAME: 'SET_TOP_USER_NAME',
		OPEN_SIDE_MENU: 'OPEN_SIDE_MENU',
		CLOSE_SIDE_MENU: 'CLOSE_SIDE_MENU',
		SET_SIDE_MENU: 'SET_SIDE_MENU',
		HIDE_FOOTER_MENU: 'HIDE_FOOTER_MENU',
		OPEN_MODAL: 'OPEN_MODAL',
		CLOSE_MODAL: 'CLOSE_MODAL',
		SAVE_MODAL: 'SAVE_MODAL',

		DO_DECLARATION: 'doDeclaration',
		DO_BLOCK: 'doBlock',
		DO_OUT_ROOM: 'doOutChatRoom',
		DO_OUT_ALL_ROOM: 'doOutAllChatRoom',
		GET_USER_DETAIL: 'userDetail',
		DO_SECESSION: 'secession',
	},
	MENU_NAME:{
		HOME: 'HOME',
		CHAT: 'CHAT',
		CHAT_LIST: 'CHAT_LIST',
		MORE: 'MORE',
		PROFILE: 'PROFILE',
		POINT: 'POINT',
		BLOCK: 'BLOCK',
		QNA: 'QNA',
		TERMS: 'TERMS',
		POLICY: 'POLICY',
	},
	TOP_TITLE:{
		HOME: '광장',
		CHAT: '채팅',
		MORE: '더보기',
		PROFILE: '프로필',
		POINT: '포인트 충전',
		BLOCK: '차단된 계정',
		QNA: '문의하기',
		TERMS: '이용약관',
		POLICY: '개인정보 보호정책',
	}
};
