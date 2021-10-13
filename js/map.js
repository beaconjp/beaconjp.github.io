window.addEventListener('load', function() {
    // 创建实例
    var map = new BMapGL.Map("container");
    // 设置中心点
    var point = new BMapGL.Point(121.619105,31.040568);
    // 初始化
    map.centerAndZoom(point, 20); 
    map.enableScrollWheelZoom(true);
    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
    map.addControl(zoomCtrl);
    map.getDefaultCursor(String);
})