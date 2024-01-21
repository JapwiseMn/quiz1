'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    const ul = document.createElement('ul');
    const li0 = document.createElement('li')
    li0.textContent = quiz[1];
    li0.addEventListener('click', () => {
      if(quiz[4] === 0){
        li0.classList.add('correct');
      }else{
        li0.classList.add('wrong');
      }
    });
    const li1 = document.createElement('li')
    li1.textContent = quiz[2];
    li1.addEventListener('click', () => {
      if(quiz[4] === 1){
        li1.classList.add('correct');
      }else{
        li1.classList.add('wrong');
      }
    });

    const li2 = document.createElement('li')
    li2.textContent = quiz[3];
    li2.addEventListener('click', () => {
      if(quiz[4] === 2){
        li2.classList.add('correct');
      }else{
        li2.classList.add('wrong');
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    
    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
  }

  const quizzes = [
    ['私の身長は？', '175cm', '178cm', '180cm', 1],
    ['まなちゃんがiLife大阪で撮ったチェキの枚数は？', '1枚', '3枚', '5枚', 1],
    ['一緒に行ったライブ、フェスの数は？', '5', '8', '11', 2],
    ['まなちゃんとの思い出の曲は？', 'Baby Baby / 銀杏BOYZ', 'See you in my dream / Age Factory', 'boys&girls / Maki', 0],
    ['おれが一番好きな居酒屋のメニューは？', '鶏皮', 'だし巻き卵', 'ジャーマンポテト', 2],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });

}
