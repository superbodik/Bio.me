const DISCORD_ID = '724237997108887552';
const AVATAR_HASH = 'a_abcdef123456'; 


const avatarImg = document.getElementById('discord-avatar');
avatarImg.src = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${AVATAR_HASH}.png?size=256`;

avatarImg.onerror = function() {
  this.src = './assets/images/440c1ac7bc8992997820d559d8cd041e.webp'; 
  console.warn('Не удалось загрузить аватарку Discord. Используется запасное изображение.');
  

  this.onerror = function() {
    console.error('Ошибка: запасное изображение тоже не найдено!');
    this.style.display = 'none'; 
  };
};