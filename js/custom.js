(function(){
    
    // 영상 실행 , 영상 멈춤
    $('article').hover(
        function(){
            // 여러개의 video를 제어할때는 
            // get(n)을 붙여서 해당 video를 지목함 

           var vid =  $(this).find("video").get(0)

           // 영상 처음부터 재생(호버할때마다 리셋)
            vid.currentTime = 0

            vid.play()            
        },
        function(){
            var vid = $(this).find("video").get(0)
            vid.pause() 
        }
    )


})(jQuery)