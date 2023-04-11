import FormProduct from "@components/FormProducts";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import endPoints from "@services/api";
import axios from "axios";

export default function Edit() {
    const [product, setProduct] = useState({});
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        if(!router.isReady) return;
        async function getProduct() {
            const response = await axios.get(endPoints.products.getProduct(id));
            setProduct(response.data);
        }
        getProduct();
    }, [router?.isReady])
    return <FormProduct product={product} />;
}