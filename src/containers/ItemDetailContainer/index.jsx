import MovieDetails from "../../components/ItemDetails";
import products from "../../data/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



          export function ItemDetailContainer() {
            const [movie, setMovie] = useState({});
            const { id } = useParams();
        
            useEffect(() => {
                const promesa = new Promise((resolve, reject) => {
                    resolve(products);
                })});

                
          





          }