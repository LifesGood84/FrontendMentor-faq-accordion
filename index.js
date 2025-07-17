const accordionContent = document.querySelectorAll('.accordion-content');

const plusSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 31">
  <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
</svg>`;

const minusSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 31">
  <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
</svg>`;

// first question expanded on page load
window.addEventListener('DOMContentLoaded', () => {
    // this waits until layout is fully rendered before executing it 
    // making sure all styles are applied with no issues
    setTimeout(() => {
        requestAnimationFrame(() => {
            const firstItem = accordionContent[0];

            firstItem.classList.add('open');
            // changing icon:
            const iconContainer = firstItem.querySelector('.faq-expand');
            iconContainer.innerHTML = minusSVG;

            const firstAnswer = firstItem.querySelector('.faq-answer');
            firstAnswer.style.height = 'auto';
            const scrollHeight = firstAnswer.scrollHeight;
            // forces reflow - analogy: now stop and give me the exact layout right now, before moving on:
            firstAnswer.offsetHeight; 
            firstAnswer.style.height = `${scrollHeight}px`;
        });
    }, 50);
});

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.faq-question-block');
    let description = item.querySelector('.faq-answer')

    header.addEventListener('click', () => {
        item.classList.toggle('open');
        let iconContainer = item.querySelector('.faq-expand');

        if(item.classList.contains('open')){
            iconContainer.innerHTML = minusSVG;
            description.style.height = `${description.scrollHeight}px`;
        }
        else{
            iconContainer.innerHTML = plusSVG;
            description.style.height = "0px";
        }

        removeOpen(index);
    });
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 !== index2) {
            item2.classList.remove('open');

            let iconContainer = item2.querySelector('.faq-expand');            
            iconContainer.innerHTML = plusSVG;
            let des = item2.querySelector('.faq-answer');
            des.style.height = '0px';            
        }
    })
}

