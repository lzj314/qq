/**
 * Created by Administrator on 2017/8/16.
 */
/*点击li切换页面*/
var index = 0;
var timer = null;
var p1_middle_1 = $('#p1_middle_1');
var p1_middle_2 = $('#p1_middle_2');
var p1_title = $('#p1_title');
//切换页的js代码
showTitle(index);
$(function () {
    $('section').eq(index).fadeIn().siblings('section').fadeOut();
    $('.p1-gps > li').on('click',function (){
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('section').eq(index).fadeIn().siblings('section').fadeOut();
        showTitle(index);
    })
})
$(window).mousewheel(function (event,delta) {
    // console.log(delta); 滚动事件向上delta为1，向下为-1
    index-=delta;
    timer = setTimeout(function () {
        if(index > $('.p1-gps > li').length-1){
            index = 0;
        }else if(index < 0){
            index = $('.p1-gps > li').length-1;
        }
        $('.p1-gps > li').eq(index).addClass('active').siblings().removeClass('active');
        $('section').eq(index).fadeIn().siblings('section').fadeOut();
        showTitle(index);
    })
},1000);
function showTitle(index) {
    //显示第一页头部
    if(index==0) {
        $('.p2-header').hide();
    }else{
        $('.p2-header').show();
    }
    
}
//切换出现动画的js代码
// p1_middle_1.velocity(
//     {rotateY:'-15deg',rotateX:'-30deg',translateZ:'3000px',
//         translateX:'0px',translateY:'0px',scale:.1,opacity:1},
//     {duration:0});
