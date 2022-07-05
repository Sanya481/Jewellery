// Вариант 1

// const faqList = document.querySelector('.faq__list');

// function initAccordion() {
//   const firstSectionBodyHeight = document.querySelector('.faq__block .faq__body > *').clientHeight;
//   document.querySelector('.faq__block .faq__body').style.maxHeight = firstSectionBodyHeight + 'px';
// }

// initAccordion();

// faqList.addEventListener('click', (evt) => {

//   if (evt.target.matches('.faq__question')) {

//     Array.from(document.querySelectorAll('.faq__block')).forEach((section) => {
//       section.querySelector('.faq__body').style.maxHeight = '0px';
//       // section.style.paddingBottom = '50px';
//       // section.querySelector('.faq__question').style.paddingBottom = '20px';
//     })

//     const accordionSection = evt.target.closest('.faq__block');

//     const insideElHeight = accordionSection.querySelector('.faq__body > *').clientHeight;

//     accordionSection.querySelector('.faq__body').style.maxHeight = insideElHeight + 'px';
//   }
// })


// Вариант 2

// const faqList = document.querySelector('.faq__list');

// const faqBlocks = Array.from(faqList.querySelectorAll('.faq__block'));

// faqBlocks.forEach((block) => {

//   const faqAnswer = block.querySelector('.faq__answer');
//   const answerHeight = faqAnswer.clientHeight;

//   faqAnswer.style.height ='0px';

//   block.querySelector('.faq__question').addEventListener('click', (evt) => {

//     // const faqBlock = document.querySelector('.faq__block');

//     const block = evt.target.closest('.faq__block');

//     block.classList.toggle('faq-opened');
//     block.querySelector('.faq__question').classList.toggle('faq-opened');

//     if (block.classList.contains('faq-opened')) {
//       faqAnswer.style.height = answerHeight + 'px';
//     } else {
//       faqAnswer.style.height ='0px';
//     }

//   })
//   console.log(answerHeight);
// })

// Вариант 3

// const faqList = document.querySelector('.faq__list');
// const firstFaqBlock = faqList.querySelector('.faq__block');
// const firstFaqBody = firstFaqBlock.querySelector('.faq__body');

// const closeAllFaqs = () => {
//   Array.from(document.querySelectorAll('.faq__block')).forEach((block) => {
//     block.classList.remove('faq-opened');
//     block.querySelector('.faq__question').classList.remove('faq-opened');
//     block.querySelector('.faq__body').style.maxHeight = '0px';
//   });
// }

// const onOpenFaqQuestion = (evt) => {
//   evt.preventDefault();
//   if (evt.target.matches('.faq__question')) {


//     const faqBlock = evt.target.closest('.faq__block');
//     const faqQuestion = faqBlock.querySelector('.faq__question');
//     const faqBody = faqBlock.querySelector('.faq__body');

//     faqBlock.classList.toggle('faq-opened');
//     faqQuestion.classList.toggle('faq-opened');

//     if (faqBlock.classList.contains('faq-opened')) {

//       closeAllFaqs();

//       faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
//       faqBody.classList.add('faq-opened');
//       faqQuestion.classList.add('faq-opened');

//     } else {
//       faqBody.style.maxHeight = '0px';
//     }
//   }
// }

// faqList.addEventListener('click', onOpenFaqQuestion);


// Вариант 4

/* Список с вопросами */
const faqList = document.querySelector('.faq__list');

/* Функция открытия первого вопроса при загрузке страницы */
const initFirstFaqBlock = () => {
  const faqList = document.querySelector('.faq__list');
  const firstFaqBlock = faqList.querySelector('.faq__block');
  const firstFaqQuestion = firstFaqBlock.querySelector('.faq__question');
  const firstFaqBody = firstFaqBlock.querySelector('.faq__body');

  firstFaqBlock.classList.add('faq-opened');
  firstFaqQuestion.classList.add('faq-opened');
  firstFaqBody.style.maxHeight = firstFaqBody.scrollHeight + 'px';
}

/* Функция открытия вопроса при клике */
const onOpenFaqQuestion = (evt) => {
  evt.preventDefault();
  if (evt.target.matches('.faq__question')) {
    const currentFaqBlock = evt.target.closest('.faq__block');
    const currentFaqQuestion = currentFaqBlock.querySelector('.faq__question');
    const currentFaqBody = currentFaqBlock.querySelector('.faq__body');

    currentFaqBlock.classList.toggle('faq-opened');
    currentFaqQuestion.classList.toggle('faq-opened');

    if (currentFaqBlock.classList.contains('faq-opened')) {
      currentFaqBody.style.maxHeight = currentFaqBody.scrollHeight + "px";
    } else {
      currentFaqBody.style.maxHeight = 0;
    }
  }
}

initFirstFaqBlock();

faqList.addEventListener('click', onOpenFaqQuestion);
