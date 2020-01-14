//尽可能抽取出展示型组件，展示型组件继承pureComponent
//组件数据如果来自于网上，需要每隔一段时间实时获取更新，
//这将消耗更多的资源，用pureComponent来来避免重复渲染
//使用pureComponent，传递数据对象只能是值，data.info.name,只能是name

//memo让函数式组件页有了pureComponent功能
const Comment = React.memo(()=>{
  return (
      <div>1</div>
  )
})