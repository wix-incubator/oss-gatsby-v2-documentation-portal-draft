import HomeIcon from 'react-feather/dist/icons/home';
import ListIcon from 'react-feather/dist/icons/list';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import GitIcon from 'react-feather/dist/icons/github';

const menu = [
    { label: '', to: '/welcome', icon: HomeIcon }, 
    { label: '', to: '/content', icon: ListIcon },
    { label: '', to: 'github.com', icon: GitIcon },
    { label: '', to: 'twitter.com', icon: TwitterIcon }
];

export default menu;
