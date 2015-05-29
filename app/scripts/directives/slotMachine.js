/**
 * Created by wpguo on 10/27/2014.
 */
angular.module('directives', []).directive('slotMachineGroup', function () {
    var buttonHtml = '<div id="takeDiv" class="takeBtn"><button id="takeBtn" class="btn btn-default btn-primary">Take it</button></div>';
    var bindEventToActiveSlot = function (ele) {
        if (jQuery(ele).hasClass("active")) {
            jQuery(ele).css({opacity: "0.8"});
        }
        jQuery(ele).bind("mouseenter", function () {
            //show take button
            if (jQuery("#takeDiv").length <= 0 && !jQuery(ele).hasClass("active")) {
                jQuery(ele).append(buttonHtml);
            }
            jQuery("#takeBtn").bind("click", function () {
                //copy slot and move to package
                var slot = jQuery(this).parent().parent();
                var imgName = slot.attr("class").split(" ")[1];
                jQuery('<div class="movedSlot"><img src="images/' + imgName + '.jpg"</div>').appendTo("#package");
                slot.addClass("active").css({opacity: "0.8"});
                jQuery("#takeDiv").remove();
            });
        });
        jQuery(ele).bind("mouseleave", function () {
            jQuery("#takeDiv").remove();
        });
    };
    var onComplete = function ($el, active) {
        //set opacity for prev and next
        var ele = jQuery("#" + $el[0].id);
        var prevEle = ele.find(".slot")[active.index];
        var nextEle = ele.find(".slot")[active.index + 2];
        var currentEle = ele.find(".slot")[active.index + 1];
        bindEventToActiveSlot(currentEle);
        jQuery(prevEle).css("opacity", "0.7");
        jQuery(nextEle).css("opacity", "0.7");

    };
    var machineArr = [];
    return {
        restrict: 'C',
        link: function (scope) {
            var options;
            var slotMachine;
            var prevEle, nextEle, currentEle;
            jQuery(".slot-machine-group .slotMachine").each(function (i, item) {
                options = scope.$eval(jQuery(item).attr("options"));
                machineArr[i] = jQuery(item).slotMachine(options);
                slotMachine = jQuery(".slot-machine-group .slotMachine").get(i);
                prevEle = jQuery(slotMachine)[0].childNodes[1].childNodes[options.active];
                nextEle = jQuery(slotMachine)[0].childNodes[1].childNodes[options.active + 2];
                currentEle = jQuery(slotMachine)[0].childNodes[1].childNodes[options.active + 1];
                bindEventToActiveSlot(currentEle);
                jQuery(prevEle).css("opacity", "0.7");
                jQuery(nextEle).css("opacity", "0.7");
            });
            $("#slotMachineBtn").bind("click", function () {
                //reset all opacity slot
                jQuery(".slot-machine-group .slotMachine .slot").css("opacity", "1");
                jQuery(".slot-machine-group .slotMachine").each(function (i) {
                    setTimeout(function () {
                        machineArr[i].shuffle(5, onComplete);
                    }, 250 * i);
                });
            });
        }
    };
});