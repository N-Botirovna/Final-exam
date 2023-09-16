import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ProjectsTitle from "../../ui/ProjectsTitle";
import Title from "../../ui/Title";
import Aksiya from "./Aksiya";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect
        (() => {
            const fetchData = async () => {
                setIsPending(true);
                try {
                    const req = await fetch(url);
                    if (!req.ok) {
                        throw new Error(req.statusText);
                    }
                    const data = await req.json();
                    setData(data);
                    setIsPending(false);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setIsPending(false);
                }
            };
            fetchData();
        }, [url]);

    return { data, isPending, error };
}

  
const Discounts = () => {
    const url = "http://localhost:1212/api/products";

    const { data, isPending, error } = useFetch(url);
    const [page, setPage] = useState([]);
    // const AddItem = (category) => {
    //     if (data?.products) {
    //       let items = [];
    //       for (const item of data.products) {
    //           items.push(item);
    //       }
    //       setPage(items);
    //     }
    //     console.log("Clicked");
    //   };

    useEffect(() => {
        if(data?.products) {
          setPage(data.products); 
        }
      }, [data]);
    return (
        <>
            <div className="container mx-auto">
                <ProjectsTitle title={"Aksiyadagi mahsulotlar"} />
                <div className="container mx-auto">
                    {page?.map((page) =>
                        page.new_cost !== null ? (
                            <Aksiya
                                key={page.id}
                                weight={page.weight}
                                warranty={page.warranty}
                                size={page.size}
                                name={page.name}
                                cost={page.cost}
                                capacity={page.capacity}
                                images={page.product_images}
                                new_cost={page.new_cost}
                            />
                        ) : (<Title title={""} />)
                    )}

                    { }
                </div>
            </div>
        </>
    )

}
export default Discounts