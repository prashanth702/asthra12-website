(function(a){function d(a){return a[0].offsetHeight+b(a,"marginTop")+b(a,"marginBottom")}function c(a){return a[0].offsetWidth+b(a,"marginLeft")+b(a,"marginRight")}function b(b,c){return parseInt(a.css(b[0],c))||0}a.fn.jCarouselLite=function(b){b=a.extend({btnPrev:"#arrow-left",btnNext:null,btnGo:null,mouseWheel:false,auto:null,hoverPause:false,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},b||{});return this.each(function(){function x(c){if(!e){if(b.beforeStart)b.beforeStart.call(this,w());if(b.circular){if(c<0){i.css(f,-((p+k)*q)+"px");p=c+k}else if(c>n-l){i.css(f,-((p-k)*q)+"px");p=c-k}else p=c}else{if(c<0||c>n-l)return;else p=c}e=true;i.animate(f=="left"?{left:-(p*q)}:{top:-(p*q)},b.speed,b.easing,function(){if(b.afterEnd)b.afterEnd.call(this,w());e=false});if(!b.circular){a(b.btnPrev+","+b.btnNext).removeClass("disabled");a(p-b.scroll<0&&b.btnPrev||p+b.scroll>n-l&&b.btnNext||[]).addClass("disabled")}}return false}function w(){return m.slice(p).slice(0,l)}function v(){clearInterval(t)}function u(){v();t=setInterval(function(){x(p+b.scroll)},b.auto+b.speed)}var e=false,f=b.vertical?"top":"left",g=b.vertical?"height":"width";var h=a(this),i=a("ul",h),j=a("li",i),k=j.size(),l=b.visible;if(b.circular){i.prepend(j.slice(k-l+1).clone()).append(j.slice(0,b.scroll).clone());b.start+=l-1}var m=a("li",i),n=m.size(),p=b.start;h.css("visibility","visible");m.css({overflow:"hidden","float":b.vertical?"none":"left"});i.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});h.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var q=b.vertical?d(m):c(m);var r=q*n;var s=q*l;m.css({width:m.width(),height:m.height()});i.css(g,r+"px").css(f,-(p*q));h.css(g,s+"px");if(b.btnPrev){a(b.btnPrev).click(function(){return x(p-b.scroll)});if(b.hoverPause){a(b.btnPrev).hover(function(){v()},function(){u()})}}if(b.btnNext){a(b.btnNext).click(function(){return x(p+b.scroll)});if(b.hoverPause){a(b.btnNext).hover(function(){v()},function(){u()})}}if(b.btnGo)a.each(b.btnGo,function(c,d){a(d).click(function(){return x(b.circular?b.visible+c:c)})});if(b.mouseWheel&&h.mousewheel)h.mousewheel(function(a,c){return c>0?x(p-b.scroll):x(p+b.scroll)});var t;if(b.auto){if(b.hoverPause){h.hover(function(){v()},function(){u()})}u()}})};})(jQuery)