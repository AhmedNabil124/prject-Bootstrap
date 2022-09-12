

// filter items

const filterListItems = document.querySelectorAll('.list-group li');
const filterItems = document.querySelectorAll('.filterd-items a');

filterListItems.forEach(list=>{
  list.addEventListener('click' , ()=>{
    document.querySelector('.list-group li.active').classList.remove('active');
    list.classList.add('active');
    let filteredValue = list.dataset.filter;
    // console.log(filteredValue);
    filterItems.forEach(items=>{
      if (items.classList.contains(filteredValue)) {
        items.classList.remove('hidden');
        items.classList.add('active');
      } else {
        items.classList.add('hidden');
      }

    })
  })
})


// light gallery
lightGallery(document.getElementById('lightgallery'), {
 
});

// AOS init
AOS.init();