function hideListItems() {
    const listItems = document.querySelectorAll('ul li');
    const windowWidth = window.innerWidth;
    const itemsToShow = Math.floor((window.innerWidth - 600) / 60);
  
    for (let i = 0; i < listItems.length; i++) {
      if (i < itemsToShow) {
        listItems[i].style.display = 'list-item';
      } else {
        listItems[i].style.display = 'none';
      }
    }
  
    const allHidden = array.from(listItems).every(item => item.style.display === 'none');
  
    if (allHidden) {
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'none';
      }
    } else {
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'block';
      }
    }
  }
  
  window.addEventListener('resize', hideListItems);
  window.addEventListener('load', hideListItems);
  
  hideListItems();
  