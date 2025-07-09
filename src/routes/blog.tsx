import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Link } from '@tanstack/react-router'

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with TanStack Router',
    excerpt: 'Learn how to build modern React applications with TanStack Router, featuring file-based routing and type-safe navigation.',
    content: `
# Getting Started with TanStack Router

TanStack Router is a powerful, type-safe router for React applications that provides excellent developer experience and performance.

## Key Features

- **Type-safe routing** - Full TypeScript support with automatic route type generation
- **File-based routing** - Organize your routes as files in the filesystem
- **Code splitting** - Automatic code splitting for better performance
- **Search params** - First-class support for URL search parameters
- **Loaders** - Data loading with caching and invalidation

## Installation

\`\`\`bash
npm install @tanstack/react-router
\`\`\`

## Basic Setup

Create your first route by adding a file to the \`src/routes\` directory:

\`\`\`tsx
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: Home,
})

function Home() {
  return <div>Welcome to TanStack Router!</div>
}
\`\`\`

## Advanced Features

### Loaders

Load data before rendering your component:

\`\`\`tsx
export const Route = createFileRoute('/blog')({
  loader: async () => {
    const posts = await fetch('/api/posts').then(r => r.json())
    return { posts }
  },
  component: Posts,
})
\`\`\`

### Search Params

Handle URL search parameters with full type safety:

\`\`\`tsx
const searchSchema = z.object({
  page: z.number().optional(),
  filter: z.string().optional(),
})

export const Route = createFileRoute('/blog')({
  validateSearch: searchSchema,
  component: Posts,
})
\`\`\`

TanStack Router makes building complex React applications simple and maintainable.
    `,
    author: 'TanStack Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Tutorial'
  },
  {
    id: '2',
    title: 'Building AI-Powered Chat Applications',
    excerpt: 'Discover how to integrate Claude AI into your React applications for intelligent conversational interfaces.',
    content: `
# Building AI-Powered Chat Applications

Modern AI chat applications require careful consideration of user experience, performance, and integration patterns.

## Architecture Overview

A well-designed chat application consists of several key components:

### Frontend Components
- **Message Display** - Rendering user and AI messages with proper formatting
- **Input Handling** - Managing user input with real-time validation
- **State Management** - Tracking conversation history and UI state
- **Streaming Support** - Handling real-time AI responses

### Backend Integration
- **API Client** - Secure communication with AI services
- **Message Processing** - Formatting and validation of messages
- **Error Handling** - Graceful degradation and user feedback

## Implementation Example

Here's how to create a basic chat interface:

\`\`\`tsx
import { useState } from 'react'
import { Send } from 'lucide-react'

function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const aiMessage = await response.json()
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(message => (
          <div key={message.id} className="mb-4">
            <div className={message.role === 'user' ? 'text-right' : 'text-left'}>
              <div className={\`inline-block p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }\`}>
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && <div>AI is thinking...</div>}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  )
}
\`\`\`

## Best Practices

### Performance Optimization
- Implement message virtualization for long conversations
- Use React.memo for message components
- Debounce user input for better UX

### Security Considerations
- Validate all user inputs
- Implement rate limiting
- Sanitize AI responses before rendering

### User Experience
- Provide loading indicators
- Handle errors gracefully
- Support keyboard shortcuts
- Implement message persistence

Building great AI chat applications requires attention to both technical implementation and user experience design.
    `,
    author: 'AI Developer',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Development'
  },
  {
    id: '3',
    title: 'State Management with TanStack Store',
    excerpt: 'Learn how to manage application state effectively using TanStack Store for predictable and scalable React applications.',
    content: `
# State Management with TanStack Store

TanStack Store provides a lightweight, type-safe solution for managing application state in React applications.

## Why TanStack Store?

Traditional state management solutions can be complex and verbose. TanStack Store offers:

- **Simplicity** - Minimal boilerplate and easy to understand API
- **Type Safety** - Full TypeScript support with automatic type inference
- **Performance** - Optimized re-renders and efficient updates
- **Flexibility** - Works with any React pattern or architecture

## Basic Usage

### Creating a Store

\`\`\`tsx
import { Store } from '@tanstack/store'

interface CounterState {
  count: number
  name: string
}

const counterStore = new Store<CounterState>({
  count: 0,
  name: 'Counter'
})
\`\`\`

### Using the Store in Components

\`\`\`tsx
import { useStore } from '@tanstack/react-store'

function Counter() {
  const count = useStore(counterStore, state => state.count)
  const name = useStore(counterStore, state => state.name)

  const increment = () => {
    counterStore.setState(state => ({
      ...state,
      count: state.count + 1
    }))
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
\`\`\`

## Advanced Patterns

### Derived State

Create computed values that automatically update:

\`\`\`tsx
import { Derived } from '@tanstack/store'

const doubledStore = new Derived({
  fn: () => counterStore.state.count * 2,
  deps: [counterStore]
})

doubledStore.mount()

function DoubledCounter() {
  const doubled = useStore(doubledStore)
  return <p>Doubled: {doubled}</p>
}
\`\`\`

### Actions and Selectors

Organize your state logic:

\`\`\`tsx
// Actions
const counterActions = {
  increment: () => {
    counterStore.setState(state => ({
      ...state,
      count: state.count + 1
    }))
  },
  
  decrement: () => {
    counterStore.setState(state => ({
      ...state,
      count: state.count - 1
    }))
  },
  
  reset: () => {
    counterStore.setState(state => ({
      ...state,
      count: 0
    }))
  }
}

// Selectors
const counterSelectors = {
  getCount: (state: CounterState) => state.count,
  getName: (state: CounterState) => state.name,
  getIsPositive: (state: CounterState) => state.count > 0
}
\`\`\`

### Complex State Management

For larger applications, organize your stores:

\`\`\`tsx
// stores/userStore.ts
interface UserState {
  currentUser: User | null
  isLoading: boolean
  error: string | null
}

export const userStore = new Store<UserState>({
  currentUser: null,
  isLoading: false,
  error: null
})

export const userActions = {
  setLoading: (loading: boolean) => {
    userStore.setState(state => ({ ...state, isLoading: loading }))
  },
  
  setUser: (user: User) => {
    userStore.setState(state => ({ 
      ...state, 
      currentUser: user, 
      isLoading: false,
      error: null 
    }))
  },
  
  setError: (error: string) => {
    userStore.setState(state => ({ 
      ...state, 
      error, 
      isLoading: false 
    }))
  }
}
\`\`\`

## Integration with React Patterns

### Custom Hooks

Create reusable hooks for common patterns:

\`\`\`tsx
function useCounter() {
  const count = useStore(counterStore, state => state.count)
  const name = useStore(counterStore, state => state.name)
  
  return {
    count,
    name,
    actions: counterActions
  }
}
\`\`\`

### Context Integration

Combine with React Context for dependency injection:

\`\`\`tsx
const StoreContext = createContext<{
  counterStore: Store<CounterState>
}>()

function StoreProvider({ children }) {
  const stores = useMemo(() => ({
    counterStore: new Store<CounterState>({ count: 0, name: 'Counter' })
  }), [])
  
  return (
    <StoreContext.Provider value={stores}>
      {children}
    </StoreContext.Provider>
  )
}
\`\`\`

TanStack Store provides the perfect balance of simplicity and power for modern React applications.
    `,
    author: 'State Management Expert',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Architecture'
  }
]

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Chat
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            TanStack Blog
          </h1>
          <p className="text-gray-400 mt-2">
            Insights, tutorials, and best practices for modern web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="blog-post-card bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 card-hover"
            >
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3 hover:text-orange-400 transition-colors">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/blog')({
  component: BlogList,
})