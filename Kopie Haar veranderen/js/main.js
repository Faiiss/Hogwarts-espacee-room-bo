class Avatar {
    constructor() {
      this.avatarItems = document.querySelectorAll('.avatar__list-item');
      this.activeClass = 'active';
    }
  
    handleClick() {
      this.avatarItems.forEach(item => {
        // Exclusief het actieve item, voeg klikgebeurtenis toe aan alle andere avatar-items
        if (!item.classList.contains(this.activeClass)) {
          item.addEventListener('click', () => {
            // Verwijder de actieve klasse van alle items
            this.avatarItems.forEach(item => item.classList.remove(this.activeClass));
            // Voeg de actieve klasse toe aan het geselecteerde item
            item.classList.add(this.activeClass);
          });
        }
      });
    }
  
    init() {
      this.handleClick();
    }
  }
  
  const avatar = new Avatar();
  avatar.init();
  