import React from 'react';
import Layout from '../component/layout/layout';
import styles from './styles/delivery_payment.module.css';

function DeliveryAndPayment() {
    return (
        <>
            <Layout>
                <div className={styles.text_block}>
                    <p>When placing an order, you have the opportunity to specify the following methods of product delivery:</p>
                    <h4>Pickup</h4>
                    <p>
                        This is the best way for those who want to "feel" the product first, and then buy it. Take advantage of the location of our office near the Vokzalna metro station and the Central railway station, as well as free parking with guaranteed free spaces. See our working hours and address on the "Contacts" page. 
                        When purchasing, you can get additional consultations, familiarize yourself with similar and related products, adjust your order if necessary. Use the opportunity to check the functionality of the product in our service center, as well as receive other necessary services from the company's specialists if you wish. 
                        If you agree with the manager on the approximate time of pickup - your order will be collected and ready for delivery. All documents will be prepared in advance. Time spent on receiving the order will be minimal. 
                        Even if you have not placed an order in advance, we are always happy to see you in our showroom and are ready to offer the goods and services you need. 
                        In case of pick-up, payment for orders for individuals is made in cash or in case of prepayment by bank transfer.
                    </p>
                    <h4>Delivery in Kyiv. </h4>
                    <p>
                        Our delivery department carries out address delivery of orders in Kyiv "to the door" of customers during working hours. Delivery takes place during working hours, the minimum amount of the delivery order is 500 UAH, the cost of delivery within Kyiv is 50 UAH, paid separately. When ordering from UAH 6,000. - delivery is free (within Velika Okruzhnaya). Please specify the address and preferred delivery time when placing the order.
                        Orders placed before 12:00 are delivered on the day the order is placed. Orders made after 12:00 - the next day. 
                        You can also agree with the manager on special delivery conditions: express delivery - within 2 hours from the moment of placing the order, delivery to the suburbs (outside the district), delivery outside working hours. In these cases, a minor adjustment of both the cost of the product and the cost of delivery is possible upon agreement of the parties. 
                        Payment for the order for individuals will be made to the courier in cash or with advance payment by bank transfer. You receive the product you ordered, a warranty card and an invoice.
                    </p>
                    <h4>Sending orders across Ukraine.</h4>
                    <p>
                        We ship orders across Ukraine via any carrier convenient for you (Nova Poshta, Justin, Night Express, Gunsel, etc.). The cost of product delivery is paid separately when receiving the order at the carrier's rates. At your request, the order can be sent to the nearest warehouse of the carrier, or as address delivery "to the door". 
                        When placing an order, please indicate: Surname First name Patronus, mobile number. phone number, city and warehouse (department) number of the carrier or delivery address "to the door". 
                        Orders placed before 12:00 are shipped on the day the order is placed. Orders made after 12:00 - the next day. Express delivery is possible within 2 hours from the moment the order is placed. In this case, a slight adjustment of the price of the product is possible upon agreement of the parties. 
                        You receive the product you ordered, a warranty card and an invoice. 
                        We pack the goods properly, for expensive orders it is possible to arrange additional insurance. 
                        At your discretion, choose the required form of payment for the order. 
                        Cash on delivery ("cash on delivery") - You pay when you receive the goods. This service is offered only by Nova Poshta and Justin, its cost is 2% of the order amount. These costs are paid additionally by the buyer. In some cases: when ordering a batch of goods, when ordering scarce goods, when the hryvnia exchange rate collapses, when ordering expensive or large-sized goods in small settlements, shipment on postpaid terms is not carried out without partial or full prepayment of the order. Sending orders worth more than UAH 50,000. is not carried out on postpaid conditions. 
                        Bank transfer (for example, through Privat24). The order is sent immediately after receiving the payment. Usually the cost of banking services is 1% of the order value, but when paying through Privat24 it is only 0.3%. Instructions for payment by bank transfer are provided to the buyer after the order is processed. Payment for batches of goods and for orders over UAH 50,000. accepted only to the current account of our company in a non-cash way.
                    </p>
                    <h4>Payment of orders for legal entities.</h4>
                    <p>
                        For legal entities, payment for orders will be made by non-cash payment with VAT. 
                        When placing an order, select the type of buyer - legal entity. All prices will be listed. Additional fields will also become available to you, fill them in, and then after processing your order, we will be able to generate a payment invoice for you faster. 
                        The cost of delivery may be included in the price of the product. The goods will be delivered after receiving the payment. 
                        At your request, it is possible to conclude a sales contract or a supply contract. 
                    </p>
                    <h4>Return of funds to the buyer.</h4>
                    <p>
                        For orders placed by buyers on Prepayment terms, if the "Euro Plus" online store cannot fulfill the order within the terms agreed with the buyer, the buyer will be refunded in full. The store informs the buyer about the cancellation of the order immediately. The buyer's request for a refund is fulfilled within one banking day. 
                        If the product is returned within 14 days from the moment of purchase, the buyer will be refunded on the basis of his application after receiving the return of the product within the terms stipulated by the Law of Ukraine on the Protection of Consumer Rights. 
                        In the event that the warranty repair cannot be performed, on the basis of the act of write-off from the ASC and the buyer's application, the buyer will be refunded on the basis of his application within the terms stipulated by the Law of Ukraine on the Protection of Consumer Rights. 
                        The decision to return the money to the buyer from the complaint is made on the basis of his application within the terms stipulated by the Civil Code of Ukraine. 
                        The product return request form is located on the "GUARANTEE AND SERVICE" page of our website.
                    </p>
                </div>
            </Layout>
        </>
    );
}

export default DeliveryAndPayment;

