(function () {
		    let screenW = window.screen.width // 获取当前设备屏幕宽度
		    let targetWidth =  350 // 目标宽度
		    let scale = screenW / targetWidth // 当前设备屏幕宽度 / 目标宽度  = 缩放比例 (640=2,160=0.5)
		        console.log(scale);
		    // 然后根据计算出来的结果,初始化当前设备的缩放比例.
		    let meta = document.createElement('meta')
		    meta.name = 'viewport' // 视口设置的meta
		    meta.content = `user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`
		    document.head.appendChild(meta)
		}) ()