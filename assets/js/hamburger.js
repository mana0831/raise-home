// hamburger.js

// メニューの開閉を切り替える関数
export function setupHamburgerMenu() {
  const hamburgerButton = document.querySelector('.js-hamburger-button');
  const headerNav = document.querySelector('.js-global-nav');
  const header = document.querySelector('.js-header');
  // console.log('ハンバーガーメニュ-セットアップ完了');

  hamburgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('is-active');
    hamburgerButton.classList.toggle('is-active');
    header.classList.toggle('is-active');
    // console.log('ハンバーガーメニューがクリックされました');

    //aria-expandedの値を切り替え
    // 現在がtrueかfalseかを判定して、反転させる
    const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', String(!expanded));

    // メニュー開閉に合わせて body のスクロール制御を切り替える
    document.body.classList.toggle('is-fixed');
  });
}