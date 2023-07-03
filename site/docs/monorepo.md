---
prev:
  text: 'Guide'
  link: '/docs/'
next:
  text: '???'
  link: '/???'

---


Monorepo: Multiple JavaScript Modules/npm Packages in a single Git Repo
=======================================================================

We (want to) use a monorepo to simplify development of strongly coupled npm modules.


How Tos
-------
- [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
- [Blog: Simplify your monorepo with npm workspaces](https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj)
- you can also reuse TypeScript config or parts of it:
  - [Blog: Node.js TypeScript monorepo via NPM workspaces](https://daveiscoding.com/nodejs-typescript-monorepo-via-npm-workspaces)
    - [github.com/david-szabo97/example-typescript-npm-workspaces/](https://github.com/david-szabo97/example-typescript-npm-workspaces)


Relevant Hints
--------------
- monorepo with vite: [Vite: Monorepos and Linked Dependencies](https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies)


Examples and Experiences with Monorepos
---------------------------------------
- Managing Multiple NPM Modules in a Single Repo - In Production example and experiences
  - London Node User Group - September 2019: [Managing Multiple NPM Modules in a Single Repo (YouTube, 2019)](https://www.youtube.com/watch?v=PzSHkF-adbk)
  - the same to read: [Moving Node-RED to a monorepo with multiple modules (2019)](https://knolleary.net/2019/03/21/moving-node-red-to-a-monorepo/)
  - source code
    - [github.com/node-red/node-red/](https://github.com/node-red/node-red/)
      - [github.com/node-red/node-red/tree/master/packages/node_modules/%40node-red/](https://github.com/node-red/node-red/tree/master/packages/node_modules/%40node-red/)
  - long term eperience [Monorepo in node-red - Experiences after using it for quite a long time](https://discourse.nodered.org/t/monorepo-in-node-red-what-are-your-experiences-after-using-it-for-quite-a-long-time/79399/2): 
    - "I'm quite happy with it for what we need with Node-RED. Being able to develop across the multiple modules in one place without having to coordinate different repos makes life easier than it would otherwise be."
    - "We don't do maintenance releases of individual modules - they all get published in step as needed. That would be harder to coordinate if they were all in separate repos."
  - tech progress: with introduction of [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces) in October 2020 it can be done even simpler

