// 基础事件类型(vue不加 on)
export enum BaseEvent {
  // 点击
  ON_CLICK = 'click',
  // 双击
  ON_DBL_CLICK = 'dblclick',
  // 移入
  ON_MOUSE_ENTER = 'mouseenter',
  // 移出
  ON_MOUSE_LEAVE = 'mouseleave'
}

// 组件交互回调事件
export enum InteractEvents {
  INTERACT_ON = 'interactOn',
  INTERACT_COMPONENTS = 'interactComponents',
  INTERACT_FN = 'interactFn'
}

// 组件交互回调事件触发的类型
export enum InteractEventOn {
  CLICK = 'click',
  CHANGE = 'change'
}

// 交互式组件的触发配置
export type InteractActionType = {
  interactType: InteractEventOn
  interactName: string
  componentEmitEvents: { [T: string]: any[] }
}

// vue3 生命周期事件
export enum EventLife {
  // 渲染之后
  VNODE_MOUNTED = 'vnodeMounted',
  // 渲染之前
  VNODE_BEFORE_MOUNT = 'vnodeBeforeMount'
}

// 内置字符串函数对象列表
export const excludeParseEventKeyList = [
  EventLife.VNODE_BEFORE_MOUNT,
  EventLife.VNODE_MOUNTED,
  BaseEvent.ON_CLICK,
  BaseEvent.ON_DBL_CLICK,
  BaseEvent.ON_MOUSE_ENTER,
  BaseEvent.ON_MOUSE_LEAVE,
  //过滤器
  'filter'
]
// 内置字符串函数键值列表
export const excludeParseEventValueList = [
  // 请求里的函数语句
  'javascript:'
]
