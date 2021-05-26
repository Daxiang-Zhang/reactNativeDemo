# day1运行在android环境中遇到的问题
1.使用setInterval卡顿

# day2运行在android环境中遇到的问题
1.react-native-swiper中嵌套的水平scrollView无法滑动，目前的解决方案是使用
```
import { ScrollView } from 'react-native-gesture-handler'
```
代替
```
import { ScrollView } from 'react-native'
```
# day3运行在android环境中遇到的问题
1.原demo是运行在ios环境的，有些组件不适用于android
2.原demo创建时间过于久远，许多组件和写法已经改变