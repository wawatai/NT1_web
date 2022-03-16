// $(function(){
//     $(".platformChs li").click(function(){
//         $(this).removeClass("display");
//         $(this).siblings().addClass("display");
        
//         if($(this).hasClass("line")){
//             $($(".platformChs").prev()).attr("placeholder","wechat ID");
//         }else if($(this).hasClass("wechat")){
//             $($(".platformChs").prev()).attr("placeholder","LINE ID");
//         }
//     })
// })

$(function(){
    $(".platformChs li").click(function(){
        $(this).removeClass("display");
        $(this).siblings().addClass("display");

        if($(this).hasClass("line")){
            $($(".platformChs").prev()).attr("placeholder","wechat ID");
        }else if($(this).hasClass("wechat")){
            $($(".platformChs").prev()).attr("placeholder","LINE ID");
        }
    })
})
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close_ic_gray').click(function(){
        $('.filter').removeClass('display');
    })
    $('.jumpWindow .btnBox').click(function(){
        $('.filter').removeClass('display');
    })

    $('.registerWrap .right .verification-btn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.needphone').addClass('display');
    })
})