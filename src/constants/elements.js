export const BUTTON_TEXT = 'Search';
export const BUTTON_CREATE_AUTHOR = 'Create author';
export const BUTTON_ADD_COURSE = 'Add new course';
export const BUTTON_DELATE_AUTHOR = 'Delete author';
export const BUTTON_ADD_AUTHOR = 'Add author';
export const BUTTON_CREATE_COURSE = 'Create course';
export const BUTTON_UPDATE_COURSE = 'Update course';
export const BUTTON_LOGOUT = 'Logout';

export const INPUT_NAME = 'Author name';
export const INPUT_DURATION = 'Duration';
export const INPUT_TITLE = 'Title';
export const INPUT_DESCRIPTION = 'Description';

export const PLACEHOLDER_SEARCH = 'Enter course name or id...';
export const PLACEHOLDER_DURATION = 'Enter duration in minutes...';
export const PLACEHOLDER_NAME = 'Enter author name...';

export const EMAIL_EXIST = '\'email\' should be a string and it should be an email or email already exists';
export const LOGIN_ERROR = 'Invalid data.';

export const errors = new Map();
errors.set(LOGIN_ERROR, 'Invalid Email or Password');
errors.set(EMAIL_EXIST, 'Email already exist');

export const TXT_LENGTH = 2;
