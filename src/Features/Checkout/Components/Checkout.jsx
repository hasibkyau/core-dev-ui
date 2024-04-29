import React from 'react'
import { useForm } from 'react-hook-form';
import { useGlobalCtx } from '../../../Contexts/GlobalProvider';
import Contact from './Contact'
import Order from './Order'

export function Checkout() {
    const { register, handleSubmit, getValues } = useForm();
    const { getPayment, executeBkashPayment, createPayment, createAgreement } = useGlobalCtx();


    const onSubmit = (data) => {
        const formData = getValues(); // Get form data
        console.log('Form Data:', formData);
        console.log('onSubmit', data);
    } ;

    const onOrder = (price) => {
        const formData = getValues(); // Get form data
        console.log('Form Data:', formData);
        if(formData.phone){
            let data = {
                phone: formData.phone,
                email: formData.email,
                totalPrice: price
            }
            // getPayment(data);
            executeBkashPayment(data);
            // createPayment(data);
            // createAgreement(data);
            console.log('data',data);
            
        }else{
            console.log('not valid');
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit())}>
            <div className="grid grid-cols-12 gap-x-8 py-12">
                <div className="col-span-7 ">
                    <Contact register={register} />
                </div>
                <div className="col-span-5 ">
                    <Order getTotalPrice={onOrder}/>
                </div>
            </div>
        </form>
    )
}
