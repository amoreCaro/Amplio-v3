export default function modal() {
    $(document).ready(function () {

        // Active modal when item is clicked
        $('.template__item').on('click', function () {
            // Отримуємо всі дані з елемента, на який клікнули
            var image = $(this).find('.template__item-image img').attr('src');
            var title = $(this).find('.template__item-text h3').text();
            var subtitle = $(this).find('.template__item-text p').text();
            var quote = $(this).find('.template__item-quote p').text();

            // Вставляємо ці дані в модальне вікно
            $('#modalBio .modal__image img').attr('src', image);
            $('#modalBio .modal__text h3').text(title);
            $('#modalBio .modal__text p').text(subtitle);

            // Перевіряємо наявність цитати і додаємо її, якщо є
            if (quote) {
                $('#modalBio .modal__quote').html('<p>' + quote + '</p>');
            } else {
                $('#modalBio .modal__quote').html('');  // Якщо цитати немає, очищаємо блок
            }

            // Додаємо клас 'active' для відображення модалки та overlay
            $('#modalBio').addClass('active');
            $('.overlay').addClass('active');
        });

        // Close modal when close button is clicked
        $('.closeModal').on('click', function () {
            // Remove active class from modal and overlay
            $('#modalBio').removeClass('active');
            $('.overlay').removeClass('active');
        });

        // Close modal when overlay is clicked
        $('.overlay').on('click', function () {
            // Remove active class from modal and overlay when overlay is clicked
            $('#modalBio').removeClass('active');
            $('.overlay').removeClass('active');
            $(this).removeClass('active');
        });
    });
}
