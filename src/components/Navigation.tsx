import { Link } from '@tanstack/react-router'
import { MessageCircle, BookOpen, Home } from 'lucide-react'

interface NavigationProps {
  currentPath?: string
}

export function Navigation({ currentPath }: NavigationProps) {
  const navItems = [
    { to: '/', label: 'Chat', icon: MessageCircle },
    { to: '/blog', label: 'Blog', icon: BookOpen },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full px-2 py-2">
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentPath === to
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}