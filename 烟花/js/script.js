$(function () {
	$('#yes').click(function (event) {
		modal('老婆，我好爱你，以后我要把对你的爱多多地表达出来，错误我也会好好改正，谢谢老婆，请老婆看烟花秀(^_^)', function () {
			$('.page_one').addClass('hide');
			$('.page_two').removeClass('hide');
			// typeWrite();
			fireworks();

		});
	});
	$('#no').click(function (event) {
		modal('老婆，我错啦！', A);
	});
});

function A() {
	modal('是我做的不好！', B);
}

function B() {
	modal('可我真的好在意你的言行，会很左右我的情绪', C);
}

function C() {
	modal('是我想的太多了，其实老婆没有其它的意思', D);
}

function D() {
	modal('我认识到自己的问题了', E);
}

function E() {
	modal('是我做的不好，让老婆失望了', F);
}

function F() {
	modal('以后我会好好改正的，在老婆不舒服和生气的时候要及时关心老婆', G);
}

function G() {
	modal('老婆，我真的好爱你，以后也要把这些爱都表达出来，原谅我这一次好不好？', H);
}

function H() {
	modal('行吧，这次暂且原谅你，下次再犯小心你的猪头', I);
}

function I() {
	modal('嘻嘻，老婆最好啦，请老婆看烟花秀', function () {
		fireworks();
	});
}

function fireworks() {
	$('.page_one').addClass('hide');
	$('.page_two').removeClass('hide');
	$('.page_two').fireworks({
		sound: true,
		opacity: 0.9,
		width: '100%',
		height: '100%'
	});
}
function modal(content, callback) {
	var tpl = '<div class="container">' +
		'<div class="mask"></div>' +
		'<div class="modal">' +
		'<p>' + content + '</p>' +
		'<button type="button" id="confirm" class="confirm">确定</button>' +
		'</div>' +
		'</div>';
	$('body').append(tpl);
	$(document).on('click', '.confirm', function () {
		$('.container').remove();
		callback();
	});
}