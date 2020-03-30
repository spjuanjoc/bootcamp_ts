# Bootcamp for TypeScript

Create a "Hello World" project in TypeScript using WebStorm IDE from  JetBrains. 

---
## Setup
1 Install npm: Node Package Manager: Manejador de paquetes

```shell script
$ sudo apt install npm
```

2 Create a project

*  IDE: WebStorm 
>File >New>Project>Empty: hello_world_ts

3 Open terminal and go to project root
```shell script
$ cd ~/hello_world_ts
```

4 Configure npm to create package.json
```shell script
$ npm init
```

Fill information

5 Install TypeScript with npm
```shell script
$ npm install typescript --save-dev
```

6 Add plugin ignore (optional)
>Settings > Plugins > Marketplace: ignore (restart requeried)

7 Install ts-node to run typescript as tests inside WebStorm
```shell script
$ npm install ts-node --save-dev
```

8 Install test suite "mocha"
```shell script
$ npm install mocha --save-dev
```

9 Add types mocha and node
```shell script
$ npm install @types/mocha --save-dev
$ npm install @types/node --save-dev
```

---
## Compile
### From command line
```
$ cd source
$ tsc
$ cd ..
$ tsc --watch
```

### From tool window
1. Open source/index.ts file
2. In the bottom toolbar shoud appear "TypeScript 3.x.x" window
3. In TypeScript window click the hammer>Compile All

### From Project window 
1. Right click tsconfig.json file
2. Click "Compile Typescript"
---
## Run
1. Right click tests/index.ts
2. Run 'index.ts'
