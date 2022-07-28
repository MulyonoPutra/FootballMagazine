import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  solutions,
  callsToAction,
} from '../../molecules/header/HeaderCollection';

function DropdownTransition() {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className='popover-panel'>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
              >
                <item.icon
                  className='flex-shrink-0 h-6 w-6 text-indigo-600'
                  aria-hidden='true'
                />
                <div className='ml-4'>
                  <p className='text-base font-medium text-gray-900'>
                    {item.name}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
            {callsToAction.map((item) => (
              <div key={item.name} className='flow-root'>
                <a
                  href={item.href}
                  className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                >
                  <item.icon
                    className='flex-shrink-0 h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>{item.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

export default DropdownTransition;
