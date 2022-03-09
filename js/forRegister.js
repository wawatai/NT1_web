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