import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';
import HomeIcon from 'react-feather/dist/icons/home';

export const categories = [
  { name: 'frontdoor', label: 'Welcome', icon: HomeIcon },
  { name: 'general', label: 'Discover', icon: SettingsIcon },
  { name: 'first_use', label: 'Use', icon: GitBranchIcon },
  { name: 'api', label: 'Develop', icon: FolderPlusIcon },
  { name: 'last', label: 'Other', icon: FolderPlusIcon }
];

export default categories;
