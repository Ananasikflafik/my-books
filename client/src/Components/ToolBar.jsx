function ToolBar() { 
    return (<div id="main-toolbar">
        <div className="search-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65">
                </line>
            </svg>
            <input type="text" placeholder="Пошук за назвою, автором, жанром…" />
        </div>
        <div className="filters"> 
            <button className="all-button">Усі </button>
            <button className="want-to-read-button">Хочу прочитати</button>
            <button className="reading-button">Читаю</button>
            <button className="read-button">Прочитано</button>
        </div>
        
    </div>);
}

export default ToolBar