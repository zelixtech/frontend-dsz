import { useState } from 'react'
import {
    XCircleIcon,
    Square2StackIcon,
    TrashIcon
} from '@heroicons/react/24/outline'

import { products, productDetails } from '../../Data/Data'

function GenerateQoutation({ visible, close }) {

    const [ProductList, SetProduct] = useState([{}]);
    const [RProductList, SetRProduct] = useState([{}]);
    const [TACList, SetTACList] = useState("");



    const HandelProdeutSelect = (i, e) => {

        let val = e.target.value;

        let preProduct = [...ProductList];
        preProduct[i]["name"] = val;
        preProduct[i]["data"] = productDetails[0][val].data;
        SetProduct(preProduct);

    }

    const HandelThiknessSelect = (i, element, e) => {

        let val = e.target.value;
        let id = e.target.selectedIndex;


        let dataSet = productDetails[0][element.name].thikness[id - 1];


        let preProduct = [...ProductList];
        preProduct[i]["thikness"] = val;
        preProduct[i]["min"] = dataSet.min;
        preProduct[i]["max"] = dataSet.max;
        preProduct[i]["rate"] = dataSet.max;
        SetProduct(preProduct);

        console.log(i, ProductList.RProductList)
    }

    const HandelRateInpt = (i, e) => {

        let val = e.target.value;

        let preProduct = [...ProductList];
        preProduct[i]["rate"] = val;
        SetProduct(preProduct);

    }



    const RemoveProdctFields = (i) => {

        let productFileds = [...ProductList];
        productFileds.splice(i, 1);
        SetProduct(productFileds);

    }


    const addFields = () => {
        SetProduct([...ProductList, {}])
    }



    const HandelRProdeutSelect = (i, e) => {

        let val = e.target.value;
        let id = e.target.selectedIndex;

        let preRProduct = [...RProductList];
        preRProduct[i]["name"] = val;
        preRProduct[i]["data"] = productDetails[0][val].data;
        SetRProduct(preRProduct);

    }

    const HandelRThiknessSelect = (i, element, e) => {

        let val = e.target.value;
        let id = e.target.selectedIndex;

        let dataSet = productDetails[0][element.name].thikness[id - 1];

        let preRProduct = [...RProductList];
        preRProduct[i]["thikness"] = val;
        preRProduct[i]["min"] = dataSet.min;
        preRProduct[i]["max"] = dataSet.max;
        preRProduct[i]["rate"] = dataSet.max;
        SetRProduct(preRProduct);

        console.log(i, RProductList, ProductList)
    }

    const HandelRProductRateInpt = (i, e) => {
        let val = e.target.value;

        let preRProduct = [...RProductList];
        preRProduct[i]["rate"] = val;
        SetRProduct(preRProduct);

    }



    const RemoveRProdctFields = (i) => {
        // console.log(i, ProductList)
        let rproductFileds = [...RProductList];
        rproductFileds.splice(i, 1);
        SetRProduct(rproductFileds);
        // console.log(ProductList)
    }


    const addRFields = () => {
        SetRProduct([...RProductList, {}])
    }



    const HandelTACInput = (e) => {

        SetTACList(e.target.value);
        // console.log(TACList)
    }

    if (!visible) return null;



    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">

            <div className='w-[1000px] h-[85%] overflow-y-scroll  bg-bg rounded-md'>


                <div className='sticky top-0 backdrop-blur-sm bg-bg bg-opacity-20'>
                    <div className='flex justify-between px-20 pt-5 pb-2'>
                        <h1 className='heading'>Generate Quotation</h1>
                        <XCircleIcon onClick={() => close(false)} className="w-8 hover:cursor-pointer" />
                    </div>
                </div>

                <div className='px-28 pb-20 w-[950px]'>

                    <h1 className='text-heading pt-8 pb-2 text-green-500'>Select Products</h1>

                    <div className=''>


                        {
                            ProductList.map((element, index) => (


                                <div className='mt-2 mb-3' key={index}>


                                    <div className='flex justify-between pt-2 pb-1 mx-5'>

                                        <p className='text-black'>Product - {index + 1}</p>

                                        <div className='flex'>
                                            <Square2StackIcon className='w-5' onClick={() => { addFields() }} />

                                            {index ? <TrashIcon className='ml-2 w-5' onClick={() => { RemoveProdctFields(index) }} /> : null}
                                        </div>

                                    </div>

                                    <div className='border-gray-100 border-2 rounded-md px-8 py-4'>

                                        <div className='flex flex-col pb-2'>
                                            <label className='label'>Select ProductList</label>

                                            <select id="product" name="product" className='NewEmployeeinput' onChange={e => { HandelProdeutSelect(index, e) }} defaultValue={element.name || "Select Option"} value={element.name || "Select Option"} >

                                                <option value="Select Option" disabled hidden >Choose here</option>

                                                {
                                                    products.map((product, id) => {

                                                        return (
                                                            <option value={product} id={id}>{product}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                        </div>

                                        <div className='flex justify-between py-1'>
                                            <div className='flex flex-col py-2'>
                                                <label className='label'>Select thikness</label>

                                                <select id="thikness" name="thikness" className='NewEmployeeinput w-[300px]' onChange={e => { HandelThiknessSelect(index, element, e) }} defaultValue={element.thikness || "Select Option"} value={element.thikness || "Select Option"}>

                                                    <option value="Select Option" disabled hidden >Choose here</option>

                                                    {element.name ?

                                                        productDetails[0][element.name].thikness.map((product, id) => {
                                                            return (
                                                                <option value={product.thikness} id={id}>{product.thikness}</option>
                                                            )
                                                        })

                                                        : null
                                                    }
                                                </select>
                                            </div>

                                            <div className='flex justify-between py-2'>
                                                <div className='flex flex-col justify-end mr-8'>
                                                    <p className='text-[12px]'>Min Rate: {element.min || 0}</p>
                                                    <p className='text-[12px]'>Standrad Rate: {element.max || 0}</p>
                                                </div>
                                                <div className='flex flex-col ml-2'>
                                                    <label className='label'>Enter Rate</label>
                                                    <input className={element.rate < element.min ? 'NewEmployeeinput w-[150px] text-red-500' : 'NewEmployeeinput w-[150px]'} type="text" name="employee_name" value={element.rate} onChange={(e) => { HandelRateInpt(index, e) }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>


                    <h1 className='text-heading pt-8 pb-2 text-green-500'>Recommended Products</h1>

                    <div className=''>

                        {
                            RProductList.map((element, index) => (


                                <div className='mt-2 mb-3' key={index}>


                                    <div className='flex justify-between pt-2 pb-1 mx-5'>

                                        <p className='text-black'>Product - {index + 1}</p>

                                        <div className='flex'>
                                            <Square2StackIcon className='w-5' onClick={() => { addRFields() }} />

                                            {index ? <TrashIcon className='ml-2 w-5' onClick={() => { RemoveRProdctFields(index) }} /> : null}
                                        </div>

                                    </div>

                                    <div className='border-gray-100 border-2 rounded-md px-8 py-4'>

                                        <div className='flex flex-col pb-2'>
                                            <label className='label'>Select ProductList</label>
                                            <select id="product" name="product" className='NewEmployeeinput' onChange={e => { HandelRProdeutSelect(index, e) }} defaultValue={element.name || "Select Option"} value={element.name || "Select Option"} >

                                                <option value="Select Option" disabled hidden >Choose here</option>

                                                {
                                                    products.map((product, id) => {

                                                        return (
                                                            <option value={product} id={id}>{product}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                        </div>

                                        <div className='flex justify-between py-1'>
                                            <div className='flex flex-col py-2'>
                                                <label className='label'>Select thikness</label>

                                                <select id="thikness" name="thikness" className='NewEmployeeinput w-[300px]' onChange={e => { HandelRThiknessSelect(index, element, e) }} defaultValue={element.thikness || "Select Option"} value={element.thikness || "Select Option"}>

                                                    <option value="Select Option" disabled hidden >Choose here</option>

                                                    {element.name ?

                                                        productDetails[0][element.name].thikness.map((product, id) => {
                                                            return (
                                                                <option value={product.thikness} id={id}>{product.thikness}</option>
                                                            )
                                                        })

                                                        : null
                                                    }
                                                </select>
                                            </div>

                                            <div className='flex justify-between py-2'>
                                                <div className='flex flex-col justify-end mr-8'>
                                                    <p className='text-[12px]'>Min Rate: {element.min || 0}</p>
                                                    <p className='text-[12px]'>Standrad Rate: {element.max || 0}</p>
                                                </div>
                                                <div className='flex flex-col ml-2'>
                                                    <label className='label'>Enter Rate</label>
                                                    <input className={element.rate < element.min ? 'NewEmployeeinput w-[150px] text-red-500' : 'NewEmployeeinput w-[150px]'} type="text" name="employee_name" value={element.rate} onChange={(e) => { HandelRProductRateInpt(index, e) }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>



                    <h1 className='text-heading pt-8 pb-2 text-green-500'>Terms and Conditions</h1>

                    <div className=''>
                        <div className='flex flex-col'>
                            <label className='label'>Enter T & C <span className='text-[11px] text-black'>( New point New Line )</span></label>
                            <textarea className='NewEmployeeinput h-[100px]' type="text" name="employee_name" value={TACList} onChange={(e) => { HandelTACInput(e) }}></textarea>
                        </div>
                    </div>


                    <div>
                        {/* <button className='py-2 px-6 mt-10 bg-sky-500 text-white font-medium rounded-md shadow-sm' onClick={() => { addFields() }}>Add</button> */}
                        <button className='py-2 px-6 mt-10 bg-green-500 text-white font-medium rounded-md shadow-sm '>Submit</button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default GenerateQoutation;