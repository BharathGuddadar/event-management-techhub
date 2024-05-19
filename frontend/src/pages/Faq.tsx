import '../css/faq.css'
import { useState } from "react"
function Faq(){

    const [select,setselected]=useState()

    const toggle=(i:any)=>{
          if(select===i){
            return setselected
          }
          setselected(i)
    }

  return(
    <section id="faq">
    <div className='wrapper'>
        <div className="faqheading">
        <h2>FAQ</h2><br></br>
        <h3>Got Some Quries?</h3>
        </div>
      
      <div className='accordion'>
        {
          data.map((item,i)=>(
            <div className='item'>
              <div className='title' onClick={()=>toggle(i)}>
                <h2>{item.question}</h2>
                <span>{select ===i? <img src="https://cdn.iconscout.com/icon/free/png-256/free-up-arrow-1767496-1502504.png" height={25}></img>:<img src="https://cdn.iconscout.com/icon/free/png-256/free-down-arrow-1767499-1502567.png" height={25}></img>}</span>
              </div>
              <div className={select ===i?'content show':'content'}>{item.answer} </div>

            </div>
          ) )
        }
      </div>
    </div>
    </section>
  )
}

const data=[
  {
    id:1,
    question:'1.Can I get a refund if I cant attend an event?',
    answer:
    'Refund policies vary by event. Please check the specific events refund policy on its page. If refunds are available, follow the instructions provided there. For additional assistance, contact our customer support team.'
},
{
  id:2,
  question:'2. Is there a mobile app for the event website?',
  answer:
  'Yes, our event website has a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store.'
},
{
  id:3,
  question:'3. How do I contact customer support?',
  answer:
  'You can contact our customer support team via the contact form on our website, by phone, or through our live chat feature during business hours. Our contact information is available on the "Contact Us" page.'
},
{
  id:4,
  question:'4. Can I volunteer at an event?',
  answer:
  'Volunteer opportunities vary by event. Check the specific event page for more details or contact the event organizer directly for more information.'
},
]
export default Faq