import { useEffect, useState } from "react";
import axios from "axios";
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Products() {

    const [Products, setProducts] = useState({})

    useEffect(() => {

        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOST}/api/product/product_list`,
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                var resData = response.data;

                if (resData.error) {

                    Store.addNotification({
                        title: resData.errorType,
                        message: resData.errorMessage,
                        type: "warning",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 4000,
                            onScreen: true
                        }
                    });

                } else {
                    var prod = JSON.parse(resData.data.product_list);
                    console.log(prod[0])
                    setProducts(prod[0]);
                }

            })
            .catch(function (error) {
                // console.log(error);
            });

    }, [])





    return (
        <div className="basis-[83%] flex flex-col bg-bg">

            <div className="w-[full] h-[90%] overflow-y-scroll mr-2 pl-10 pt-5">
                {
                    Object.entries(Products).map(([prod, value], id) => {
                        return (
                            <div className="py-4" key={id}>
                                <div className="text-blue-500 text-lg">{prod}</div>

                                <div>{Object.entries(value.products).map(([pkey, pvalues], pid) => {
                                    return (

                                        <div className="py-2 pl-5">
                                            <div className="py-2">{pkey}</div>

                                            <div className="flex border-2 border-gray-700 rounded-sm py-2 px-4 w-2/3">

                                                <div className="basis-1/2">

                                                    {
                                                        Object.entries(pvalues).filter(function (e) { return e[0] !== "data" }).map(([key, val], pd_id) => {
                                                            return (
                                                                <div>{key}:{val}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="basis-1/2">

                                                    <p>Data</p>
                                                    {
                                                        pvalues.data ? Object.entries(pvalues.data).map(([dkey, dval], d_id) => {
                                                            return (
                                                                <div>{dkey}:{dval}</div>
                                                            )
                                                        }) : null}

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}</div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products