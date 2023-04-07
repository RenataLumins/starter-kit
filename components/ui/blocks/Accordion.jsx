import {Disclosure} from '@headlessui/react'

const Accordion = ({title = '', children, className = '', ...props}) => {
  return (
    <Disclosure as="div" className={'ui-accordion' + (className && (' ' + className))} tabIndex="1" {...props}>
      {({open}) => (
        <>
          <Disclosure.Button>
            <div className="tw-flex tw-w-full tw-items-center">
              <div>{title}</div>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" className={(open ? ' tw-rotate-180' : '')}>
                  <use xlinkHref={'#icon-chevron-down'}></use>
                </svg>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export {Accordion}