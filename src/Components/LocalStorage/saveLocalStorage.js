const getStoredBookList = () =>{
    const storedBookList = localStorage.getItem('read-book-list');
    if(storedBookList){
        return JSON.parse(storedBookList);
    }
    return []
}

const saveBookList = id =>{
    const storedBookLists = getStoredBookList();
    const exists = storedBookLists.find(bookId => bookId === id);
    if(!exists){
        storedBookLists.push(id);
        localStorage.setItem('read-book-list', JSON.stringify(storedBookLists));
    }
}

const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list-book');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return []
}

const saveWishList = id =>{
    const storedWishList = getStoredWishList();
    const exists = storedWishList.find(bookId => bookId === id);
    if(!exists){
        storedWishList.push(id);
        localStorage.setItem('wish-list-book', JSON.stringify(storedWishList));
    }
}


export {getStoredBookList, saveBookList, getStoredWishList, saveWishList}