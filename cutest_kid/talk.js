$(function() {
    $('#yes').click(function(event) {
        modal('(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();
        });
    });
    $('#no').click(function(event) {
        modal('小鬼<br>我听说🌈❤️💌🌷💖🌹🍬✨', A);
    });
});

function A() {
    modal('我听说🌈❤️💌🌷💖🌹🍬✨<br>喜马拉雅山脉有点高', B);
}

function B() {
    modal('我听说🌈❤️💌🌷💖🌹🍬✨<br>喜马拉雅山脉有点高<br>欢乐谷的旋转木马有点忧伤', C);
}

function C() {
    modal('我听说🌈❤️💌🌷💖🌹🍬✨<br>喜马拉雅山脉有点高<br>欢乐谷的旋转木马有点忧伤<br>你不要熬夜晚睡太逞强', D);
}

function D() {
		$('.text').append('<br><br>我听说🌈❤️💌🌷💖🌹🍬✨');
		$('.text').append('<br>欢乐谷的旋转木马有点忧伤');
		$('.text').append('<br>你不要熬夜晚睡太逞强');
		$('.text').append('<br>啊想说的字都在第一个');
    modal('我听说🌈❤️💌🌷💖🌹🍬✨<br>喜马拉雅山脉有点高<br>欢乐谷的旋转木马有点忧伤<br>你不要熬夜晚睡太逞强<br>啊想说的字都在第一个', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        // ' style="font: 0px/0px sans-serif;clear: both;display: block"'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
