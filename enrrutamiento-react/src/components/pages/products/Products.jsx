import { products } from "../../../productsMock"
import { Link } from "react-router-dom"
import ProductDetail from "../productDetail/ProductDetail"
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <>
        <button onClick={handleLogOut}>Cerrar Sesion</button>
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems: "center", padding: "20px"}}>
            {
                products.map(product => (
                    <div key={product.id} style={{border:"2px solid black",display:"flex",justifyContent:"space-evenly", alignItems:"center",flexDirection:"column",width:"25%",height:"200px"}}>
                        <h4>{product.name}</h4>
                        <h4>{product.price}</h4>
                        <h4>{product.description}</h4>

                        <Link to={`/products/${product.id}`}>Ver Detalle</Link>
                    </div>                    
                ) )
            }
        </div>
        </>
    )
}

export default Products