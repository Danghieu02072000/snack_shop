$('.customeContainer').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoHeight: true,
  items: window.number_columns,
  responsive: {
    0: {
      items: 1, // Số lượng item hiển thị khi chiều rộng màn hình nhỏ hơn hoặc bằng 0px
    },
    768: {
      items: 4, // Số lượng item hiển thị khi chiều rộng màn hình từ 768px trở lên
    },
    1024: {
      items: 4, // Số lượng item hiển thị khi chiều rộng màn hình từ 1024px trở lên
    },
  },
});
