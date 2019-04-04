// mui.init({
//     swipeBack:true //启用右滑关闭功能
// });
var slider = mui("#slider");

slider.slider({
    interval: 1000
});
// document.getElementById("switch").addEventListener('toggle', function(e) {
//     if (e.detail.isActive) {
        
//     } else {
//         slider.slider({
//             interval: 0
//         });
//     }
// });

// 实现上下滑动
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});