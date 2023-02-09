import ItemList from "./ItemList"

function ItemListContainer(props){
    return(
        <div className="container">
            <h1 className="txt-center">{props.titulo}</h1>
            <br/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer