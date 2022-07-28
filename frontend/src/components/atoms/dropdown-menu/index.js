import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { classNames } from '../../molecules/header/index';

function DropdownMenu(props) {
  return (
    <Popover.Button
      className={classNames(
        props.open ? 'text-gray-900' : 'text-gray-500',
        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
    >
      <span>Solutions</span>
      <ChevronDownIcon
        className={classNames(
          props.open ? 'text-gray-600' : 'text-gray-400',
          'ml-2 h-5 w-5 group-hover:text-gray-500'
        )}
        aria-hidden='true'
      />
    </Popover.Button>
  );
}

export default DropdownMenu;
