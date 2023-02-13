import './Services.css';

export default function Services(){

    const servicesData = [
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQyQp9b6_MJ_JspMHD_biAvkvh6hb6fX_KA&usqp=CAU',
            serviceName:"Quick Bank Loan Approval"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVF5hSJlu75SMRR_OlA05VXUkrZR2-iZSeg&usqp=CAU',
            serviceName:"Quick Cheque Payments"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm15SIwxgUTpJ-97ME4GEkEYsdt3GAfzL75g&usqp=CAU',
            serviceName:"Easy Credit Card Payments"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDHXmFn1rR6MeH7xSVZgMctV3e_93Pwd1mg&usqp=CAU',
            serviceName:"Most Secure Banking Service"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzOU9v2moL_si6RPZ23CF-Dd7Yk2BulM-Rw&usqp=CAU',
            serviceName:"24x7 Customer Support"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eBFENJyRTjpjeiFZx1KvHS_ElYbuLjYvaQ&usqp=CAU',
            serviceName:"Easy and Secure Online Banking"
        }
    ]

    return(
        <div className='services-section bg-warning py-5' id='services'>
            <h1>Services by RS Bank</h1>
            <div className='services-content'>
                {
                    servicesData.map((services, index) => {
                        return(
                            <div key={index} className='services-card'>
                                <img src={services.url} alt={services.serviceName}></img>
                                <h4 className='services-card-info'>{services.serviceName}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}