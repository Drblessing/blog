import { useRef } from 'react'

export default function MenuBars() {
  const audioRef = useRef(null)
  return (
    <div className="w-full" id="navbar-hamburger">
      <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <li>
          <a
            href="#"
            className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-white"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
