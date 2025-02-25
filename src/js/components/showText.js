export default function showText() {
    // Перевіряємо кількість параграфів у кожному елементі
    $('.credit__item-text').each(function () {
        var paragraphs = $(this).find('p');
        var toggleButton = $(this).find('.credit__item-btn');

        // Якщо параграфів більше 2, додаємо кнопку "Детальніше"
        if (paragraphs.length > 2) {
            // Сховати всі параграфи, крім перших двох
            paragraphs.slice(2).hide();

            // Показуємо кнопку, якщо параграфів більше 2
            toggleButton.show();

            // Додавання обробника кліку для кнопки
            toggleButton.on('click', function () {
                if (toggleButton.text() === "Детальніше") {
                    // Показуємо всі параграфи
                    paragraphs.show();
                    toggleButton.text("Згорнути");
                } else {
                    // Сховуємо додаткові параграфи
                    paragraphs.slice(2).hide();
                    toggleButton.text("Детальніше");
                }
            });
        } else {
            // Якщо параграфів 2 або менше, ховаємо кнопку
            toggleButton.hide();
        }
    });
}
