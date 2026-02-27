const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const logoLink = document.querySelector('header .logo');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });

  if (logoLink) {
    logoLink.addEventListener('click', () => navLinks.classList.remove('active'));
  }
}

const roles = ['Developer', 'Analyst', 'Tester', 'Trader'];
let index = 0;
const roleEl = document.getElementById('role');
const roleArticleEl = document.getElementById('role-article');

const getArticle = (word) => (/^[aeiou]/i.test(word) ? 'an' : 'a');

if (roleEl) {
  if (roleArticleEl) {
    roleArticleEl.textContent = getArticle(roles[index]);
  }

  setInterval(() => {
    roleEl.classList.remove('fade-in');
    roleEl.classList.add('fade-out');

    setTimeout(() => {
      index = (index + 1) % roles.length;
      roleEl.textContent = roles[index];
      if (roleArticleEl) {
        roleArticleEl.textContent = getArticle(roles[index]);
      }
      roleEl.classList.remove('fade-out');
      roleEl.classList.add('fade-in');
    }, 350);
  }, 2200);
}
