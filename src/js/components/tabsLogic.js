export default function tabsLogic() {
    const tabsButtons = $('.btn');
    const tabsList = $('.tabs__list');
  
    // Якщо немає елементів для табів, то виводимо помилку
    if (tabsButtons.length === 0 || tabsList.length === 0) {
      console.error('Tabs buttons or tabs list not found');
      return;
    }
  
    // Додаємо клас "active" першому елементу і табу по дефолту
    const firstButton = $(tabsButtons[0]);
    const firstTabTarget = firstButton.attr('tab-target');
    $(firstButton).addClass('active');
    $(firstTabTarget).addClass('active');
  
    // Обробник кліку для кнопок табів
    tabsButtons.on('click', function () {
      // Видаляємо клас "active" з усіх кнопок і табів
      tabsButtons.removeClass('active');
      tabsList.removeClass('active');
  
      // Додаємо клас "active" на ту кнопку і таб, який був клікнутий
      const tabTarget = $(this).attr('tab-target');
      $(this).addClass('active');
      $(tabTarget).addClass('active');
    });
  }
  

// export default function tabsLogic() {
//     const tabsButtons = $('.btn-tabs');
//     const tabsList = $('.tabs__list');
  
//     // Якщо немає елементів для табів, то виводимо помилку
//     if (tabsButtons.length === 0 || tabsList.length === 0) {
//       console.error('Tabs buttons or tabs list not found');
//       return;
//     }
  
//     // Додаємо клас "active" першому елементу і табу по дефолту
//     $(tabsButtons[0]).addClass('active');
//     $(tabsList[0]).addClass('active');
  
//     // Обробник кліку для кнопок табів
//     tabsButtons.on('click', function () {
//       // Видаляємо клас "active" з усіх кнопок і табів
//       tabsButtons.removeClass('active');
//       tabsList.removeClass('active');
  
//       // Додаємо клас "active" на ту кнопку і таб, який був клікнутий
//       const tabTarget = $(this).data('tabTarget');
//       $(this).addClass('active');
//       $(tabTarget).addClass('active');
//     });
//   }
  







// $(".btn-tabs").click(function () {
//     let targetId = $(this).attr("data-target"); // Get the data-target attribute of the clicked button

//     // Remove active class from all buttons and tabs
//     $(".btn-tabs").removeClass("active");
//     $(".tabs__list").removeClass("active");

//     // Hide all tabs by setting display to none
//     $(".tabs__list").css('display', 'none');

//     $(this).addClass("active"); // Add active class to the clicked button
//     $("#" + targetId).addClass("active"); // Add active class to the corresponding tab content

//     // Apply the grid layout to the active tab
//     $("#" + targetId).css({
//         'display': 'grid',
//         'grid-template-columns': 'repeat(3, 1fr)',
//         'gap': '10px'
//     });
// });

// // Initial state (activate first button and first tab)
// $(".btn-tabs").first().addClass("active");
// $(".tabs__list").first().addClass("active");
// $(".tabs__list").first().css({
//     'display': 'grid',
//     'grid-template-columns': 'repeat(3, 1fr)',
//     'gap': '10px'
// });
