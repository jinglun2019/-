// new KVue({data:{...}})

class KVue {
  constructor(options) {
    this.$options = options;

    // 数据响应化
    this.$data = options.data;
    this.observe(this.$data);

    // 模拟一下watcher创建
    //new Watcher();
    // // 通过访问test属性触发get函数，添加依赖
    // this.$data.test;
    // new Watcher();
    // this.$data.foo.bar;

    // created执行
    //  if (options.created) {
    //      options.created.call(this);
    //  }
    new Compile(options.el,this);
  }

  observe(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    // 遍历该对象
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key]);
      //   代理data中的属性到vue实例上
    });
  }

  // 数据响应化
  defineReactive(obj, key, val) {
    this.observe(val); // 递归解决数据嵌套

    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target);
        console.log("sss" + Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        console.log(`${key}属性更新了：${val}`);
        dep.notify();
      }
    });
  }
}

class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(dep) {
    this.deps.push(dep);
  }
  notify() {
    this.deps.forEach(dep => dep.update());
  }
}

class Watcher {
  constructor() {
    //将当前watcher实例指向Dep静态属性
    Dep.target = this;
  }
  update() {
    console.log("属性更新了");
  }
}
