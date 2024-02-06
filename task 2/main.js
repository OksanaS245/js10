$(document).ready(function() {
    $('button').click(function() {
        const $btn = $(this);
        const text = $btn.text();
        const label = $btn.data('label');
        
        $btn.text(label).data('label', text);        
        const $div = $('div');
        if ($div.text() === "") {
            $div.text('Какой-то текст'); // Если текста нет, добавляем его
        } else {
            $div.text(''); // Иначе убираем текст
        }
        
        })
})