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