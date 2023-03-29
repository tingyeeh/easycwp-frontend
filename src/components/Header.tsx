import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

export default function Header() {
  return (
    <header className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {AppConfig.title}
        </h1>
        <h2 className="text-xl">{AppConfig.description}</h2>
      </div>
      <nav>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="border-none text-gray-700 hover:text-gray-900"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
          <li className="mr-6">
            <Link
              href="/news-and-insights/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              News & Insights
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
