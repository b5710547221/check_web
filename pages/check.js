import Link from 'next/link'
const check = () => (
<div className ="justify-center">
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
<div className ="tc">
    <p>check</p>
    <p>Name : A B</p>
    <p>Time : 12.00</p>
    <p>Status : Yes</p>
    <p></p>
    
</div>
<Link href ="/dashboard_stu">
<button type = "submit" > back </button>
</Link>
</div>
)
export default check