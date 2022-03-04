# iris 

iris是一个用于创建vue项目的脚手架

*一直使用npm， nodemon， vue等命令觉得这种在命令行中敲命令很好玩，于是基于node和commander 尝试自己开发了自己的命令行工具，当然做这样一个脚手架的灵感也是来源于vue-cli快速创建vue项目，再结合社区中的优秀开源作品*

| 命令                                   | 描述                       |
| -------------------------------------- | -------------------------- |
| iris                                   | 查看iris的命令和参数配置   |
| iris create \<project\> [others...]    | 创建项目（目前只支持vue2） |
| iris addCpn \<name\> [-d xxxx/xxxxx]   | 创建组件，支持指定路径     |
| iris addPage \<page\> [-d xxxx/xxxxx]  | 创建page页                 |
| iris addStore \<store\> [-d xxxx/xxxx] | 创建store（具有命名空间）  |
|                                        |                            |

因为是自己做来玩的，功能尚未丰富，所以目前还没有发布npm，后续我会继续完善该脚手架的功能，如更具定制化，支持vue3，react等。

现阶段仅供交流和学习 ~ 

你需要在根目录下：
```js
npm link
```
方可执行终端命令

特别鸣谢：coderwhy 老师