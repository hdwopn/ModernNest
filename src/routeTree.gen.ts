/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BlogImport } from './routes/blog'
import { Route as IndexImport } from './routes/index'
import { Route as BlogPostIdImport } from './routes/blog/$postId'

// Create/Update Routes

const BlogRoute = BlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostIdRoute = BlogPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => BlogRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postId': {
      id: '/blog/$postId'
      path: '/$postId'
      fullPath: '/blog/$postId'
      preLoaderRoute: typeof BlogPostIdImport
      parentRoute: typeof BlogImport
    }
  }
}

// Create and export the route tree

interface BlogRouteChildren {
  BlogPostIdRoute: typeof BlogPostIdRoute
}

const BlogRouteChildren: BlogRouteChildren = {
  BlogPostIdRoute: BlogPostIdRoute,
}

const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blog': typeof BlogRouteWithChildren
  '/blog/$postId': typeof BlogPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blog': typeof BlogRouteWithChildren
  '/blog/$postId': typeof BlogPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/blog': typeof BlogRouteWithChildren
  '/blog/$postId': typeof BlogPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blog' | '/blog/$postId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blog' | '/blog/$postId'
  id: '__root__' | '/' | '/blog' | '/blog/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlogRoute: typeof BlogRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlogRoute: BlogRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog": {
      "filePath": "blog.tsx",
      "children": [
        "/blog/$postId"
      ]
    },
    "/blog/$postId": {
      "filePath": "blog/$postId.tsx",
      "parent": "/blog"
    }
  }
}
ROUTE_MANIFEST_END */
