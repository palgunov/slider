(function ($) {
    "use strict";

    $.fn.mySlider =function () {
        this.each(function () {
            const slider = $(this);
            const sliderList =$(slider).find(".slider_list");
            const sliderListChildren =sliderList.children();
            const btnNext =$(slider).find(".next");
            const btnPrev =$(slider).find(".prev");
            let marginLeft=0;
            console.log(sliderList.css("margin-left"));
            let changeImg = (ev)=>{

                if (ev==="next"){

                    marginLeft===-slider.innerWidth()*(sliderListChildren.length-1)?
                        marginLeft=0:marginLeft-=slider.innerWidth();
                }else if (ev==="prev"){
                    marginLeft===0?
                        marginLeft=-slider.innerWidth()*(sliderListChildren.length-1):marginLeft+=slider.innerWidth();
                }

                sliderList.css("margin-left",`${marginLeft}px`);
            };
            btnNext.click(()=> changeImg("next"));
            btnPrev.click(()=>changeImg("prev"));

            }
        )
    };

})(jQuery);
