function show() {
    $('#myModal').modal('show');
}

document.addEventListener('DOMContentLoaded', function () {
    
    const buttons = document.querySelectorAll(".toggleButton");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active-button");
        });
    });
    
    var bentoButton = document.querySelector('.menu button:nth-child(3)'); // 選取便當類按鈕
    var bentoDiv = document.getElementById('bento'); // 選取便當類型的 div

    // 监听便当类按钮点击事件
    bentoButton.addEventListener('click', function() {
        bentoDiv.style.display = bentoDiv.style.display === 'none' ? 'block' : 'none';
    });

    // Modal 相关处理
    var modal = $('#myModal'); // 使用 jQuery 选择器选择模态框
    var modalTriggerButton = document.querySelector('.btn-primary'); // 触发模态框的按钮
    var modalCloseButton = document.querySelector('.modal .close'); // 关闭模态框的按钮

    // 显示模态框
    modalTriggerButton.addEventListener('click', function() {
        modal.modal('show');
    });

    // 关闭模态框
    modalCloseButton.addEventListener('click', function() {
        modal.modal('hide');
    });

    // 点击外部关闭模态框
    window.addEventListener('click', function(event) {
        if (event.target === modal[0]) {
            modal.modal('hide');
        }
    });

    // 更新时间
    function updateTime() {
        const now = new Date();
        const dateString = now.toLocaleString('zh-TW', { hour12: false });
        document.getElementById('time').textContent = dateString;
    }

    setInterval(updateTime, 1000);
    updateTime();
});
