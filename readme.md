# Create a blank fill test



## composition
### Front-End
#### 1. react.js
#### 2. next.js
#### 3. typescript
#### 4. redux-saga

1. react.js, next.js 설치
```
npm install --save react react-dom next @types/react @types/react-dom @types/next
```

2. typescript 설치
```
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```

3. next.js 와 typescript 호환 플러그인 설치
```
npm install --save @zeit/next-typescript
```

4. .babelrc.js 추가
```javascript
module.exports = {
	presets: [ 'next/babel', '@zeit/next-typescript/babel' ]
};
```

5. next.config.js 추가
```javascript
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript();

```

6. tsconfig.json 추가
```javascript
{
    "compilerOptions": {
      "module": "esnext",
      "target": "esnext",
      "jsx": "preserve",
      "sourceMap": false,
      "moduleResolution": "node"
    },
    "exclude": [
      "out",
      ".next"
    ]
}
```

7. package.json 수정
```
"scripts": {
    "dev": "next",
    "build": "NODE_ENV=production next build",
    "start": "next start"
},
```

8. directory 구조
```
node_modules
pages
    - _app.tsx
    - _document.tsx
    - index.tsx
src
    - ts
        - components
        - layouts
        - redux
.babelrc.js
.gitignore
next.config.js
package.json
readme.md
tsconfig.json
```


9. redux-saga 설치
```
npm install --save redux react-redux redux-logger redux-saga @types/redux @types/react-redux @types/redux-logger @types/redux-saga
```


### Back-End
#### 1. node.js
#### 2. serverless
#### 3. graphQL
