import Link from 'next/link'
const dashboard_teacher_science= () => (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <div class="pa4">
      <h1>Science</h1>
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr class="stripe-dark">
          <th class="fw6 tl pa3 bg-white">ID</th>
          <th class="fw6 tl pa3 bg-white">Name</th>
          <th class="fw6 tl pa3 bg-white">Time</th>
          <th class="fw6 tl pa3 bg-white">Status</th>
          
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr class="stripe-dark">
          <td class="pa3">1</td>
          <td class="pa3">A B</td>
          <td class="pa3">12.00</td>
          <td class="pa3">yes</td>
        </tr>
        <tr class="stripe-dark">
          <td class="pa3">2</td>
          <td class="pa3">C D</td>
          <td class="pa3">Unknown</td>
          <td class="pa3">no</td>
        </tr>
        
      </tbody>
    </table>
  </div>

</div>
<Link href ="/dashboard_teacher">
<button type = "button" > back </button>
</Link>
    </div>
  )
  
  export default dashboard_teacher_science