// 他のファイルから関数を読み込む
import { setupHamburgerMenu } from './hamburger.js';
import { initSwiper } from './swiper.js';
// import { add, subtract } from './calculate.js';
// import { showResult } from './ui.js';


// ページが読み込まれたらハンバーガーメニューをセットアップ
document.addEventListener('DOMContentLoaded', () => {
  setupHamburgerMenu();
  initSwiper();
});