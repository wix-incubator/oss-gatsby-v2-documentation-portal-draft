import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';
import HomeIcon from 'react-feather/dist/icons/home';

export const categories = [
  { name: 'frontdoor', label: 'Welcome', icon: HomeIcon },
  { name: 'general', label: 'Get started', icon: SettingsIcon },
  { name: 'first', label: 'First issues', icon: GitBranchIcon },
  { name: 'second', label: 'Second issues', icon: ImageIcon },
  { name: 'last', label: 'Everything else', icon: FolderPlusIcon },
  { name: 'gs', label: 'Discover', icon: ImageIcon },
  { name: 'guides', label: 'Guides', icon: GitBranchIcon },
  { name: 'specs', label: 'Specification overview', icon: FolderPlusIcon }
];

export default categories;
