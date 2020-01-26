
// how to set value in localStorage
// localStoage.setItem()
localStorage.setItem('Key','Value');

// How to access value from localStorage
// localStorage.getItem()
localStorage.getItem('Key'); // access by the key which you set while created value in localStorage

// How to remove any specific value from localStoage 
// localStorage.removeItem()
localStorage.removeItem('Key');

// Access Value by keys
// localStorage.key();
for (let i = 0; i < localStorage.length; i++) {
    let keys = localStorage.key(i);
    console.log(keys+': '+localStorage.getItem(keys))
}
