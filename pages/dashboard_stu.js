import Link from 'next/link'
const dashboard_stu = () => (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <div className="flex items-center justify-center pa4">
      
      <a href="/check" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
     
    <span class="pl1">Math</span>
      </a>
      </div>
      <br/><br/>
      <div className="flex items-center justify-center pa4">
      <a href="/check" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
     
    <span class="pl1">Science</span>
      </a>
      </div>
      <br/><br/>
      <div className="flex items-center justify-center pa4">
      <a href="/check" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
     
    <span class="pl1">Social</span>
      </a>
      </div>
      <Link href ="/index">
      <button type = "submit" > log out </button>
      </Link>
    </div>
  )
  
  export default dashboard_stu 