function EmptyShelf() { 
    return (
        <div id="empty-shelf">
            <div className="icon">📚</div>  
            <h2 className="empty-shelf-title">Полиця порожня</h2>
            <p className="empty-describtion">Додайте першу книгу, яку хочете прочитати — з автором, жанром, ціною та обкладинкою.</p>
            <button className="add-btn empty-shelf-btn">+ Додати книгу</button>
        </div>
    );
}
export default EmptyShelf