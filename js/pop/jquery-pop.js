
;(function($){
    $.fn.extend({
        pop:function(jsonData, popTime){
            var main = this;
            var eleMinTop = parseInt(this.height() / 7);
            var eleMaxTop = parseInt(this.height() / 2);

            var randomTimeArr = [];
            var randomHeightArr = [];
            for(var i = 0; i < jsonData.length; i++){
                randomTimeArr.push(i * 2000 + parseInt(Math.random() * 1000));
                randomHeightArr.push(parseInt(Math.random() * (eleMaxTop - eleMinTop)) + eleMinTop + 'px');
            }
            $.each(jsonData, function(index, item){
                var popID = 'pop' + index;
                var popItem = $('<div class="pop1715" id="' + popID + '" style="top:' + randomHeightArr[index] + '">' + item.mesContent + '</div>');
                main.append(popItem);

                setTimeout('setInterval(function(){goPop("' + popID + '")}, 20)', randomTimeArr[index]);
            });

            setInterval(removePass, 5000);
            function removePass(){
                console.log("I am");
                var pops = $('.pop1715');
                $.each(pops, function(index, item){
                    if(parseInt($(item).css('left')) < -400){
                        $(item).remove();
                    }
                })
            }
        }
    })
})(jQuery);

function goPop(popID){
    var pop = $('#' + popID);
    pop.css('left', parseInt(pop.css('left')) - 4);
}

