export default function accordion() {
  $(".faq__item").on("click", function() {
    const $this = $(this);
    const tabsId = $this.data("tabTarget");

    // Toggle 'active' class on the clicked FAQ item
    $this.toggleClass("active").siblings().removeClass("active");

    // Toggle the content visibility by adding/removing 'active' class
    $("#" + tabsId).toggleClass("active").siblings().removeClass("active");
  });
}
