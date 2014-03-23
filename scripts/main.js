var
    $fileList = $('#fileList'),
    $fileInfo = $('#fileInfo'),
    $fileCtrl = $('#fileCtrl');

// 点击文件列表单个项目
$fileList
    .on('click', 'li', function() {
        if ( $(this).hasClass('active') ) { //如果已经选中
            $(this).removeClass('active');
            $fileCtrl.css('display', 'none');
            $fileInfo.css('display', 'block');
        } else { //如果未选中
            $('.file-list .active').removeClass('active');
            $(this).addClass('active');

            if ($fileInfo.css('display') === 'block') {
                $fileInfo.css('display', 'none');
            }
            var title = $.trim( $(this).find('.file-name').text() );
            $fileCtrl.children('.name').text(title);
            if ($fileCtrl.css('display') === 'none') {
                $fileCtrl.css('display', 'block');
            }
        }
    });


//下载
var
    $download = $('#download');

$download
    .on('click', function() {
        var link = $('.file-list .active').find('.file-name').data('downlink');
        alert('访问下载地址: ' + link);
    });

